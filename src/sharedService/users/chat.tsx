import { addDoc, collection, Timestamp, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
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
export const getChatsByUserIds = async (userId1: string, userId2: string) => {
  try {
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { db } = firebaseInstance;

    // Reference to the "messages" collection
    const messagesCollection = collection(db, 'messages');

    // Query for documents where either userId1 or userId2 is the sender or receiver
    const querySnapshot = await getDocs(
      query(
        messagesCollection,
        where('sender', 'in', [userId1, userId2]),
        where('receiver', 'in', [userId1, userId2])
      )
    );

    // Convert the query snapshot to an array of document data
    const messages = querySnapshot.docs.map(doc => doc.data());

    return messages;
  } catch (error) {
    console.error('Error getting messages by user IDs:', error);
    return false;
  }
};

export const createMessage = async (receiver: any, sender: any, text: any) => {
  try {
    const timestamp = Timestamp.fromDate(new Date());
    const firebaseInstance = await initializeFirebase();
    if (!firebaseInstance) {
      console.error('Firebase is not supported.');
      return false;
    }
    const { db } = firebaseInstance;
    const messagesCollection = collection(db, "messages");

    await addDoc(messagesCollection, {
      receiver,
      sender,
      text,
      timestamp,
    });

    console.log("Message created successfully!");
  } catch (error) {
    console.error("Error creating message:", error);
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