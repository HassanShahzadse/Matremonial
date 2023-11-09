import { FacebookAuthProvider, GoogleAuthProvider, UserCredential, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import initializeFirebase from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


const { auth }: any = initializeFirebase();
const { db }: any = initializeFirebase();

export const login = async (email: string, password: string) => {

  try {
    const userCredential = await signInWithEmailAndPassword(db, email, password);

    const usersCollection = collection(db, 'users');
    const userQuery = query(usersCollection, where('email', '==', email));
    const querySnapshot = await getDocs(userQuery);
    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      if (userData.password === password) {
        console.log('Login successful');
        return userCredential.user; 
      } else {
        console.error('Invalid email or password');
        throw new Error('Invalid email or password');
      }
    } else {
      console.error('User not found');
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Login failed', error);
    throw error;
  }
};
// export const login = async (email: string, password: string) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     console.log("userCredential.user",userCredential.user)
//     return userCredential.user;
//   } catch (error) {

//     console.error('Login failed', error);
//     throw error;
//   }
// };
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
