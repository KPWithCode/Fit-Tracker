import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import ExercisesList from "./components/ExerciseList";
import EditExercise from "./components/Editexercise"
import CreateExercise from "./components/Createexercise"
import CreateUser from "./components/CreateUser"
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="background" style={{ height: '100%', width: '100%' }}>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/clientlog" component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </div>
      </div>
    </Router>
  );
}

export default App;
