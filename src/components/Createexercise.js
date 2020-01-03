import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from 'react-datepicker';
// Without this require datepicker didnt work correctly
require('react-datepicker/dist/react-datepicker.css');

const CreateExercise = () => {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())
  const [users, setUsers] = useState([])


  useEffect(() => {

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username));
          setUsername(response.data[0].username)

        }
      })
  }, [])
  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }
  const onChangeDuration = (e) => {
    setDuration(e.target.value)
  }
  const onChangeDate = (date) => {
    setDate(date)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date
    } 
    console.log(exercise)

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data))
    window.location = '/clientlog'
  }
  return (
    <motion.div
      // in={{opacity:0}}
      // animate={{opacity: isVisible ? 1 : 0}}
      // exit={{}}
      animate={{ x: 10 }}
      transition={{ duration: 2 }}
      exit={{}}
    >
      <form onSubmit={onSubmit}>
        <h3 className="title">Add Exercise</h3>
        <div className="form-group">
          <label className="title">Username: </label>
          {/* ref="userInput" */}
          <select
            className="form-control"
            value={username}
            onChange={onChangeUsername}>
            {users.map((user) => {
              return <option key={user} value={user}>{user}</option>
            })} </select>
        </div>
        <div className="form-group">
          <label className="title">Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label className="title">Duration (in minutes): </label>
          <input
            required
            type="text"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label className="title">Date: </label>
          <div>
            <DatePicker
              className="form-control"
              selected={date}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary"
          />
        </div>
      </form>
    </motion.div>

  )
}


export default CreateExercise;