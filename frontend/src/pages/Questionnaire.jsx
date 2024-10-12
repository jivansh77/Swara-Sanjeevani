// frontend/src/pages/Questionnaire.jsx
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Add your Client ID here ⬇️
const clientId = "226f0a24-c91f-45b0-ae83-d7d231f7a5f2";

const { theme } = buildTheme({
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

const Questionnaire = () => {
  const client = getClient({ clientId });
  const history = useNavigate();

  // useEffect(() => {
  //   // Initialize the webchat when the component mounts
  //   client.setConfig({
  //     // Any additional configurations
  //   });
  // }, [client]);

  return (
    <div style={{marginLeft: "140px", paddingTop:"100px", paddingBottom:"40px", width: "80vw", height: "100vh" }}>
      <WebchatProvider theme={theme} client={client} configuration={config}>
        <Webchat />
      </WebchatProvider>
    </div>
  );
};

export default Questionnaire;