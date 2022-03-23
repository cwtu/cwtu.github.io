import React from "react";
import BlockList from "./BlockList"
import { CurrentPageContext } from "./context/CurrentPageContext";
import Home from "./Home";

const Body = () => {
	const {currentPage} = React.useContext(CurrentPageContext);
	
	return (
		currentPage === "home" ? 
				(<Home />) : (<BlockList section={currentPage} />)
	)
}

export default Body;