import "./posts.css";
import Post from "../post/Post";

export default function Posts() {
  const postData = [
    {
      id: 1,
      imgSrc: "https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Lorem ipsum dolor sit amet",
      date: "1 hour ago",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias porro architecto similique? Fugit ipsa eius natus laborum voluptatum iusto dolor qui ex repudiandae?",
      categories: ["Music", "Life"]
    },
    {
      id: 2,
      imgSrc: "https://images.pexels.com/photos/27559206/pexels-photo-27559206/free-photo-of-a-group-of-people-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Exploring New Horizons",
      date: "2 hours ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      categories: ["Adventure", "Travel"]
    },
    {
      id: 3,
      imgSrc: "https://images.pexels.com/photos/6615033/pexels-photo-6615033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Tech Trends in 2024",
      date: "3 hours ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      categories: ["Tech", "Innovation"]
    },
    {
      id: 4,
      imgSrc: "https://images.pexels.com/photos/5416618/pexels-photo-5416618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Summer Vibes and Sunsets",
      date: "4 hours ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      categories: ["Nature", "Summer"]
    },
    {
      id: 5,
      imgSrc: "https://images.pexels.com/photos/16545893/pexels-photo-16545893/free-photo-of-round-glass-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Healthy Living Tips",
      date: "5 hours ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      categories: ["Health", "Wellness"]
    },
    {
      id: 6,
      imgSrc: "https://images.pexels.com/photos/14153277/pexels-photo-14153277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Exploring the City Life",
      date: "6 hours ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      categories: ["City", "Lifestyle"]
    },
  ];

  return (
    <div className="posts">
      {postData.map((post) => (
        <Post
          key={post.id}
          id={post.id} // Using unique `id` instead of `index`
          imgSrc={post.imgSrc}
          title={post.title}
          date={post.date}
          description={post.description}
          categories={post.categories}
        />
      ))}
    </div>
  );
}
