import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CommanContext from './context/CommanContext.jsx'
import About from './About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <CommanContext >
      <App />
      <About/>
    </CommanContext>

   

  </StrictMode>,


)
