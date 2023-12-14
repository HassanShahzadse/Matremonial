import { DocumentData, DocumentReference, addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
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
  const usersData = querySnapshot.docs.map((doc) => doc.data());

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
        name: userDoc.data()
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