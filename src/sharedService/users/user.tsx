import { DocumentData, DocumentReference, addDoc, arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import initializeFirebase from "../fireBase/firebase";


export const userProfile = async (formData: any, id: any) => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { db } = firebaseInstance;
    const existingUserDoc = await getDoc(doc(db, 'users', id));
    if (existingUserDoc.exists()) {
      await setDoc(existingUserDoc.ref, formData, { merge: true });
      console.log('User profile updated for ID:', id);
    } else {
      const newDocRef = await addDoc(collection(db, 'users'), {
        ...formData,
        id: id,
      });
      console.log('User profile created with ID:', newDocRef.id);
    }
    return true;
    // const docRef = await addDoc(collection(db, 'users'), {
    //   ...formData
    // });
    // console.log('user id:', docRef.id);
    // return true;
  } catch (error: any) {
    console.error('User Profile creation failed error.code:', error.code);
    console.error('User Profile creation failed error.message:', error.message);
    return false;
  }
};
export const fetchDataFromFirebase = async () => {
  const firebaseInstance = await initializeFirebase();
  
  if (!firebaseInstance) {
    console.error('Firebase is not supported.');
    return false;
  }
  
  const { db } = firebaseInstance;
  const usersCollection = collection(db, "users");
  const usersQuery = query(usersCollection);
  const querySnapshot = await getDocs(usersQuery);

  const usersData = await Promise.all(querySnapshot.docs.map(async (doc) => {
    // Get the document name (id)
    const userId = doc.id;
    const userData = doc.data();
    return { ...userData, userId };
  }));

  return usersData;
};

