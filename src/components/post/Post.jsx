import "./post.css";

export default function Post({ imgSrc, title, date, description, categories }) {
  return (
    <div className="post">
      <img src={imgSrc} alt={title} /> {/* Use the title as alt text */}
      <div className="postInfo">
        <div className="postCats">
          {categories.map((category, index) => (
            <span key={index} className="postCat">
              {category}
            </span>
          ))}
        </div>
        <span className="postTitle">{title}</span>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
}
