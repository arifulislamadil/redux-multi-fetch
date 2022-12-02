
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from './redux/postSlice';
import Home from './components/Home';
import NavBar from './share/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/User';
import Count from './components/Count';

function App() {
  
  return (

    
    <div >
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/count' element={<Count/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
