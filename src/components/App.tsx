import { ReactElement, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { MockContext, MockData } from "../interfaces.ts";
import mockData from "../courses-user-userid-mock.json";

export function App(): ReactElement {
	const location = useLocation();
	const [data, setData] = useState<MockData>(mockData);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// context
	const mockContext: MockContext = {
		data,
		isLoading
		//future API call functions here to pass down
	};

	return (
		<div className="app">
			{location.pathname !== '/' && <Navbar />}
			<main className="main-content">
				<Outlet context={mockContext} />
			</main>
		</div >
	)
}
