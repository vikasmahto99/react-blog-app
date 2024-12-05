import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

export default function Post({ id, imgSrc, title, date, description, categories }) {
  return (
    <div className="post">
      <img src={imgSrc} alt={title} className="postImg" />
      <div className="postInfo">
        <div className="postCategories">
          {categories.map((category, index) => (
            <span key={index} className="postCategory">{category}</span>
          ))}
        </div>
        <Link to={`/post/${id}`} className="postTitleLink">
          <h2 className="postTitle">{title}</h2>
        </Link>
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
}