export const fetchUserInfoFromFirebaseEmail = async (email:any) => {
  const firebaseInstance = await initializeFirebase();
  if (!firebaseInstance) {
    console.error('Firebase is not supported.');
    return false;
  }
  const { db } = firebaseInstance;
  const usersCollection = collection(db, 'users');
  const userQuery = query(usersCollection, where('email', '==', email));

  try {
    const userDocs = await getDocs(userQuery);
    if (userDocs.docs.length > 0) {
      const userDoc = userDocs.docs[0];
      const userData = {
        id: userDoc.id,
        ...userDoc.data()
      };
      console.log(userData)
      localStorage.setItem('user', JSON.stringify(userData));

      return userData;
    } else {
      console.error('User not found with email:', email);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user information from Firebase:', error);
    return false;
  }
};
export const fetchUserInfoFromFirebase = async (userId:any) => {
  const firebaseInstance = await initializeFirebase();
  
  if (!firebaseInstance) {
    console.error('Firebase is not supported.');
    return false;
  }

  const { db } = firebaseInstance;
  const userDocRef: DocumentReference<DocumentData> = doc(db, 'users', userId);

  try {
    const userDoc:any = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data()
      

      console.log(userData);
      return userData;
    } else {
      console.error('User not found with ID:', userId);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user information from Firebase:', error);
    return false;
  }
};
export const checkFriendRequest = async (loggedInUserId: any, user2: any) => {
  try {
    const loggedInUserData =  await fetchUserInfoFromFirebase(loggedInUserId);
  
    if (!loggedInUserData || !user2) {
      console.error('One or both users not found.');
      return false;
    }
    console.log(loggedInUserData,user2.userId)

    const LoggedInUserHasFriendRequestFromUser2 = loggedInUserData.friendRequests.includes(user2.userId);
    const LoggedInUserIsFriendWithUser2 = loggedInUserData.friends.includes(user2.userId);
    // Check if userId1 is in user2's friend requests
    const user2HasFriendRequestFromLoggedInUser = user2.friendRequests?.includes(loggedInUserId);
    return {
      LoggedInUserHasFriendRequestFromUser2,
      user2HasFriendRequestFromLoggedInUser,
      LoggedInUserIsFriendWithUser2
    };
  } catch (error) {
    console.error('Error checking friend request:', error);
    return false;
  }
};
export const fetchFriendRequests = async (userId: any) => {
  const firebaseInstance = await initializeFirebase();

  if (!firebaseInstance) {
    console.error('Firebase is not supported.');
    return false;
  }

  const { db } = firebaseInstance;
  const userDocRef: DocumentReference<DocumentData> = doc(db, 'users', userId);

  try {
    const userDoc: any = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Extract friend requests from the user data
      const friendRequests = userData.friendRequests || [];

      // Fetch users based on friend requests
      const usersWithFriendRequests = await Promise.all(
        friendRequests.map(async (friendId: string) => {
          const friendDocRef: DocumentReference<DocumentData> = doc(db, 'users', friendId);
          const friendDoc = await getDoc(friendDocRef);

          if (friendDoc.exists()) {
            // Include the friend ID in the friend's data
            const friendData = friendDoc.data();
            return { ...friendData, id: friendDoc.id };
          } else {
            console.error('Friend not found with ID:', friendId);
            return null;
          }
        })
      );

      console.log('User:', userData);
      console.log('Users with Friend Requests:', usersWithFriendRequests);

      return usersWithFriendRequests;
    } else {
      console.error('User not found with ID:', userId);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user information from Firebase:', error);
    return false;
  }
};

export const fetchFriends = async (userId: any) => {
  const firebaseInstance = await initializeFirebase();

  if (!firebaseInstance) {
    console.error('Firebase is not supported.');
    return false;
  }

  const { db } = firebaseInstance;
  const userDocRef: DocumentReference<DocumentData> = doc(db, 'users', userId);

  try {
    const userDoc: any = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Extract friends from the user data
      const friends = userData.friends || [];

      // Fetch users based on friends
      const usersFriends = await Promise.all(
        friends.map(async (friendId: string) => {
          const friendDocRef: DocumentReference<DocumentData> = doc(db, 'users', friendId);
          const friendDoc = await getDoc(friendDocRef);

          if (friendDoc.exists()) {
            // Include the friend ID in the friend's data
            const friendData = friendDoc.data();
            return { ...friendData, userId: friendDoc.id };
          } else {
            console.error('Friend not found with ID:', friendId);
            return null;
          }
        })
      );

      console.log('User:', userData);
      console.log('Users with Friends:', usersFriends);

      return usersFriends;
    } else {
      console.error('User not found with ID:', userId);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user information from Firebase:', error);
    return false;
  }
};

export const acceptFriendRequest = async (loggedInUserId: string, friendUserId: string) => {
  try {
    const firebaseInstance = await initializeFirebase();
    console.log(loggedInUserId,friendUserId)
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }

    const { db } = firebaseInstance;
    const loggedInUserDocRef = doc(db, 'users', loggedInUserId);

    // Remove friendUserId from friendRequests and add it to friends
    await updateDoc(loggedInUserDocRef, {
      friendRequests: arrayRemove(friendUserId),
      friends: arrayUnion(friendUserId),
    });

    console.log('Friend request accepted successfully.');
    return true;
  } catch (error) {
    console.error('Error accepting friend request:', error);
    return false;
  }
};
export const sendFriendRequest = async (loggedInUserId: string, friendUserId: string) => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }

    const { db } = firebaseInstance;
    const friendUserDocRef = doc(db, 'users', friendUserId);

    // Add loggedInUserId to the friendUserId's friendRequests array
    await updateDoc(friendUserDocRef, {
      friendRequests: arrayUnion(loggedInUserId),
    });

    console.log('Friend request sent successfully.');
    return true;
  } catch (error) {
    console.error('Error sending friend request:', error);
    return false;
  }
};

// Function to reject a friend request
export const rejectFriendRequest = async (loggedInUserId: string, friendUserId: string) => {
  try {
    const firebaseInstance = await initializeFirebase();
    console.log(loggedInUserId,friendUserId)
    
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }

    const { db } = firebaseInstance;
    const loggedInUserDocRef = doc(db, 'users', loggedInUserId);

    // Remove friendUserId from friendRequests
    await updateDoc(loggedInUserDocRef, {
      friendRequests: arrayRemove(friendUserId),
    });

    console.log('Friend request rejected successfully.');
    return true;
  } catch (error) {
    console.error('Error rejecting friend request:', error);
    return false;
  }
};
export const unfriend = async (loggedInUserId: string, friendUserId: string) => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }

    const { db } = firebaseInstance;
    const loggedInUserDocRef = doc(db, 'users', loggedInUserId);
    const friendUserDocRef = doc(db, 'users', friendUserId);

    // Remove friendUserId from loggedInUserId's friends array and vice versa
    await updateDoc(loggedInUserDocRef, {
      friends: arrayRemove(friendUserId),
    });

    await updateDoc(friendUserDocRef, {
      friends: arrayRemove(loggedInUserId),
    });

    console.log('Unfriended successfully.');
    return true;
  } catch (error) {
    console.error('Error unfriending:', error);
    return false;
  }
};

