import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider } from './components/ThemeContext.jsx'
import HeadComponent from './components/HeadComponent.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <HeadComponent />
        <App />
    </ThemeProvider>
)
