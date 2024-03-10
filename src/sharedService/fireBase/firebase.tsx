import { initializeApp,getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBkpCaz5NwMego6CNtV_KbDpdhJSNJLHuk",
    authDomain: "muslimmatt-270d5.firebaseapp.com",
    projectId: "muslimmatt-270d5",
    storageBucket: "muslimmatt-270d5.appspot.com",
    messagingSenderId: "862979522815",
    appId: "1:862979522815:web:96a7c4f561af8338cd4cca",
    measurementId: "G-T0FG9EXQX1"
};

const initializeFirebase = async () => {
    if (await isSupported()) {
        const app = initializeApp(firebaseConfig);
        // const analytics = getAnalytics(app);
        const auth = getAuth(app);
        const db = getFirestore(app);
         const storage = getStorage(app);
        return { app, auth, db,storage };
    } else {
        console.warn('Firebase Analytics is not supported in this environment.');
      
    }
};
export let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export default initializeFirebase;
