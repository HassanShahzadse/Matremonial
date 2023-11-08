import { Auth, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import initializeFirebase  from './firebase';


const { auth } = initializeFirebase();

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("userCredential.user",userCredential.user)
    return userCredential.user;
  } catch (error) {

    console.error('Login failed', error);
    throw error;
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
