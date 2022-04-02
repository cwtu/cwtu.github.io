import { Box, styled } from "@mui/material";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const MainWrapper = styled(Box)(({theme, color}) => ({
	height: "100vh",
	display: "flex",
	flexFlow: "column"
}))

const Main = () => {
	return (
		<MainWrapper>
			<Header/>
			<Body/>
			<Footer/>
		</MainWrapper>
	)
}

export default Main;