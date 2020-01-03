import React, { useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

const CreateUser = () => {

  const [username, setUsername] = useState('')


  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }


  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username
    }
    setUsername('')
    console.log(user)

    // Sends post request to the backend endpoint
    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));
    window.location = '/create'
  }
  return (
    <motion.div
    animate={{x: 10}}
    transition={{duration:2}}
    exit={{}}
    >
        <h3 className="title">Add Client</h3>
        <form onSubmit={onSubmit} >
          <div className="form-group mt-5">
          <label style={{fontSize:'1.2em'}} className="title">Username: </label>
          <input 
          className="form-control"
          type="text"
          required
          value={username}
          onChange={onChangeUsername}
          />
          </div>
          <div className="form-group">
            <input 
            type="submit"
            value="Create User"
            className="btn btn-primary"
            />
          </div>
        </form>
    </motion.div>
  )
}

export default CreateUser;