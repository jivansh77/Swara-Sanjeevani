// // frontend/src/pages/Blog.jsx
// import React, { useEffect, useState } from 'react';
// import axios from '../axiosInstance';

// const Blog = () => {
//   const [articles, setArticles] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch news articles
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get('/blog/articles');
//         setArticles(response.data);
//         console.log('Fetched Articles:', response.data); // Debugging
//       } catch (error) {
//         console.error('Error fetching news:', error);
//         setError('Failed to fetch news articles.');
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (error) {
//     return (
//       <div className="container mx-auto px-4 py-20">
//         <h2 className="text-4xl font-bold mb-12 text-center text-accent">Blogs and Articles</h2>
//         <p className="text-red-600">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-20">
//       <h2 className="text-4xl font-bold mb-12 text-center text-accent">Blogs and Articles</h2>
//       {articles.length === 0 ? (
//         <h3>No news articles available.</h3>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles
//             .filter(article => article.urlToImage)
//             .map((article, index) => (
//               // Your rendering code here
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition duration-300"
//               >
//                 <img
//                   src={article.urlToImage}
//                   alt={article.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">
//                     <a
//                       href={article.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-accent hover:underline"
//                     >
//                       {article.title}
//                     </a>
//                   </h3>
//                   <p className="text-gray-700 mb-4">{article.description}</p>
//                   <p className="text-gray-500 text-sm mt-1">
//                     {new Date(article.publishedAt).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blog;

// frontend/src/pages/Blog.jsx
import React from 'react';

const Blog = () => {
  // Hardcoded articles related to music therapy
  const articles = [
    {
      title: 'The Healing Power of Ragas in Music Therapy',
      description: 'Explore how Indian classical Ragas are being used in modern-day music therapy to treat mental and physical health conditions.',
      url: 'https://www.darbar.org/article/ragatherapy-indian-music-s-healing-powers',
      urlToImage: 'https://images.everydayhealth.com/images/emotional-health/potential-health-benefits-of-music-therapy-1440x810.jpg',
      publishedAt: '2023-01-12',
    },
    {
      title: 'Music Therapy for Anxiety and Stress Relief',
      description: 'Learn how music therapy, particularly with calming Ragas, helps reduce anxiety and manage stress effectively.',
      url: 'https://example.com/music-therapy-anxiety',
      urlToImage: 'https://www.bw.edu/assets/stories/2022/fall/music-therapy-payton-cole-playing-guitar.jpg',
      publishedAt: '2023-02-15',
    },
    {
      title: 'How Music Therapy Enhances Mental Well-Being',
      description: 'This article delves into the profound impact of music therapy on mental well-being, focusing on emotional regulation through sound.',
      url: 'https://example.com/music-therapy-mental-well-being',
      urlToImage: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2382203.png',
      publishedAt: '2023-03-10',
    },
    {
      title: 'Music Therapy and Cognitive Rehabilitation',
      description: 'Find out how music therapy is used for cognitive rehabilitation in patients suffering from Alzheimer’s and other neurological conditions.',
      url: 'https://example.com/music-therapy-cognitive-rehabilitation',
      urlToImage: 'https://s3.gomedia.ws/wp-content/uploads/sites/72/2020/11/09141622/AdobeStock_69280540-scaled.jpeg',
      publishedAt: '2023-04-20',
    },
    {
      title: 'Music Therapy for Physical Pain Management',
      description: 'Discover how music therapy is used to manage chronic pain in patients, helping them cope with physical discomfort and improve quality of life.',
      url: 'https://example.com/music-therapy-pain-management',
      urlToImage: 'https://fairviewseniorliving.com/wp-content/uploads/2022/07/FairviewSeniorLIving-MusicTherapySeniors-BlogGraphics03.jpeg',
      publishedAt: '2023-05-05',
    },
    {
      title: 'Raga-Based Healing for Insomnia and Sleep Disorders',
      description: 'This article highlights how specific Ragas are used in music therapy to help treat insomnia and improve sleep quality.',
      url: 'https://example.com/raga-therapy-insomnia',
      urlToImage: 'https://www.tonara.com/wp-content/uploads/2021/05/Benefits-of-Music-Therapy.jpg',
      publishedAt: '2023-06-30',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-accent">Blogs and Articles</h2>
      {articles.length === 0 ? (
        <h3>No blogs available.</h3>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-gray-700 mb-4">{article.description}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;