import React from 'react';
import './singlePost.css';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src='https://images.pexels.com/photos/3838285/pexels-photo-3838285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          className='singlePostImg'
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor, sit amet
          <div className='singlePostEdit'>
            <FaRegEdit className='singlePostIcon' />
            <MdDeleteForever className='singlePostIcon' />
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Vikas</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos facilis soluta a repudiandae recusandae quibusdam,
          ullam consequatur sit at exercitationem ea reprehenderit impedit. Sint, esse molestiae. Tempore, doloribus fugit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos facilis soluta a repudiandae recusandae quibusdam,
          ullam consequatur sit at exercitationem ea reprehenderit impedit. Sint, esse molestiae. Tempore, doloribus fugit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos facilis soluta a repudiandae recusandae quibusdam,
          ullam consequatur sit at exercitationem ea reprehenderit impedit. Sint, esse molestiae. Tempore, doloribus fugit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos facilis soluta a repudiandae recusandae quibusdam,
          ullam consequatur sit at exercitationem ea reprehenderit impedit. Sint, esse molestiae. Tempore, doloribus fugit!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusantium dicta fuga officiis ea similique dolorum 
          dolorem doloremque placeat dignissimos laboriosam quas libero rerum pariatur? Minima fugit et odio fugiat.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At fuga maiores mollitia, ut quo fugiat, autem, obcaecati illum
           et dolore similique. Culpa cupiditate sapiente iure officia obcaecati facilis sequi nisi.
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, eius non animi cumque recusandae odit, aliquam magnam 
           asperiores dolore voluptas qui nemo error aliquid eaque quasi voluptatem sit ab. Repellendus!
        </p>
      </div>
    </div>
  );
}
