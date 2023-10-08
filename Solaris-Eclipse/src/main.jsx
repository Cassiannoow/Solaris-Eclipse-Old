import React from 'react'
import ReactDOM from 'react-dom/client'
import Start from './Start.jsx'
import FirstPhase from './FirstPhase.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route exact path='/' Component={Start}/>
      <Route path='/FirstPhase' Component={FirstPhase}/>
    </Routes>
  </Router>
)
