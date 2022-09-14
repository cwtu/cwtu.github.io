import { MailRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Grid, Link } from '@mui/material';

const iconProps = {
	color: "primary",
	fontSize: "large"
}

const Footer = () => {
	return(
		<Grid padding={2} container rowSpacing={0} justifyContent="center" >
			<Grid item xs={1}>
				<Link href='mailto:cwtu12@gmail.com' aria-label='GitHub'>
					<MailRounded fontSize="large" color="secondary"/>
				</Link>
			</Grid>
			<Grid item xs={1}>
				<Link href='https://github.com/cwtu/' aria-label='GitHub'>
					<GitHub fontSize="large" color="secondary"/>
				</Link>
			</Grid>
			<Grid item xs={1}>
				<Link href='https://linkedin.com/in/cwtu' aria-label='GitHub'>
					<LinkedIn fontSize="large" color="secondary"/>
				</Link>
			</Grid>
		</Grid>
	)
}

export default Footer;