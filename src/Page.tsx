import { Box, styled } from "@mui/material";
import React from "react";

import { courses, experiences, projects } from "./assets/data/data";
import { BlockDisplayContext } from "./context/BlockDisplayContext";
import Section from "./Section";

const PageWrapper = styled(Box)(({theme, color}) => ({
  height: "100%",
  overflowY: "auto"
}))

const Page = (props : {currentPage : string}) => {
	const [sectionList , setSectionList]= React.useState<SectionType[]>([]);
	const {setBlockDisplay} = React.useContext(BlockDisplayContext);

	React.useEffect(() => {
    switch(props.currentPage) {
      case "experiences":
        setSectionList(experiences);
        break;
      case "courses":
        setSectionList(courses);
        break;
      case "projects":
        setSectionList(projects);
        break;
      default:
        break;
    }
		setBlockDisplay("")
  }, [props.currentPage])
	return (
		<PageWrapper>
	 		{sectionList.map((section : SectionType, index : number) => {
       return(
         <Section 
				 	key={index}
				 	sectionName={section.sectionName}
					blockList={section.blockList} 
				/>
       )
    	})}
	 </PageWrapper>
	)
}

export default Page;