// frontend/src/pages/Blog.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axiosInstance';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from backend or use static data
    const fetchArticles = async () => {
      try {
        const res = await axios.get('/blog'); // Ensure your backend has this endpoint
        setArticles(res.data);
      } catch (err) {
        console.error(err.response ? err.response.data : err.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-accent">Blog Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-primary">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
              <Link
                to={`/blog/${article.id}`}
                className="text-secondary font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
