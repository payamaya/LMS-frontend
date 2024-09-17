import { ReactElement } from "react"
import { Outlet } from "react-router-dom"

export function App(): ReactElement {
	return (
		<div className="app">
			<main className="main-content">
				<Outlet context={null} />
			</main>
		</div >
	)
}