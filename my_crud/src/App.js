import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchUsers}>Fetch Users</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}({user.age}) - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
