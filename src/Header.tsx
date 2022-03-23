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
			<Tab value="home" label="Home" />
			<Tab value="experience" label="Experiences" />
			<Tab value="course" label="Courses Taken" />
		</Tabs>
		
	)
};

export default Header;