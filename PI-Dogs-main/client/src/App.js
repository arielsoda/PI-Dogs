import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Landing from './component/Landing/Landing.jsx';
import Home from './component/Home/Home.jsx';
import Create from "./component/Create/Create.jsx";
import DogCardDetail from "./component/DogCardDetail/DogCardDetail.jsx";

function App() {
  return (
    <Router>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/home/create' element={<Create/>} />
          <Route path='/home/:id' element={<DogCardDetail/>} />       
        </Routes>
    </Router>
  );
}

export default App;
