import { Box, styled } from "@mui/material";
import React from "react";
import { BlockDisplayContextProvider } from "../context/BlockDisplayContext";
import { CurrentPageContext } from "../context/CurrentPageContext";
import Memoji from './assets/images/memoji/Mimoji_croped.gif'
import Home from "./Home";
import Page from "./Page";
import Skills from "./Skills";
import ScrollFade from "@benestudioco/react-scrollfade";

const BodyWrapper = styled(Box)(({ theme, color }) => ({
	display: "flex",
  width: "80%",
  maxWidth: "1000px",
  margin: "20px auto",
	flex: "1 1 auto",
	overflow: "auto",
	alignItems: "center",
}))

const PageWrapper = styled(Box)(({theme, color}) => ({
  maxHeight: "100%",
  overflowY: "auto",
  // overflwow: "overlay",
}))

const Body = () => {
	const {currentPage} = React.useContext(CurrentPageContext);

	function renderSwitch(page: string) {
		switch(page) {
			case "":
				return(<Home/>);
			case "skills":
				return (<Skills/>);
			default:
				return (
				<BlockDisplayContextProvider>
					<Page currentPage={page} />
				</BlockDisplayContextProvider>
				);
		}
	}
	
	return (
		<BodyWrapper>
			<img style={{height: "200px", margin:"auto 40px auto 0px"}} src={Memoji} alt="loading..." />
			<PageWrapper>
				{/* <ScrollFade/> */}
				{renderSwitch(currentPage)}
			</PageWrapper>
		</BodyWrapper>
	)
}

export default Body;