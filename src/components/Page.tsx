// import ScrollFade from "@benestudioco/react-scrollfade";
import { Box, styled } from "@mui/material";
import React from "react";

import { courses, experiences, projects } from "../assets/data/data";
import { BlockDisplayContext } from "../context/BlockDisplayContext";
import Section from "./Section";



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
		<>
      {/* <ScrollFade/> */}
        {sectionList.map((section : SectionType, index : number) => {
        return(
          <Section 
            key={index}
            sectionName={section.sectionName}
            blockList={section.blockList} 
          />
        )
        })}
	 </>
	)
}

export default Page;