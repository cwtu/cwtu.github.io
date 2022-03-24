import { Tabs, Tab } from "@mui/material";
import React , { ChangeEvent} from "react";
import { CurrentPageContext } from "./context/CurrentPageContext";

const Header : React.FC = () => {
	const {currentPage, setCurrentPage} = React.useContext(CurrentPageContext);


	const handleChange = (event : ChangeEvent<any>, newPage : string) => {
		setCurrentPage(newPage);
	}

	return (
		<Tabs
			value={currentPage}
			onChange={handleChange}
			textColor="secondary"
			indicatorColor="secondary"
			aria-label="secondary tabs example"
		>
			<Tab value="" label="Home" />
			<Tab value="experiences" label="Experiences" />
			<Tab value="courses" label="Courses Taken" />
			<Tab value="projects" label="Projects" />
		</Tabs>
		
	)
};

export default Header;