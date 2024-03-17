import { useEffect, useState } from 'react';
import initializeFirebase from '../fireBase/firebase';
import { collection, onSnapshot, or, query, where } from 'firebase/firestore';

const useChats = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const localuser: any = localStorage.getItem("user");
  const user = JSON.parse(localuser);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const firebaseInstance = await initializeFirebase();
        if (!firebaseInstance) {
          console.log('Firebase is not supported.');
          return;
        }
        const { db } = firebaseInstance;
        const messagesCollection = collection(db, 'messages');
        const q = query(messagesCollection, or(
            where('receiver', '==', user.id),
            where('sender', '==', user.id)
          ));

        // Subscribe to real-time updates
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messages:any = snapshot.docs.map(doc => doc.data());
          setChats(messages);
          setLoading(false);
        });

        // Cleanup function
        return () => {
          unsubscribe(); // Unsubscribe from real-time updates
        };
      } catch (error) {
        console.log('Error fetching chats: ' + error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Cleanup logic if any
    };
  }, []);
  return { chats, loading, error };
};

export default useChats;
