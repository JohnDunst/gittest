import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/defunkt';

const Main = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const usersData = await response.json();
    setUsers(url);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>Github Users</h3>
      <ul className='users'>
        {Array.isArray(users) && users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h4>{user.login}</h4>
                <a href={user.html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
