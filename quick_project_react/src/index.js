import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { useState } from "react"

function App() {
	return <Counter />
}

function Counter() {
	const [step, setStep] = useState(1)
	const [count, setcount] = useState(0)
	return (
		<div className="wrapper">
			<div className='step'>
				<button className='minus'>-</button>
				<p>Step: {step}</p>
				<button className='plus'>+</button>
			</div>
			<div className='count'>
				<button className='minus'>-</button>
				<p>Count: {count}</p>
				<button className='plus'>+</button>
			</div>
			<div>
				<p>Przykładowy tekst</p>
			</div>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
