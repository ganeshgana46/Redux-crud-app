import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length-1].id + 1, name, email}))
        navigate('/')
    }
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='enter name' 
            onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' className='form-control' placeholder='enter email'
            onChange={(e) => setEmail(e.target.value)} />
          </div>
          <br />
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
