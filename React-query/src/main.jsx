import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {QueryClient , QueryClientProvider} from "@tanstack/react-query"
import './index.css'

const querClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={querClient}>  
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
