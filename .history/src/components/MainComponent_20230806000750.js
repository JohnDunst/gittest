import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/defunkt';

const Main = () => {
    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users/defunkt");
        const FinalData =  response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
      
            <div className="users"></div>

                
            

            


    )  
}


export default Main;
