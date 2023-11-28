import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
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