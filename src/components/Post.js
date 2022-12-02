import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../redux/postSlice';

const Post = () => {
    const {posts} = useSelector(state=>state.post);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPost())
  },[])
    return (
        <div>
            <div className='post-style'>
                {
                    posts.map(post => <div className='single-grid' key={post.id}>
                        <h3>{post.title}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Post;