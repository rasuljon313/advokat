import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/main.scss"
import App from './router/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
