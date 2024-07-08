import React from 'react';
import './Categories.css';

const categories = [
  { name: 'Art', description: 'Exploring the beauty of visual arts.', image: 'path/to/art.jpg' },
  { name: 'Biology', description: 'Discovering the science of life.', image: 'path/to/biology.jpg' },
  { name: 'Cooking', description: 'Delicious recipes and culinary tips.', image: 'path/to/cooking.jpg' },
  { name: 'Design', description: 'Innovative design ideas and trends.', image: 'path/to/design.jpg' },
  { name: 'Education', description: 'Insights into the world of learning.', image: 'path/to/education.jpg' },
  { name: 'Finance', description: 'Managing money and investments.', image: 'path/to/finance.jpg' },
  { name: 'Gardening', description: 'Cultivating plants and landscapes.', image: 'path/to/gardening.jpg' },
  { name: 'Health', description: 'Tips for a healthy lifestyle.', image: 'path/to/health.jpg' },
  { name: 'Innovation', description: 'Latest technological advancements.', image: 'path/to/innovation.jpg' },
  { name: 'Journalism', description: 'Reporting news and stories.', image: 'path/to/journalism.jpg' },
  { name: 'Knowledge', description: 'Broadening your intellectual horizons.', image: 'path/to/knowledge.jpg' },
  { name: 'Literature', description: 'Exploring great works of writing.', image: 'path/to/literature.jpg' },
  { name: 'Music', description: 'The world of sound and harmony.', image: 'path/to/music.jpg' },
  { name: 'Nature', description: 'The beauty and mystery of the natural world.', image: 'path/to/nature.jpg' },
  { name: 'Outdoors', description: 'Adventures and activities outside.', image: 'path/to/outdoors.jpg' },
  { name: 'Philosophy', description: 'Thoughts on life and existence.', image: 'path/to/philosophy.jpg' },
  { name: 'Quotations', description: 'Famous quotes and sayings.', image: 'path/to/quotations.jpg' },
  { name: 'Recipes', description: 'Cooking guides and delicious meals.', image: 'path/to/recipes.jpg' },
  { name: 'Science', description: 'Understanding the universe around us.', image: 'path/to/science.jpg' },
  { name: 'Technology', description: 'Innovations shaping the future.', image: 'path/to/technology.jpg' },
  { name: 'Universe', description: 'Cosmos and celestial phenomena.', image: 'path/to/universe.jpg' },
  { name: 'Vegetarian', description: 'Plant-based diet and recipes.', image: 'path/to/vegetarian.jpg' },
  { name: 'Wellness', description: 'Tips for mental and physical well-being.', image: 'path/to/wellness.jpg' },
  { name: 'Xylophone', description: 'Exploring the music of xylophones.', image: 'path/to/xylophone.jpg' },
  { name: 'Yoga', description: 'Practices for body and mind balance.', image: 'path/to/yoga.jpg' },
  { name: 'Zoology', description: 'The study of animal life.', image: 'path/to/zoology.jpg' },
  { name: 'Astronomy', description: 'Stars, planets, and the cosmos.', image: 'path/to/astronomy.jpg' },
  { name: 'Botany', description: 'The science of plants.', image: 'path/to/botany.jpg' },
  { name: 'Cryptography', description: 'The art of secret writing.', image: 'path/to/cryptography.jpg' },
  { name: 'Drama', description: 'The world of theater and acting.', image: 'path/to/drama.jpg' },
  { name: 'Ecology', description: 'The study of ecosystems.', image: 'path/to/ecology.jpg' },
  { name: 'Fashion', description: 'Trends and styles in clothing.', image: 'path/to/fashion.jpg' },
  { name: 'Geography', description: 'Earth and its features.', image: 'path/to/geography.jpg' },
  { name: 'History', description: 'Events of the past and their impact.', image: 'path/to/history.jpg' },
  { name: 'Immunology', description: 'The science of the immune system.', image: 'path/to/immunology.jpg' },
  { name: 'Journalism', description: 'Reporting news and stories.', image: 'path/to/journalism.jpg' },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.image} alt={category.name} className="category-image" />
          <h2 className="category-name">{category.name}</h2>
          <p className="category-description">{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
