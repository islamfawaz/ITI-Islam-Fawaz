import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axios from 'axios';

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [usersName, setUsersName] = useState("");

  const handleChange = (e) => {
    setUsersName(e.target.value);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/users?name_like=${usersName}`
        );
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [usersName]);

  const handleNavigate = (id) => {
    console.log(id);
    navigate(`/dashboard/users/${id}`);
  };

  return (
    <div>
      <h4>Users</h4>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={usersName}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            Button
          </button>
        </div>
      </div>
      <div>
        {users.map((user) => (
          <button key={user.id} onClick={() => handleNavigate(user.id)}>
            {user.name}
          </button>
        ))}
      </div>
      <Outlet context={{ users }} />
    </div>
  );
}