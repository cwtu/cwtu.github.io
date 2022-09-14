import { Box, styled } from "@mui/material";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

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