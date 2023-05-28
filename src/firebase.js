import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "formtask-3e7f1.firebaseapp.com",
	projectId: "formtask-3e7f1",
	storageBucket: "formtask-3e7f1.appspot.com",
	messagingSenderId: "508100028874",
	appId: "1:508100028874:web:4554eeb120c4fc3ac78733",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);