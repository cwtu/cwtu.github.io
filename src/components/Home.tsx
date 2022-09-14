import { Box, Typography } from "@mui/material";
import React from "react";
// import Memoji from './assets/images/memoji/giphy.gif'
import Memoji from './assets/images/memoji/Mimoji_croped.gif'

const Home : React.FC = () => {
	return(
		<Box display="flex"  >
			<Box>
				<Typography component="p" variant="h1">Hi👋</Typography>
				<Typography component="p" variant="h3">My name is</Typography>
				<Typography component="p" variant="h3" color="primary">Chao-Wei Tu<Typography>//cwtu</Typography></Typography>
				<Box marginTop={4}>
					<Typography component="p" align="left" paragraph>
						I am currently pursuing a Computer Science Major and Statistics Minor at the University of Maryland, College Park. As an exciting software engineer, I truely believe in writing quality and scalable programs. I am also proud that my educations and past experiences made me write readable and well-structured codes.
					</Typography>
					<Typography component="p" align="left" paragraph>
						I mainly work in the front-end and back-end web development decipline, and have fundamental knowledge in statistical analysis and machine learning. From simple websites to complex systems, I thoroughly enjoy the process of building software, solving complex problems, and working with others to create amazing products.
					</Typography>
				</Box>
			</Box>
		</Box>
	)
};

export default Home;