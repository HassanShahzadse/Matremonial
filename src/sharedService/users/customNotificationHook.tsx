// useNotifications.js
import { useState, useEffect } from 'react';
import { getLoggedInUserInfo } from '@/utils/userProfile/loggedInUserInfo';
import initializeFirebase from '../fireBase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const useNotifications = () => {
  const [newProfileViews, setNewProfileViews] = useState(0);
  const [newFriendRequests, setNewFriendRequests] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loggedInUser = getLoggedInUserInfo();
        const firebaseInstance = await initializeFirebase();
        if (!firebaseInstance) {
          console.log('Firebase is not supported.');
          return;
        }
        const { db } = firebaseInstance;
        const userCollection = collection(db, 'users');
        // Subscribe to real-time updates for the logged-in user's document
        const unsubscribe = onSnapshot(userCollection, (snapshot) => {
          const userData:any = snapshot.docs.map(doc => doc.data());
          const newProfileViewsCount = userData.viewed.filter((view: any) => !loggedInUser.viewed.includes(view)).length;
          const newFriendRequestsCount = userData.friendRequests.filter((request: any) => !loggedInUser.friendRequests.includes(request)).length;
  
          setNewProfileViews(newProfileViewsCount);
          setNewFriendRequests(newFriendRequestsCount);
        });

        return () => {
          // Unsubscribe from real-time updates when the component unmounts
          unsubscribe();
        };
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchData();
  }, []);

  return { newProfileViews, newFriendRequests };
};

export default useNotifications;
