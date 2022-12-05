
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAG4lx-wLkRiO3_D3Uu_rl269pdOQeU26A",
  authDomain: "projectfirebase-e2de0.firebaseapp.com",
  projectId: "projectfirebase-e2de0",
  storageBucket: "projectfirebase-e2de0.appspot.com",
  messagingSenderId: "749820137963",
  appId: "1:749820137963:web:c1e8dd58e829ebc0a149ae",
  measurementId: "G-R96DD2VTYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)