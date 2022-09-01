import React from 'react'
import './singlePost.css'

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
        <img
        className='singlePostImg'
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="" />
        </div>
        <h1 className="singlePostTitle">
            Lorem ipsum, dolor sit amet consectetur 
            <div className="singlePostEdit">
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author : <b>Safak</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae fugit eos voluptatem pariatur, illo soluta maxime? Esse laudantium natus, ad modi facilis tempore, nemo 
            sint ipsum laboriosam asperiores ea maxime.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae fugit eos voluptatem pariatur, illo soluta maxime? Esse laudantium natus, ad modi facilis tempore, nemo 
            sint ipsum laboriosam asperiores ea maxime.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae fugit eos voluptatem pariatur, illo soluta maxime? Esse laudantium natus, ad modi facilis tempore, nemo 
            sint ipsum laboriosam asperiores ea maxime.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae fugit eos voluptatem pariatur, illo soluta maxime? Esse laudantium natus, ad modi facilis tempore, nemo 
            sint ipsum laboriosam asperiores ea maxime.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae fugit eos voluptatem pariatur, illo soluta maxime? Esse laudantium natus, ad modi facilis tempore, nemo 
            sint ipsum laboriosam asperiores ea maxime.
        </p>
    </div>
  )
}

export default SinglePost