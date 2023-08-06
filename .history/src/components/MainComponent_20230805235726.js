import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/defunkt';

const Main = () => {
    const [defunkt, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users/defunkt");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
      
            <div className="container">
               
                
         <h1>dsd</h1>
                        return (

                            <div className="card_item" key={id}>
                                <div className="card_inner">
                                    <img src={curElem.avatar_url} alt="" />
                                    <div className="userName">{curElem.login}</div>
                                    <div className="userUrl">{curElem.url}</div>
                                    <div className="detail-box">

                                        <div className="gitDetail"><span>Articles</span>23</div>
                                        <div className="gitDetail"><span>Following</span>45</div>
                                        <div className="gitDetail"><span>Followers</span>11</div>
                                    </div>
                                    <button className="seeMore">See More</button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>              


    )
}


export default Main;
