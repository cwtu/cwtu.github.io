import { createTheme } from "@mui/material";
import { purple, deepOrange, cyan, grey } from '@mui/material/colors';

const theme = createTheme({
	 palette: {
		 mode: "dark",
		 primary: {
			 main: cyan[500]
		 },
		 secondary: {
			 main: deepOrange[500]
		 },
		 background: {
			//  paper: grey[300],
			 default: grey[700],
		 }
	 }
})

export default theme;