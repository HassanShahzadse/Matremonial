import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase } from 'firebase/auth';
import initializeFirebase from '../fireBase/firebase';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase } from 'firebase/auth';
import {  signOut } from 'firebase/auth';
import { firebase_app } from "./../fireBase/firebase"
import router, { useRouter } from 'next/router';



export const loginUser = async (email: any, password: any) => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { db } = firebaseInstance;
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('email', '==', email), where('password', '==', password));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      // const userData = querySnapshot.docs[0].data();
      const userData = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
      console.log(userData,"-------------------------------------------")
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    } else {
      console.error('Invalid login credentials');
    }
  } catch (error: any) {
    console.error('Login failed:', error.message);
  }
};

// export const signInWithEmailAndPassword = async (email: any, password: any) => {
//   const auth = getAuth();

//   try {
//     const userCredential = await signInWithEmailAndPasswordFirebase(auth, email, password);
//     const user = userCredential.user;
//     return user;
//   } catch (error: any) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.error('Sign-in error code:', errorCode, errorMessage);
//     console.error('Sign-in error Message:', errorMessage);
//     // throw error;
//   }
// };


export const loginWithGoogle = async () => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { auth } = firebaseInstance;
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error('Google login failed', error);
    window.alert('Google login failed');
    throw error;
  }
};
export const loginWithFacebook = async () => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { auth } = firebaseInstance;
    const provider = new FacebookAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error('Facebook login failed', error);
    throw error;
  }
};
export const signupWithGoogle = async () => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { auth } = firebaseInstance;
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error('Google signup failed', error);
    throw error;
  }
};
export const signupWithFacebook = async () => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { auth } = firebaseInstance;
    const provider = new FacebookAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error('Facebook signup failed', error);
    throw error;
  }
};
// export const createUserWithEmailAndPassword = async (formData: any) => {
//   const { email, password,
//     name,
//     phone_number,
//     country,
//     birth_date,
//     gender } = formData;

//   try {
//     // Create user in Firebase Authentication
//     const userCredential = await createUserWithEmailAndPasswordFirebase(auth, email, password);
//     const user = userCredential.user;

//     await addDoc(collection(db, 'users'), {
//       uid: user.uid,
//       name, phone_number
//     });
//     console.log('User created successfully');
//     return user;
//   } catch (error: any) {
//     console.error('User creation failed error.code:', error.code);
//     console.error('User creation failed error.message:', error.message);

//     // throw error;
//   }
// };

export const createUser = async (formData: any) => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { db } = firebaseInstance;
    const docRef = await addDoc(collection(db, 'users'), {
     ...formData
    });
    console.log('user id:', docRef.id);
    return true;
  } catch (error: any) {
    console.error('User creation failed error.code:', error.code);
    console.error('User creation failed error.message:', error.message);
    return false;
  }
};

const auth = getAuth(firebase_app);
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    localStorage.clear()
    console.log('User logged out successfully');
  } catch (error) {
    console.error('Logout error:', error);
  }
};