import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import { AppProvider } from './context'
import App from './App'

ReactDOM.render(
   <AppProvider>
      <App />
   </AppProvider>,
   document.getElementById("root")
)
