import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img
      className='postImg'
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
        Lorem Ipsum is simply dummy text 
        </span>
        <hr/>
        <span className="postDate">
            1 hour ago
        </span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Illum mollitia, soluta hic 
        autem assumenda ut consequatur et incidunt eius dolorem quasi, qui asperiores. 
        Possimus maxime non, hic sint tempore modi.</p>
    </div>
  )
}

export default Post