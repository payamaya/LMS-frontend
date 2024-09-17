import { ReactElement } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export function App(): ReactElement {
	return (
		<div className="app">
			<Navbar />
			<main className="main-content">
				<Outlet context={null} />
			</main>
		</div >
	)
}