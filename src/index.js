import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App.js"
import {DarkModeContextProvider} from "./context/darkModeContext";
import { AuthContextProvider } from './context/authContext.js';
  
createRoot(document.getElementById("root")).render(


<React.StrictMode>
 
 
 <DarkModeContextProvider>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  </DarkModeContextProvider> 
  
 
 </React.StrictMode> 
);