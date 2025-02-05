import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router"
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './pages/HomePage'
import PersonalPage from './pages/PersonalPage'
import QuizPage from './pages/QuizPage'
import RoadMap from './pages/RoadMap'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Account' element={<PersonalPage/>}/>
        <Route path='/sui' element={<QuizPage/>}/>
        <Route path='/Roadmap' element={<RoadMap/>}/>
      </Routes>
    </Router>
  );
};

export default App
