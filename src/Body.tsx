import { Box, styled } from "@mui/material";
import React from "react";
import { BlockDisplayContextProvider } from "./context/BlockDisplayContext";
import { CurrentPageContext } from "./context/CurrentPageContext";
import Home from "./Home";
import Page from "./Page";

const BodyWrapper = styled(Box)(({ theme, color }) => ({
  width: "75%",
  maxWidth: "1000px",
  margin: "auto",
	flex: "1 1 auto",
	overflow: "auto",
}))

const Body = () => {
	const {currentPage} = React.useContext(CurrentPageContext);
	
	return (
		<BodyWrapper>
			{
				currentPage === "" ? 
			(<Home />) : 
			(
				<BlockDisplayContextProvider>
					<Page currentPage={currentPage} />
				</BlockDisplayContextProvider>
			)
			}
		</BodyWrapper>
	)
}

export default Body;