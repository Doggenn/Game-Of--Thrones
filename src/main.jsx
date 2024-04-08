import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import './components/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
