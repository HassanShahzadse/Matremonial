// useNotifications.js
import { useState, useEffect } from 'react';
import { getLoggedInUserInfo } from '@/utils/userProfile/loggedInUserInfo';
import initializeFirebase from '../fireBase/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

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
        const userDocRef = doc(db, 'users', loggedInUser.id);
        const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
          const userData:any = docSnapshot.data();
          console.log(userData, loggedInUser);
          const viewedArray = loggedInUser.viewed || [];
          const newProfileViewsCount = userData?.viewed?.filter((view: any) => !viewedArray.includes(view));
          const newFriendRequestsCount = userData?.friendRequests

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
  console.log(newProfileViews, newFriendRequests)
  return { newProfileViews, newFriendRequests };
};

export default useNotifications;
