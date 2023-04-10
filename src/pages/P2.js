import React, { useState, useEffect } from 'react';

function View() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      setUsers(data.users);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-2">Users</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.firstName}</td>
              <td className="border px-4 py-2">{user.lastName}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phone}</td>
              <td className="border px-4 py-2">{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default View;
