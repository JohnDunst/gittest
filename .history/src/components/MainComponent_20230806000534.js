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
      
            <div className="container">
               
                {
            return(

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
