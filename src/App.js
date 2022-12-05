
import React from "react"
import GlobalStyle from './styles/global';
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import {firebase, auth } from './service/firebase'






function App() {
  
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
