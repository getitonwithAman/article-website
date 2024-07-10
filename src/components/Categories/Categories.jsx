import React from "react";
import "./Categories.css";
import { Link } from 'react-router-dom';

const Categories = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((category, index) => (
        <Link to={`/${category.name}`} className="category-link" style={{textDecoration: 'none'}}>
            <div key={index} className="category-card">
                <h2 className="category-name">{category.name}</h2>
                <p className="category-description">{category.description}</p>
            </div>
        </Link>
      ))}
    </div>

  );
};
// const Categories = () => {
//   return (
//     <div className="categories-container">
//       {categories.map((category, index) => (
//         <Link to={`/${category.name}`} className="category-link" style={{textDecoration: 'none'}}>
//             <div key={index} className="category-card">
//                 <h2 className="category-name">{category.name}</h2>
//                 <p className="category-description">{category.description}</p>
//             </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

export default Categories;
