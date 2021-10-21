import Head from 'next/head'
import { useState } from 'react'

import Nav from '../components/Nav'
import Landing from '../components/landing_page/Landing'
import Projects from '../components/projects/Projects'

export default function Home() {
	const [theme, setTheme] = useState(true);

	const handleTheme = () => {
		setTheme(!theme)
	}

	return (
		<div className="home">
			<Head>
				<title>Joshua Enikele | Frontend Developer</title>
				<meta name="Joshua Enikele Portfolio" content="Joshua Enikele Portfolio, Frontend Developer, HTML, JavaScript, React, NextJS" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav clickFunction={handleTheme} />
			<main className="main">
				<Landing bgClass={theme ? 'dark' : 'light'} />
				{/* <Projects /> */}
			</main>
		</div>
	)
}
