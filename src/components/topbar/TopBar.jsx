import "./topbar.css";  
import { Link } from "react-router-dom";     
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';
import { IoSearchCircleOutline } from 'react-icons/io5';

export default function TopBar() {
  const currentUser = false; // Example: You can replace this with the actual current user state

  return (
    <div className="top">
      <div className="topLeft">
        <FaFacebookSquare className="topIcon" />
        <FaInstagramSquare className="topIcon" />
        <FaPinterestSquare className="topIcon" />
        <FaTwitterSquare className="topIcon" />
      </div>
      
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      
      <div className="topRight">
        {currentUser ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        
        <IoSearchCircleOutline className="topSearchIcon" />
      </div>
    </div>
  );
}
