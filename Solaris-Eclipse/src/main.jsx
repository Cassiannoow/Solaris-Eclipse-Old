import React from 'react'
import ReactDOM from 'react-dom/client'
import Start from './Start.jsx'
import FirstPhase from './FirstPhase.jsx'
import Eclipse from './Eclipse.jsx'
import LunarEclipse from './LunarEclipse.jsx'
import Map from './Map.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route exact path='/' Component={Start}/>
      <Route path='/FirstPhase' Component={FirstPhase}/>
      <Route path='/Solar-Eclipse' Component={Eclipse}/>
      <Route path='/Lunar-Eclipse' Component={LunarEclipse}/>
      <Route path='/Map' Component={Map}/>
    </Routes>
  </Router>
)
