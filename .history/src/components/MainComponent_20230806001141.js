import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/defunkt';

const Main = () => {
    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users/defunkt");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
      
            <div className="users">
               
                {
                    users.map(users) 
                    return(
               

                            <div className="card_item" key={users.id}>
                                <div className="card_inner">
                                    <img src={users.avatar_url} alt="" />
                                    <div className="userName">{users.login}</div>
                                    <div className="userUrl">{users.url}</div>
                                    <div className="detail-box">

                                        <div className="gitDetail"><span>Articles</span>23</div>
                                        <div className="gitDetail"><span>Following</span>45</div>
                                        <div className="gitDetail"><span>Followers</span>11</div>
                                    </div>
                                    <button className="seeMore">See More</button>
                                </div>

                            </div>
                    ))))))
                    })
                }

            </div>              


    )
}


export default Main;
