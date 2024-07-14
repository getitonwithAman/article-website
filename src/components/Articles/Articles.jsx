import React from 'react';
import './Articles.css'; // Import CSS for styling
import { articles } from '../../Articledata';
import { Link } from 'react-router-dom';
const Articles = () => {
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

        <Link to={`/${article.title}`} className="" style={{textDecoration: 'none'}}>
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
        </Link>

      ))}
    </div>
  );
}

export default Articles;
