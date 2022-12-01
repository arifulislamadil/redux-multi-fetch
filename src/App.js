
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from './redux/postSlice';
import Home from './components/Home';

function App() {
  const {posts} = useSelector(state=>state.post);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPost())
  },[])
  return (
    <div className="App">
      
      <div className='post-style'>
      {
        posts.map(post=><div className='single-grid' key={post.id}>
          <h3>{post.title}</h3>
        </div>)
      }
      </div>

      <Home/>
    </div>
  );
}

export default App;
