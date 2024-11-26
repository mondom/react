import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const skills = [
	{
		skill: "HTML+CSS",
		level: "advanced",
		color: "#2662EA",
	},
	{
		skill: "JavaScript",
		level: "advanced",
		color: "#EFD81D",
	},
	{
		skill: "Web Design",
		level: "advanced",
		color: "#C3DCAF",
	},
	{
		skill: "Git and GitHub",
		level: "beginner",
		color: "#E84F33",
	},
	{
		skill: "React",
		level: "intermediate",
		color: "#60DAFB",
	},
]

function App() {
	return (
		<div className='card'>
			<Avatar />
			<div className='data'>
				<Intro />
				{/* Should contain one Skill component
		  for each web dev skill that you have,
		  customized with props */}
				<SkillList />
			</div>
		</div>
	)
}

function Avatar() {
	return (
		<img className='avatar' src='./monika_dominik.jpg' alt='Monika Dominik' />
	)
}

function Intro() {
	return (
		<div>
			<h1>Monika Dominik</h1>
			<p>
				Mam 35 lat, aspiruję do pracy w IT, obenie jestem w trakcie kursu
				Reacta. W styczniu przeprowadzam się ze Śląska do Warszawy, gdzie
				planujemy mieszkać z moim Mężem i naszym kotem Lucjanem. Poza
				technologią pasjonują mnie górskie wędrówki, które są moim sposobem na
				relaks i kontakt z naturą.
			</p>
		</div>
	)
}

function SkillList() {
	const skillsNum = skills.length
	return skillsNum > 0 ? (
		<ul className='skill-list'>
			{skills.map(ability => (
				<Skill
					skill={ability.skill}
					color={ability.color}
					level={ability.level}
					key={ability.skill}
				/>
			))}
		</ul>
	) : (
		<p>I don't have any skills right now</p>
	)
}

function Skill({ skill, color, level }) {
	return (
		<div className='skill' style={{ backgroundColor: color }}>
			<span>
				{skill}
				{level === "advanced" && "💪"}
				{level === "intermediate" && "👍"}
				{level === "beginner" && "👶"}
			</span>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
