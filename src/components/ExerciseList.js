// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// // import Exercise from './Exercise';
// // COMPONENT
// const Exercise = props => (
//   <tr>
//     <td>{props.exercise.username}</td>
//     <td>{props.exercise.desciption}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0, 10)}</td>
//     <td><Link to={'/edit/' + props.exercise._id}>Edit</Link> | <a href="/" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a>
//     </td>
//   </tr>
// )

// const Exercises = () => {
  
// // CHECK CHANGE WHEN HOME ([])
//   const [exercises, setExercises] = ({exercises: []});

//   useEffect(() => {
//     axios.get('http://localhost:5000/exercises/')
//       .then(response => {
//         // { exercises: response.data }
//         setExercises({ exercises: response.data })
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   })

//   const deleteExercise = (id) => {
//     axios.delete('http://localhost:5000/exercises/' + id)
//       // deletes from database
//       .then(res => console.log(res.data));
//     const filterEx = exercises.filter(el => el._id !== id)
//     // deletes from users view
//     setExercises(filterEx)
//   }
//   // const exerciseList = () => {
//   //   return exercises && exercises.map((currentexercise) => {
//   //     return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id}/>;
//   //  })
//   // }

//   return (
//     <div>
//       <h3>Your Client List</h3>
//       <table className="table">
//         <thead className="thead-light">
//           <tr>
//             <th>Client</th>
//             <th>Description</th>
//             <th>Duration</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {exercises && exercises.map((currentexercise) => {
//             return <div><Exercise key={currentexercise._id} exercise={currentexercise} deleteExercise={deleteExercise} /></div>
//           })}
//           {/* {exerciseList()} */}
//         </tbody>
//       </table>
//     </div>
//   )
// }


// export default Exercises;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}