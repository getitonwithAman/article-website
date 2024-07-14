import React from 'react';
// import RelatedArticles from '../components/RelatedArticles';
import './ArticlePage.css';

const ArticlePage = ({ article, relatedArticles }) => {
  return (
    <div className="article-page">
      <div className="article-content">
        <h1>{article.title}</h1>
        <img src={article.imageUrl} alt={article.title} />
        <p>{article.content}</p>
        <p><strong>Author:</strong> {article.author}</p>
        <p><strong>Date:</strong> {article.date}</p>
      </div>
      {/* <aside className="sidebar">
        <RelatedArticles articles={relatedArticles} />
      </aside> */}
    </div>
  );
};

export default ArticlePage;
