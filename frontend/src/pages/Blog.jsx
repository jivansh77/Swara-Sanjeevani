// src/pages/Blog.jsx
import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from backend or use static data
    const fetchArticles = () => {
      const staticArticles = [
        {
          id: 1,
          title: 'The Healing Power of Ragas for Mental Health',
          excerpt: 'Discover how Indian classical ragas can alleviate stress and anxiety...',
          content: 'Full article content here...',
        },
        {
          id: 2,
          title: 'The Science of Sound Therapy: How Frequencies Affect Your Brain',
          excerpt: 'Explore the impact of sound frequencies on brain activity and wellness...',
          content: 'Full article content here...',
        },
        // Add more articles as needed
      ];
      setArticles(staticArticles);
    };

    fetchArticles();
  }, []);

  return (
    <div className='container mx-auto px-4 py-10'>
      <h2 className='text-3xl font-bold mb-6'>Blog Articles</h2>
      {articles.map((article) => (
        <div key={article.id} className='mb-8'>
          <h3 className='text-2xl font-semibold mb-2'>{article.title}</h3>
          <p className='text-gray-700 mb-2'>{article.excerpt}</p>
          <button className='text-blue-500 hover:underline'>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
