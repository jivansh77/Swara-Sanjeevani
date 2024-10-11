// frontend/src/pages/Blog.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axiosInstance';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch news articles
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/blog/articles');
        setArticles(response.data);
        console.log('Fetched Articles:', response.data); // Debugging
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news articles.');
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-accent">Blogs and Articles</h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-accent">Blogs and Articles</h2>
      {articles.length === 0 ? (
        <h3>No news articles available.</h3>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles
            .filter(article => article.urlToImage)
            .map((article, index) => (
              // Your rendering code here
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