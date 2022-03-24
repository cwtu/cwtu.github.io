import React from "react";
import Block from "./Block";
import {experiences, courses, projects} from "./assets/data/data";

const BlockList = (props : {section : string}) => {
	const [blockDisplay, setBlockDisplay] = React.useState<number>(-1); // determine which block is expanded

	const [blocklist , setBlockList]= React.useState<BlockProp[]>([]);

  React.useEffect(() => {
    switch(props.section) {
      case "experiences":
        setBlockList(experiences);
        break;
      case "courses":
        setBlockList(courses);
        break;
      case "projects":
        setBlockList(projects);
        break;
      default:
        break;
    }
  }, [props.section])

  const handleChange = (blockNum: number) => (event: any, isExpanded : boolean)=> {
    setBlockDisplay(isExpanded ? blockNum : -1);
  };

  return (
   <>
	 	{blocklist.map((block : BlockProp, index : number) => {
       return(
         <Block block={block} blockNum={index} blockDisplay={blockDisplay} handleChange={handleChange}/>
       )
     })}
	 </>
  );
}

export default BlockList;