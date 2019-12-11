import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/navbar"
import ExercisesList from "./components/exerciseslist";
import EditExercise from "./components/editexercise";
import CreateExercise from "./components/createexercise";
import CreateUser from "./components/createuser"

import "bootstrap/dist/css/boostrap.min.css"
function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
