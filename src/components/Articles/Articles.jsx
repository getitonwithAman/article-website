import React from 'react';
import './Articles.css'; // Import CSS for styling

const Articles = () => {
  const articles = [
    // Example data for 20 articles with varied categories
    { id: 1, title: 'Exploring the Ruins of Machu Picchu', category: 'Travel', content: 'Discover the ancient Inca ruins and breathtaking landscapes of Machu Picchu.', date: '2024-07-06', author: 'Emily Davis', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Classic Italian Pasta Recipes', category: 'Food', content: 'Learn how to prepare traditional Italian pasta dishes with these easy recipes.', date: '2024-07-05', author: 'Luigi Rossi', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Introduction to React Hooks', category: 'Technology', content: 'Explore the basics of React Hooks and how they simplify state management in React applications.', date: '2024-07-04', author: 'Sarah Johnson', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Healthy Smoothie Recipes for Breakfast', category: 'Food', content: 'Delicious and nutritious smoothie recipes to kick-start your day on a healthy note.', date: '2024-07-03', author: 'Michael Brown', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Top 10 Travel Gadgets You Must Have', category: 'Travel', content: 'Essential gadgets and accessories to enhance your travel experience.', date: '2024-07-02', author: 'Emma Wilson', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Introduction to Docker Containers', category: 'Technology', content: 'Learn how to use Docker containers for deploying and managing applications.', date: '2024-07-01', author: 'James Smith', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Authentic Street Food Experiences in Thailand', category: 'Food', content: 'Explore the vibrant street food culture of Thailand and must-try dishes.', date: '2024-06-30', author: 'Sophia Lee', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Tips for Remote Working: Staying Productive', category: 'Development', content: 'Practical tips and strategies for staying productive while working remotely.', date: '2024-06-29', author: 'Daniel Clark', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Best Mobile Apps for Travelers', category: 'Travel', content: 'Must-have mobile apps that every traveler should download for a seamless travel experience.', date: '2024-06-28', author: 'Sophie Turner', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, title: 'Classic French Desserts You Must Try', category: 'Food', content: 'Indulge in delicious and decadent French dessert recipes that will satisfy your sweet tooth.', date: '2024-06-27', author: 'Pierre Martinez', imageUrl: 'https://via.placeholder.com/150' },
    { id: 11, title: 'Introduction to Machine Learning Algorithms', category: 'Technology', content: 'An overview of popular machine learning algorithms and their applications.', date: '2024-06-26', author: 'Emma White', imageUrl: 'https://via.placeholder.com/150' },
    { id: 12, title: 'Hidden Gems of Europe: Off-the-Beaten-Path Destinations', category: 'Travel', content: 'Discover lesser-known but stunning destinations across Europe.', date: '2024-06-25', author: 'David Brown', imageUrl: 'https://via.placeholder.com/150' },
    { id: 13, title: 'Delicious BBQ Recipes for Summer Parties', category: 'Food', content: 'Easy and flavorful BBQ recipes that are perfect for summer gatherings.', date: '2024-06-24', author: 'Anna Garcia', imageUrl: 'https://via.placeholder.com/150' },
    { id: 14, title: 'Latest Trends in Web Development', category: 'Technology', content: 'Stay updated on the latest trends and technologies shaping the field of web development.', date: '2024-06-23', author: 'Jack Turner', imageUrl: 'https://via.placeholder.com/150' },
    { id: 15, title: 'Planning a Budget-Friendly Backpacking Trip', category: 'Travel', content: 'Tips and tricks for planning a budget-friendly backpacking adventure.', date: '2024-06-22', author: 'Sophia Brown', imageUrl: 'https://via.placeholder.com/150' },
    { id: 16, title: 'Vegetarian Cooking: Easy and Delicious Recipes', category: 'Food', content: 'Explore flavorful and nutritious vegetarian recipes for every meal.', date: '2024-06-21', author: 'Lucas Wilson', imageUrl: 'https://via.placeholder.com/150' },
    { id: 17, title: 'Introduction to Cybersecurity: Best Practices', category: 'Technology', content: 'Essential cybersecurity practices to protect your data and privacy online.', date: '2024-06-20', author: 'Isabella Smith', imageUrl: 'https://via.placeholder.com/150' },
    { id: 18, title: 'Family-Friendly Destinations for Summer Vacations', category: 'Travel', content: 'Discover family-friendly destinations that offer fun activities for all ages.', date: '2024-06-19', author: 'Noah Johnson', imageUrl: 'https://via.placeholder.com/150' },
    { id: 19, title: 'Easy DIY Home Improvement Projects', category: 'Development', content: 'Simple and affordable DIY home improvement projects to enhance your living space.', date: '2024-06-18', author: 'Emma Davis', imageUrl: 'https://via.placeholder.com/150' },
    { id: 20, title: 'Best Coffee Shops Around the World', category: 'Food', content: 'Explore unique and cozy coffee shops that serve the best brews in town.', date: '2024-06-17', author: 'Liam Johnson', imageUrl: 'https://via.placeholder.com/150' },
  ];

  const handleShare = (articleId) => {
    // Logic for sharing article
    console.log(`Sharing article with ID ${articleId}`);
  };

  const handleUpvote = (articleId) => {
    // Logic for upvoting article
    console.log(`Upvoting article with ID ${articleId}`);
  };

  const handleComment = (articleId) => {
    // Logic for commenting on article
    console.log(`Commenting on article with ID ${articleId}`);
  };

  return (
    <div className="articles-container">
      {articles.map(article => (
        <div key={article.id} className="article-card">
          <div className="article-image">
            <img src={article.imageUrl} alt="Article" />
          </div>
          <div className="article-content">
            <h2>{article.title}</h2>
            <p><strong>Category:</strong> {article.category}</p>
            <p>{article.content}</p>
            <p><strong>Published Date:</strong> {article.date}</p>
            <p><strong>Author:</strong> {article.author}</p>
          </div>
          <div className="article-actions">
            <button className="upvote-button" onClick={() => handleUpvote(article.id)}>Upvote</button>
            <button className="comment-button" onClick={() => handleComment(article.id)}>Comment</button>
            <button className="share-button" onClick={() => handleShare(article.id)}>Share</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Articles;
