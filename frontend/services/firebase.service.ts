import { FirebaseApp, getApps, initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
};


export const FIREBASE_APP : FirebaseApp = (getApps().length>0) ? getApps()[0] : initializeApp(firebaseConfig); 