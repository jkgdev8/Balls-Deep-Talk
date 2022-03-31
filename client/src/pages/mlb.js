import React from 'react';
import ThoughtList from '../components/ThoughtList';
import Auth from '../utils/auth';
import FriendList from '../components/FriendList';
import MLB from '../components/mlb';





import { useQuery } from '@apollo/client';
import { QUERY_MLB_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';



const MlbHome = () => {
  const { loading, data } = useQuery(QUERY_MLB_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.mlbThoughts || [];
  const loggedIn = Auth.loggedIn();


  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <a href='/'><button>Go back</button></a>
              
            <MLB />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="League: MLB" />
          )}
        </div>
        {loggedIn && userData ? (
        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={userData.me.username}
            friendCount={userData.me.friendCount}
            friends={userData.me.friends}
          />
        </div>
        ) : null}
      </div>
    </main>
  );
};  

export default MlbHome;
