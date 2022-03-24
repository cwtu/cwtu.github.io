import React from "react";
import { BlockDisplayContextProvider } from "./context/BlockDisplayContext";
import { CurrentPageContext } from "./context/CurrentPageContext";
import Home from "./Home";
import Page from "./Page";

const Body = () => {
	const {currentPage} = React.useContext(CurrentPageContext);
	
	return (
		currentPage === "" ? 
			(<Home />) : 
			(
				<BlockDisplayContextProvider>
					<Page currentPage={currentPage} />
				</BlockDisplayContextProvider>
			)
	)
}

export default Body;