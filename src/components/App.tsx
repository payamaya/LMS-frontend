import { ReactElement, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { IMockContext, IMockData } from "../interfaces.ts";
import mockData from "../courses-user-userid-mock.json";

export function App(): ReactElement {
	const location = useLocation();
	const [data, setData] = useState<IMockData>(mockData);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// context
	const mockContext: IMockContext = {
		data,
		isLoading
		//future API call functions here to pass down
	};

	/*
	// fetch functions
	// todo: promise return ett interface, beroende på vilken endpoint vi skickar så kan vi få det interfacet
	const fetchData = async (url: string): Promise<any> => {
		setIsLoading(true)
		try {
			const response = await fetch(url); // fetch the api endpoint
			const data = await response.json(); // parse to json
			setData(data);
		}
		catch (error) {
			console.error("Error fetching the api, error: ", error);
			return null;
		}
		finally {
			setIsLoading(false);
		}
	}
	*/

	return (
		<div className="app">
			{location.pathname !== '/' && <Navbar />}
			<main className="main-content">
				<Outlet context={mockContext} />
			</main>
		</div >
	)
}
