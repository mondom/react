import { useState } from "react"

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
]

export default function App() {
	const [step, setState] = useState(1)
	const [isOpen, setIsOpen] = useState(true)

	// const [test, setTest]= useState({name: 'Monika'})
	const style = { backgroundColor: "#7950f2", color: "#fff" }

	function handlePrevious() {
		if (step > 1) setState(s => s - 1)
	}
	function handleNext() {
		if (step < 3) {
			setState(s => s + 1)
			setState(s => s + 1)
		}
		// setTest({name: 'Kinga'})
	}

	return (
		<div>
			<button className='close' onClick={() => setIsOpen(is => !is)}>
				&times;
			</button>
			{isOpen && (
				<div className='steps'>
					<div className='numbers'>
						<div className={step >= 1 ? "active" : ""}>1</div>
						<div className={step >= 2 ? "active" : ""}>2</div>
						<div className={step >= 3 ? "active" : ""}>3</div>
					</div>

					<p className='message'>
						Step {step} : {messages[step - 1]}
					</p>
					{/* {test.name} */}

					<div className='buttons'>
						<button style={style} onClick={handlePrevious}>
							Previous
						</button>
						<button style={style} onClick={handleNext}>
							Next
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

