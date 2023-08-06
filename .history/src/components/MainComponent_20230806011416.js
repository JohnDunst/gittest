
import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/JohnDunst';

const Main = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const usersData = await response.json();
    return usersData;
  };

  useEffect(() => {
    getUsers().then((data) => {
      setUsers([data]);
    });
  }, []);
  useEffect(() => {
    console.log("useEffect called");

    getUsers();
  }, []);

  return (
    <div>
      <h3>Github Users</h3>
      <ul className='users'>
        {Array.isArray(users) && users.map((users) => {
          const { id, login, avatar_url, html_url } = users;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
