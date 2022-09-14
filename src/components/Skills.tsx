import { Box, Typography, Grid, Rating, styled} from "@mui/material";
import React from "react";
// import Memoji from './assets/images/memoji/giphy.gif'
import ReactLogo from "./assets/images/logos/reactjs.png";
import AWSLogo from "./assets/images/logos/aws.png";
import DJangoLogo from "./assets/images/logos/django.png";
import GraphQLLogo from "./assets/images/logos/graphql.png";
import DockerLogo from "./assets/images/logos/docker.png";
import MySQLLogo from "./assets/images/logos/mysql.png";
import ArduinoLogo from "./assets/images/logos/arduino.png";
import TypeScriptLogo from "./assets/images/logos/typescript.png";
import JavaScriptLogo from "./assets/images/logos/javascript.png";
import CLogo from "./assets/images/logos/c.png";
import CPPLogo from "./assets/images/logos/c++.png";
import JavaLogo from "./assets/images/logos/java.png";
import PythonLogo from "./assets/images/logos/python.png";
import GitLogo from "./assets/images/logos/git.png";
import MuiLogo from "./assets/images/logos/mui.png";


const MyGridItem = styled(Grid)(({ theme, color }) => ({
	width: "15em",
	height: "10em",
	display: "flex",
}))

const MyGridItem2 = styled(Grid)(({ theme, color }) => ({
	width: "20em",
	height: "10em",
	display: "flex",
	alignItems: "center",
	justifyContent: "left",
	":hover": {
		transform: 'scale(1.10)'
	}	
}))

const MyLogo = styled('img')(({ theme, color }) => ({
	margin: "auto",
	maxHeight: "80%",
	width: "auto",
	":hover": {
		transform: 'scale(1.20)'
	}	
}))
const MyLogo2 = styled('img')(({ theme, color }) => ({
	marginRight: "auto",
	width: "5em",
	height: "auto",
}))

const StyledRating = styled(Rating)(({ theme, color }) => ({
  '& .MuiRating-iconFilled': {
    color: "#00bcd4",
  },

}));

const Skills : React.FC = () => {
	return(
		<Box display="flex" flexDirection="column" >
			<Typography 
				marginTop={6}
				component="p" 
				variant="h3" 
				align="center"
			>
				Tools/Frameworks
			</Typography>

			<Grid 
				container 
				direction="row" 
				wrap="wrap" 
				spacing={4} 
  			justifyContent="center"
			>
				<MyGridItem item >
					<MyLogo src={ReactLogo}/>
				</MyGridItem>
				<MyGridItem item >
					<MyLogo src={DJangoLogo}/>
				</MyGridItem>
				<MyGridItem item >
					<MyLogo src={AWSLogo}/>
				</MyGridItem>
				<MyGridItem item >
					<MyLogo src={GraphQLLogo}/>
				</MyGridItem>
				<MyGridItem item >
					<MyLogo src={DockerLogo}/>
				</MyGridItem>
				<MyGridItem item >
					<MyLogo src={GitLogo}/>
				</MyGridItem>
				<MyGridItem item>
					<MyLogo src={MuiLogo}/>
				</MyGridItem>
				<MyGridItem item>
					<MyLogo src={MySQLLogo}/>
				</MyGridItem>
			</Grid>

			<Typography 
				marginTop={6}
				component="p" 
				variant="h3" 
				align="center"
			>
				Programming Languages
			</Typography>
			<Grid 
				container 
				direction="row" 
				wrap="wrap" 
				spacing={4} 
  			justifyContent="center"
			>
				<MyGridItem2 item >
					<MyLogo2 src={PythonLogo}/>
					<Box>
						<Typography fontSize="1em">Proficient</Typography>
						<StyledRating value={5} readOnly />
					</Box>
				</MyGridItem2>
				<MyGridItem2 item >
					<MyLogo2 src={JavaLogo}/>
					<Box>
						<Typography fontSize="1em">Experienced</Typography>
						<StyledRating value={4} readOnly />
					</Box>
				</MyGridItem2>
				<MyGridItem2 item >
					<MyLogo2 src={JavaScriptLogo}/>
					<Box>
						<Typography fontSize="1em">Experienced</Typography>
						<StyledRating value={4} readOnly />
					</Box>
				</MyGridItem2>
				<MyGridItem2 item >
					<MyLogo2 src={CLogo}/>
					<Box>
						<Typography fontSize="1em">Comfortable</Typography>
						<StyledRating value={3} readOnly />
					</Box>
				</MyGridItem2>
				<MyGridItem2 item >
					<MyLogo2 src={TypeScriptLogo}/>
					<Box>
						<Typography fontSize="1em">Comfortable</Typography>
						<StyledRating value={3} readOnly />
					</Box>
				</MyGridItem2>
				<MyGridItem2 item >
					<MyLogo2 src={ArduinoLogo}/>
					<Box>
						<Typography fontSize="1em">Comfortable</Typography>
						<StyledRating value={3} readOnly />
					</Box>
				</MyGridItem2>
				<MyGridItem2 item >
					<MyLogo2 src={CPPLogo}/>
					<Box>
						<Typography fontSize="1em">Novice</Typography>
						<StyledRating value={2} readOnly />
					</Box>
				</MyGridItem2>


			</Grid>

			<Typography 
				marginTop={6}
				component="p" 
				variant="h3" 
				align="center"
			>
				Spoken Languages
			</Typography>
			<Grid 
				container 
				direction="row" 
				wrap="wrap" 
				spacing={4} 
  			justifyContent="center"
			>
				<MyGridItem2 item >
					<Typography marginRight="auto" fontSize="1em">English</Typography>
					<Box>
						<Typography fontSize="1em">Proficient</Typography>
						<StyledRating value={5} readOnly />
					</Box>
				</MyGridItem2>
				<MyGridItem2 item >
					<Typography marginRight="auto" fontSize="1em">Mandarin</Typography>
					<Box>
						<Typography fontSize="1em">Native</Typography>
						<StyledRating value={5} readOnly />
					</Box>
				</MyGridItem2>
			</Grid>
		</Box>
	)
};

export default Skills;