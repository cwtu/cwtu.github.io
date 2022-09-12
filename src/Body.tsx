import { Box, styled } from "@mui/material";
import React from "react";
import { BlockDisplayContextProvider } from "./context/BlockDisplayContext";
import { CurrentPageContext } from "./context/CurrentPageContext";
import Memoji from './assets/images/memoji/Mimoji_croped.gif'
import Home from "./Home";
import Page from "./Page";

const BodyWrapper = styled(Box)(({ theme, color }) => ({
	display: "flex",
  width: "80%",
  maxWidth: "1000px",
  margin: "50px auto",
	flex: "1 1 auto",
	overflow: "auto",
	alignItems: "center",
}))

const Body = () => {
	const {currentPage} = React.useContext(CurrentPageContext);
	
	return (
		<BodyWrapper>
			<img style={{height: "200px", margin:"auto 40px auto 0px"}} src={Memoji} alt="loading..." />

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