import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProviderWrapper, useThemeContext } from './Theme';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
     <ThemeProviderWrapper>
        <App />
    </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
