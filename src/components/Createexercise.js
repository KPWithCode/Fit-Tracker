import React, { useState, useEffect } from 'react';
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
    setUsers(['test user']);
    setUsername('test username');
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
    // window.location = '/'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Add Exercise</h3>
        <div className="form-group">
          <label>Username: </label>
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
          <label>Description: </label>
          <input
            type="text"
            required
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration: </label>
          <input
            required
            type="text"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
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
    </div>
  )
}


export default CreateExercise;