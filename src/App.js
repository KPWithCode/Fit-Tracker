import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar"
import ExercisesList from "./components/ExerciseList";
import EditExercise from "./components/Editexercise"
import CreateExercise from "./components/Createexercise"
import CreateUser from "./components/CreateUser"
import Home from './components/Home';
// import About from './components/About';

function App() {

  return (
    <Router>
      <div className="background">
        <div style={{ marginLeft: '5%', marginRight: '5%' }}>
          <Navbar />
          <br />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/clientlog" component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
            {/* <Route path="/about" component={About} /> */}
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
