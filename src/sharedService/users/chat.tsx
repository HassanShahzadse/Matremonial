import { addDoc, collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import initializeFirebase from "../fireBase/firebase";


export const getAllChats = async () => {
    try {
      const firebaseInstance = await initializeFirebase();
      if (!firebaseInstance) {
        console.error('Firebase is not supported.');
        return false;
      }
      const { db } = firebaseInstance;
      
      // Reference to the "messages" collection
      const messagesCollection = collection(db, 'messages');
      
      // Get all documents from the "messages" collection
      const querySnapshot = await getDocs(messagesCollection);
  
      // Convert the query snapshot to an array of document data
      const messages = querySnapshot.docs.map(doc => doc.data());
        return messages;
    } catch (error) {
      console.error('Message getting failed:', error);
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

// export const fetchUserInfoFromFirebase = async (id:any) => {
//   const firebaseInstance = await initializeFirebase();
//   if (!firebaseInstance) {
//     console.error('Firebase is not supported.');
//     return false;
//   }
//   const { db } = firebaseInstance;
//   console.log("---------------------------------------")
//   const existingUserDoc = await getDoc(doc(db, 'users', "114068396615659103877"));
//   const existingUserDo = await getDoc(doc(db, 'users', "114068396615659103877"));
//   localStorage.setItem('user', JSON.stringify(existingUserDoc));
//   console.log("---------------------------------------")

//   return existingUserDoc;
// };