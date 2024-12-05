import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo accusamus reprehenderit possimus mollitia nam iste officia fuga voluptas, natus aperiam tempore alias exercitationem autem maiores adipisci dolorem quasi beatae nesciunt. 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow US</span>
        <div className="sidebarSocial">
          <FaFacebookSquare className="sidebarIcon" />
          <FaInstagramSquare className="sidebarIcon" />
          <FaPinterestSquare className="sidebarIcon" />
          <FaTwitterSquare className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
}
