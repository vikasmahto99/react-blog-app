import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/6612767/pexels-photo-6612767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Header Background"
      />
    </div>
  );
}
