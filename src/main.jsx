import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './index.jsx'  // Import HomePage only

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />  {/* Render HomePage directly */}
  </StrictMode>
)
