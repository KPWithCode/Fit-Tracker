import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import ExercisesList from "./components/Exercises"
import EditExercise from "./components/Editexercise"
import CreateExercise from "./components/Createexcercise"
import CreateUser from "./components/CreateUser"



function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
