import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';

import FriendForm from './FriendForm'

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get('/friends')
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      <FriendForm setFriends={setFriends} />
      <div className='friends-container'>
        {friends.map((friend) => {
          return (
            <div key={friend.id} className='friend-card'>
              <h3>{`${friend.name}, ${friend.age}`}</h3>
              <p>{`Email: ${friend.email}`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FriendList;