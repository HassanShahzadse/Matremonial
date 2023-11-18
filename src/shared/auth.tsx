import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase } from 'firebase/auth';
import initializeFirebase from './firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase } from 'firebase/auth';

const { auth }: any = initializeFirebase();
const { db }: any = initializeFirebase();


export const signInWithEmailAndPassword = async (email:any, password:any) => {
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPasswordFirebase(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error:any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Sign-in error code:', errorCode, errorMessage);
    console.error('Sign-in error Message:', errorMessage);
    // throw error;
  }
};


export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error('Google login failed', error);
    throw error;
  }
};
export const loginWithFacebook = async () => {
  try {
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
    const provider = new FacebookAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error('Facebook signup failed', error);
    throw error;
  }
};
export const createUserWithEmailAndPassword = async (formData:any) => {
  const { email, password,  
    name,
    phone_number,
    country,
    birth_date,
    gender} = formData;

  try {
    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPasswordFirebase(auth, email, password);
    const user = userCredential.user;

    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,phone_number
    });
    console.log('User created successfully');
    return user;
  } catch (error:any) {
    console.error('User creation failed error.code:', error.code);
    console.error('User creation failed error.message:', error.message);

    // throw error;
  }
};

