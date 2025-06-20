import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BusinessCanvasGenerator from './BusinessCanvasGenerator.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BusinessCanvasGenerator />
  </StrictMode>,
)
