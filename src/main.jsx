import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'

//Lo que está diciendo es cogeme con React el id root de index.html y renderiza el componente App dentro
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
