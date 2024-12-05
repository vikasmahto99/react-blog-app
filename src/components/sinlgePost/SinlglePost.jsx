import React from 'react'
import "./singlePost.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function SinlglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" 
             className='singlePostImg'
             />
             <h1 className='singlePostTitle'>Lorem ipsum dolor, sit amet 
              <div className="singlePostEdit">
              <FaRegEdit className='singlePostIcon' />
              <MdDeleteForever  className='singlePostIcon' />
                
              </div>
             </h1>
             <div className="singlePostInfo">
              <span className="singlePostAuthor">Author: <b>Vikas</b></span>
              <span className="singlePotDate"> 1 hour ago</span>
             </div>
             <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos facilis soluta a 
              repudiandae recusandae quibusdam, ullam consequatur sit at exercitationem ea reprehenderit
               impedit. Sint, esse molestiae. Tempore, doloribus fugit!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos facilis soluta a 
              repudiandae recusandae quibusdam, ullam consequatur sit at exercitationem ea reprehenderit
               impedit. Sint, esse molestiae. Tempore, doloribus fugit!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos facilis soluta a 
              repudiandae recusandae quibusdam, ullam consequatur sit at exercitationem ea reprehenderit
               impedit. Sint, esse molestiae. Tempore, doloribus fugit!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos facilis soluta a 
              repudiandae recusandae quibusdam, ullam consequatur sit at exercitationem ea reprehenderit
               impedit. Sint, esse molestiae. Tempore, doloribus fugit!

               </p>
        </div>
      
    </div>
  )
}


