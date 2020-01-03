
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// // Without this require datepicker didnt work correctly
// require('react-datepicker/dist/react-datepicker.css');

// const EditExercise = (props) => {
//   const [username, setUsername] = useState('')
//   const [description, setDescription] = useState('')
//   const [duration, setDuration] = useState(0)
//   const [date, setDate] = useState(new Date())
//   const [users, setUsers] = useState([])


//   useEffect(() => {
//     axios.get('http://localhost:5000/exercises/' + props.match.params.id)
//     .then(response => {
//       setUsername(response.data.username)
//       setDescription(response.data.description)
//       setDuration(response.data.duration)
//       setDate(response.data.date)
//     })
//     axios.get('http://localhost:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           setUsers(response.data.map(user => user.username));
//         }
//       })
//   })
//   const onChangeUsername = (e) => {
//     setUsername(e.target.value)
//   }
//   const onChangeDescription = (e) => {
//     setDescription(e.target.value)
//   }
//   const onChangeDuration = (e) => {
//     setDuration(e.target.value)
//   }
//   const onChangeDate = (date) => {
//     setDate(date)
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const exercise = {
//       username,
//       description,
//       duration,
//       date
//     }
//     console.log(exercise)
//     axios.put('http://localhost:5000/exercises/update' + props.match.params.id, exercise)
//       .then(res => console.log(res.data))
//     window.location = '/'
//   }

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <h3>Edit Exercise Log</h3>
//         <div className="form-group">
//           <label>Username: </label>
//           {/* ref="userInput" */}
//           <select

//             className="form-control"
//             value={username}
//             onChange={onChangeUsername}>
//             {users.map((user) => {
//               return <option key={user} value={user}>{user}</option>
//             })} </select>
//         </div>
//         <div className="form-group">
//           <label>Description: </label>
//           <input
//             type="text"
//             required
//             value={description}
//             onChange={onChangeDescription}
//           />
//         </div>
//         <div className="form-group">
//           <label>Duration (in minutes): </label>
//           <input
//             required
//             type="text"
//             className="form-control"
//             value={duration}
//             onChange={onChangeDuration}
//           />
//         </div>
//         <div className="form-group">
//           <label>Date: </label>
//           <div>
//             <DatePicker
//               selected={date}
//               onChange={onChangeDate}
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <input type="submit" value="Edit Exercise Log" className="btn btn-primary"
//           />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default EditExercise
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/clientlog';
  }

  render() {
    return (
    <div>
      <h3 className="title">Edit Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label className="title">Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label className="title">Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label className="title">Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label className="title">Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}