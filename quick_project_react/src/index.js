import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { useState } from "react"

function App() {
	const [step, setStep] = useState(1)
	const [count, setcount] = useState(0)
	return (
		< Counter/>
	)
}

function Counter() {
	return (
		<div>TEST
		</div>
	
	)
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
