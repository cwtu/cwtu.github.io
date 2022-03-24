import React from "react";

import { courses, experiences, projects } from "./assets/data/data";
import Section from "./Section";

const Page = (props : {currentPage : string}) => {
	const [sectionList , setSectionList]= React.useState<SectionType[]>([]);

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
  }, [props.currentPage])
	return (
		<>
	 		{sectionList.map((section : SectionType, index : number) => {
       return(
         <Section 
				 	sectionName={section.sectionName}
					blockList={section.blockList} 
				/>
       )
    	})}
	 </>
	)
}

export default Page;