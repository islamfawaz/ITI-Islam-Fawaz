import React from 'react';
import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();
  const users = [
    { id: 1, name: "islam", email: "islam@example.com" },
    { id: 2, name: "mohamed ehab", email: "mohamed@example.com" },
    { id: 3, name: "bob", email: "bob@example.com" },
  ];

  const user = users.find((user) => user.id === parseInt(userId));

  return (
    <div className="container mt-5">
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default UserDetails;
