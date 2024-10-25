// frontend/src/pages/Questionnaire.jsx
import React, { useEffect, useState } from 'react';
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import Sentiment from 'sentiment';
import { useNavigate } from "react-router-dom";

// Add your Client ID here ⬇️
const clientId = "226f0a24-c91f-45b0-ae83-d7d231f7a5f2";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#d1a984",
});

const config = {
  composerPlaceholder: "Type something...",
  botName: "Swara",
  botAvatar: "/logo.jpeg",
  botDescription:
    "Hi! 👋 I am Swara, your virtual therapist. How are you feeling today?",
  email: {
    title: "jivansh777@gmail.com",
    link: "mailto:jivansh777@gmail.com",
  },
  phone: {
    title: "9867015918",
    link: "tel:9867015918",
  },
  termsOfService: {
    title: "Terms of service",
    link: "https://botpress.com/terms",
  },
  privacyPolicy: {
    title: "Privacy policy",
    link: "https://botpress.com/privacy",
  },
};

// Initialize Sentiment
const sentiment = new Sentiment();

// Words to be excluded from sentiment analysis
const excludedWords = {
  feeling: 0,
  "👋": 0,
  "hi": 0,
  "hello": 0,
};

// Function to adjust positive words score
const adjustSentimentResult = (result) => {
  // Halve the positive score
  const adjustedPositiveScore = result.positive.reduce((acc, word) => acc + sentiment.analyze(word).score, 0) / 1.75;

  // The negative score remains the same
  const negativeScore = result.negative.reduce((acc, word) => acc + sentiment.analyze(word).score, 0);

  // Calculate the adjusted total score
  const adjustedScore = adjustedPositiveScore + negativeScore;

  return adjustedScore;
};

// Emotion mapping function based on sentiment score
const mapSentimentToEmotion = (score) => {
  if (score > 5) return 'Excitement';
  if (score > 3) return 'Happiness';
  if (score > 0) return 'Contentment';
  if (score === 0) return 'Neutral';
  if (score < 0 && score >= -2) return 'Anxiety';
  if (score < -2 && score >= -4) return 'Sadness';
  if (score < -4) return 'Depression';
  return 'Neutral'; // Fallback in case nothing matches
};

const Questionnaire = () => {
  const client = getClient({ clientId });
  const navigate = useNavigate();

  // States to track outgoing messages (user's conversations)
  const [messagesOutgoing, setMessagesOutgoing] = useState([]);
  const [conversationCount, setConversationCount] = useState(0);
  const conversationLimit = 4; // Perform sentiment analysis after 2 conversations

  // Function to extract all visible text on the page
  const getAllPageText = () => {
    return document.body.innerText; // This gets all visible text on the page
  };

  // Perform sentiment analysis on the entire page
  const performSentimentAnalysis = () => {
    const pageText = getAllPageText();
    console.log("Page Text:", pageText);

    // Perform sentiment analysis on the entire page text with excluded words
    const result = sentiment.analyze(pageText, { extras: excludedWords });
    console.log("Sentiment analysis result:", result);

    // Adjust the sentiment score
    const adjustedScore = adjustSentimentResult(result);
    console.log("Adjusted Sentiment Score:", adjustedScore);

    // Map sentiment score to detailed emotion
    const detectedEmotion = mapSentimentToEmotion(adjustedScore);
    console.log("Detected Emotion:", detectedEmotion);

    // Navigate to the therapy page with detected emotion
    navigate("/therapy", { state: { emotion: detectedEmotion } });
  };

  useEffect(() => {
    const handleOutgoingMessage = (message) => {
      setMessagesOutgoing((prev) => [...prev, message]);

      // Increment conversation count whenever the user sends a message
      setConversationCount((prevCount) => prevCount + 1);
    };

    // Listen to outgoing messages from the user
    client.on("messageSent", handleOutgoingMessage);
  }, [client]);

  useEffect(() => {
    // When user sends 2 messages (2 conversations), perform sentiment analysis on the entire page
    if (conversationCount === conversationLimit) {
      console.log("Two conversations reached, performing sentiment analysis.");
      performSentimentAnalysis();
    }
  }, [conversationCount]);

  return (
    <div
      style={{
        marginLeft: "140px",
        paddingTop: "100px",
        paddingBottom: "40px",
        width: "80vw",
        height: "100vh",
      }}
    >
      <style>{style}</style>
      <WebchatProvider theme={theme} client={client} configuration={config}>
        <Webchat />
      </WebchatProvider>
    </div>
  );
};

export default Questionnaire;