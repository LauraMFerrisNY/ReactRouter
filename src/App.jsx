import './App.css'
import Home from './components/Home';
import Red from './components/Red';
import Orange from './components/Orange';
import Yellow from './components/Yellow';
import Green from './components/Green';
import Blue from './components/Blue';
import Purple from './components/Purple';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to='/'>Home</Link>
          <Link to='/red'>Red</Link>
          <Link to='/orange'>Orange</Link>
          <Link to='/yellow'>Yellow</Link>
          <Link to='/green'>Green</Link>
          <Link to='/blue'>Blue</Link>
          <Link to='/purple'>Purple</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/red' element={<Red />}/>  
            <Route path='/orange' element={<Orange />}/> 
            <Route path='/yellow' element={<Yellow />}/> 
            <Route path='/green' element={<Green />}/> 
            <Route path='/blue' element={<Blue />}/>  
            <Route path='/purple' element={<Purple />}/> 
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
