import logo from './logo.svg';
import './App.css';

import Nav from './Nav';
import CourseView from './MovieView';
import Add from './Add';
import { Route, Routes } from 'react-router-dom';
import Search from './Search';





function App() {
  return (
    <div className="App">
      <div className='container'>
      <Nav/>
     
      <Routes>
        <Route path='/' element={<CourseView />} ></Route>
        <Route path='/create' element={<Add />} ></Route>
        <Route path='/search' element={<Search />} ></Route>
      </Routes>
      
      
      
      </div>
    </div>
  );
}

export default App;
