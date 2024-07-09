

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GoogleOAuthProvider clientId="322500728180-fft2o79o8i8h86aabc257c41orn7k4pe.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)


