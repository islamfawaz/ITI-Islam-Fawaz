import React, { useState } from 'react';
import useUserApi from './useUserApi';
import { toast } from 'react-toastify';

const Register = () => {
  const { registerUser } = useUserApi();
  const [name, setName] = useState('');
  const [jobtitle, setJobtitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !jobtitle) {
      toast.error('Please fill out all fields');
      return;
    }

    await registerUser({ name, jobtitle });
    setName('');
    setJobtitle('');
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Job Title:</label>
          <input value={jobtitle} onChange={(e) => setJobtitle(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
xport default Register;
