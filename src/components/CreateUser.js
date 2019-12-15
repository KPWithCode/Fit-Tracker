import React, { useState } from 'react';

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
    console.log(user)
    setUsername('')
    // window.location = '/'
  }
  return (
    <div>
        <h3> Create New User </h3>
        <form className="form-group">
          <label>Username: </label>
          <input 
          className="form-control"
          type="text"
          required
          value={username}
          onChange={onChangeUsername}
          />
          <div className="form-group">
            <input 
            type="submit"
            value="Create User"
            className="btn btn-primary"
            />
          </div>
        </form>
    </div>
  )
}

export default CreateUser;