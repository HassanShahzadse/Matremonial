import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase } from 'firebase/auth';
import initializeFirebase from '../fireBase/firebase';
import { addDoc, collection, getDocs, getFirestore, query, where,updateDoc, doc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase } from 'firebase/auth';
import {  signOut } from 'firebase/auth';
import { firebase_app } from "./../fireBase/firebase"
import router, { useRouter } from 'next/router';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';


export const updateUser = async (userId: any, updatedData: any) => {
  try {
    console.log(userId,updatedData)
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }

    const { db } = firebaseInstance;
    if (!db) {
      console.error('Firestore database instance is not available.');
      return false;
    }

    const userRef = doc(db, 'users', userId);
    if (!userRef) {
      console.error('User reference is undefined.');
      return false;
    }

    await updateDoc(userRef, updatedData);
    console.log('User updated successfully');
    return true;
  } catch (error) {
    console.error('Error updating user:', error);
    return false;
  }
};

export const uploadImageToFirestore = async (file:any, setData:any) => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { storage } = firebaseInstance;
    const storageRef = ref(storage, `profile_images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload paused');
            break;
          case 'running':
            console.log('Upload running');
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadedURL) => {
          console.log("Download URL:", downloadedURL);
          setData(downloadedURL); // Assuming setData now directly takes the URL string
        });
      }
    );
  } catch (error) {
    console.error('Error uploading image to Firestore:', error);
  }
};

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

export const createUser = async (formData: any) => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { db } = firebaseInstance;
    const userQuery = query(collection(db, 'users'), 
                            where('email', '==', formData.email));
    const userQuerySnapshot = await getDocs(userQuery);
    if (!userQuerySnapshot.empty) {
      window.alert('User with same email already exists.');
      return false;
    }
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