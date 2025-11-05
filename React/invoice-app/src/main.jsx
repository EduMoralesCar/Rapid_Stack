import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './InvoiceApp.jsx' // Importa el componente App desde InvoiceApp.jsx

import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
