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
			 default: "#000",
			 paper: "#555"
		 }
	 },
		typography: {
      fontFamily: [
			'Noto Mono',
			'Roboto',
			'"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    },
})

export default theme;