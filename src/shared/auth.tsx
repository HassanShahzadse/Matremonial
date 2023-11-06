import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import initializeFirebase  from './firebase';

export const login = async (email: string, password: string) => {
  const { auth } = initializeFirebase();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("userCredential.user",userCredential.user)
    return userCredential.user;
  } catch (error) {

    console.error('Login failed', error);
    throw error;
  }
};
