import {useState, useEffect } from 'react';
import { auth } from '../firebase.config'; 
import { onAuthStateChanged } from 'firebase/auth';

export const UserAuth = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){

            setUser(currentUser);
        }else{
            setUser(null);
        }
    });
    
  });


  return {user};
};

export default UserAuth;
