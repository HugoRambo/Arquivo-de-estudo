import { useEffect, useState } from "react";
import React from "react"
import GlobalStyle from './styles/global';
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import {initializeApp} from 'firebase/app'
import {collection, getDocs, getFirestore} from "firebase/firestore";

const firebaseApp = initializeApp( {
  apiKey: "AIzaSyAG4lx-wLkRiO3_D3Uu_rl269pdOQeU26A",
  authDomain: "projectfirebase-e2de0.firebaseapp.com",
  projectId: "projectfirebase-e2de0",
  storageBucket: "projectfirebase-e2de0.appspot.com",
  messagingSenderId: "749820137963",
  appId: "1:749820137963:web:c1e8dd58e829ebc0a149ae",
  measurementId: "G-R96DD2VTYY"
  });




function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [users, setUsers] = useState([])
  
  const db = getFirestore(firebaseApp)
  const userCollectionRef = collection(db, 'users')

  useEffect(() => {
    const getUsers = async () => {
        const data  = await getDocs(userCollectionRef)
        
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers()
  }, [])

  return(
    
    <>
    <AuthProvider>
    <GlobalStyle/>
    <RoutesApp/>
    </AuthProvider>
    
    </>
  )
}

export default App;
