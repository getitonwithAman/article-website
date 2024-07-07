import React from 'react';
import './Categories.css';

const categories = [
  { name: 'Art', description: 'Exploring the beauty of visual arts.' },
  { name: 'Biology', description: 'Discovering the science of life.' },
  { name: 'Cooking', description: 'Delicious recipes and culinary tips.' },
  { name: 'Design', description: 'Innovative design ideas and trends.' },
  { name: 'Education', description: 'Insights into the world of learning.' },
  { name: 'Finance', description: 'Managing money and investments.' },
  { name: 'Gardening', description: 'Cultivating plants and landscapes.' },
  { name: 'Health', description: 'Tips for a healthy lifestyle.' },
  { name: 'Innovation', description: 'Latest technological advancements.' },
  { name: 'Journalism', description: 'Reporting news and stories.' },
  { name: 'Knowledge', description: 'Broadening your intellectual horizons.' },
  { name: 'Literature', description: 'Exploring great works of writing.' },
  { name: 'Music', description: 'The world of sound and harmony.' },
  { name: 'Nature', description: 'The beauty and mystery of the natural world.' },
  { name: 'Outdoors', description: 'Adventures and activities outside.' },
  { name: 'Philosophy', description: 'Thoughts on life and existence.' },
  { name: 'Quotations', description: 'Famous quotes and sayings.' },
  { name: 'Recipes', description: 'Cooking guides and delicious meals.' },
  { name: 'Science', description: 'Understanding the universe around us.' },
  { name: 'Technology', description: 'Innovations shaping the future.' },
  { name: 'Universe', description: 'Cosmos and celestial phenomena.' },
  { name: 'Vegetarian', description: 'Plant-based diet and recipes.' },
  { name: 'Wellness', description: 'Tips for mental and physical well-being.' },
  { name: 'Xylophone', description: 'Exploring the music of xylophones.' },
  { name: 'Yoga', description: 'Practices for body and mind balance.' },
  { name: 'Zoology', description: 'The study of animal life.' },
  { name: 'Astronomy', description: 'Stars, planets, and the cosmos.' },
  { name: 'Botany', description: 'The science of plants.' },
  { name: 'Cryptography', description: 'The art of secret writing.' },
  { name: 'Drama', description: 'The world of theater and acting.' },
  { name: 'Ecology', description: 'The study of ecosystems.' },
  { name: 'Fashion', description: 'Trends and styles in clothing.' },
  { name: 'Geography', description: 'Earth and its features.' },
  { name: 'History', description: 'Events of the past and their impact.' },
  { name: 'Immunology', description: 'The science of the immune system.' },
  { name: 'Journalism', description: 'Reporting news and stories.' },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <h2 className="category-name">{category.name}</h2>
          <p className="category-description">{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
