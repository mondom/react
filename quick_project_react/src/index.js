import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { useState } from "react"

function App() {
	return <Counter />
}

function Counter() {
	const [step, setStep] = useState(1)
	const [count, setCount] = useState(0)

	function updateDate() {
		const baseDate = new Date()
		baseDate.setDate(baseDate.getDate() + count)

		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		]
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		]

		const dayOfWeek = days[baseDate.getDay()]
		const month = months[baseDate.getMonth()]
		const day = baseDate.getDate()
		const year = baseDate.getFullYear()

		return `${dayOfWeek} ${month} ${day} ${year}`
	}

	// function handleStepMinus() {
	// 	if (step > 1) setStep(s => s - 1)
	// }
	// function handleStepPlus() {
	// 	setStep(s => s + 1)
	// }
	function handleCountMinus() {
		setCount(c => c - step)
	}
	function handleCountPlus() {
		setCount(c => c + step)
	}

	function handleSetStep(e) {
		console.log(e.target.value)
		setStep(Number(e.target.value))
	}
	function handleSetCount(e) {
		setCount(e.target.value)
	}
	function handleReset() {
		setStep(1)
		setCount(0)
	}

	return (
		<div className='wrapper'>
			<div className='step'>
				<input
					type='range'
					min='1'
					max='10'
					value={step}
					onChange={e => {
						handleSetStep(e)
					}}
				/>
				{/* <button className='minus' onClick={handleStepMinus}>
					-
				</button>
				<p>Step: {step}</p>
				<button className='plus' onClick={handleStepPlus}>
					+
				</button> */}
			</div>
			<div className='count'>
				<button className='minus' onClick={handleCountMinus}>
					-
				</button>
				<input value={count} onChange={e => handleSetCount(e)}></input>
				<button className='plus' onClick={handleCountPlus}>
					+
				</button>
			</div>
			<div>
				<p>
					{count === 0
						? `Today is ${updateDate(count)}`
						: count < 0
						? `${Math.abs(count)} days ago was ${updateDate(count)}`
						: `${count} days from today is ${updateDate(count)}`}
				</p>
			</div>
			<button onClick={handleReset}>Reset</button>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
