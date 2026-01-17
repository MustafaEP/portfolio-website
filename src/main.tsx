import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Hide initial visible content and SEO content when React loads
const root = document.getElementById('root')
if (root) {
  // Clear initial visible content (first child div with inline styles)
  const initialContent = root.querySelector('div[style*="min-height: 100vh"]')
  if (initialContent) {
    initialContent.remove()
  }
  
  // Hide SEO content
  const seoContent = document.getElementById('seo-content')
  if (seoContent) {
    seoContent.style.display = 'none'
  }
}

createRoot(root!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
