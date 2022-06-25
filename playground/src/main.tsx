import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@with-me/styles/build/global.css'
import '@with-me/styles/build/design.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
