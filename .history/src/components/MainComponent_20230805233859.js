import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/JohnDunst';

const Main = () => {
  const [{JohnDunst}, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const {JohnDunst} = await response.json();
    setUsers({JohnDunst});
  };

  useEffect(() => {
    getUsers({JohnDunst});
  }, []);

  return (
    <div>
      <h3>Github Users</h3>
      <ul className='users'>
        {{JohnDunst}.map(({JohnDunst}) => {
          const { id, login, avatar_url, html_url } = {JohnDunst};
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