import React from 'react';
import { Link } from 'react-router-dom';

const RelatedArticles = ({ articles }) => {
  return (
    <div className="related-articles">
      <h3>Related Articles</h3>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedArticles;
