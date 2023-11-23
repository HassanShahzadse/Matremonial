import { getDatabase, ref, child, get } from "firebase/database";
import initializeFirebase from "../fireBase/firebase";

const fetchData = async (userId: any) => {
  try {
    // Initialize Firebase
    const { db }: any = initializeFirebase();
    const dbRef = ref(db);

    // Fetch data
    const snapshot = await get(child(dbRef, `users/${userId}`));

    if (snapshot.exists()) {
      console.log(snapshot.val());
      console.log("---------");
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
