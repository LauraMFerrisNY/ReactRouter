import './App.css'
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to='/blue'>Blue</Link>
          <Link to='/red'>Red</Link>
          <Link to='/'>Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path='/blue' element={<Blue />}/> 
            <Route path='/red' element={<Red />}/>   
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
