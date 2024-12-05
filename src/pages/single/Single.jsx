import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/sinlgePost/SinlglePost'
import "./single.css";

export default function Single() {
  return (
    <div className='single'>
       {/* post */}
       <SinglePost/>
       <Sidebar />
      
    </div>
  )
}
