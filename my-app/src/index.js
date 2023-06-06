import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import { DataProvider } from "./context/DataContext";
import { AuthProvider, AuthContext } from "./context/Authentication/AuthContext";

export {AuthContext}




// Call make Server
makeServer();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <AuthProvider>
        <DataProvider>
        <App />

        </DataProvider>
     
      </AuthProvider>
    
    
    
    
    </BrowserRouter>
  </React.StrictMode>,
 
);
