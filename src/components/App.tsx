import { ReactElement } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "./Navbar"

export function App(): ReactElement {

	const location = useLocation();

	return (
		<div className="app">
			{location.pathname !== '/' && <Navbar />}
			<main className="main-content">
				<Outlet context={null} />
			</main>
		</div >
	)
}