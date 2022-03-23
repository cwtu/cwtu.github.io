import React from "react";
import Block from "./Block";

const BlockList = (props : {section : string}) => {
	const [blockDisplay, setBlockDisplay] = React.useState<number>(-1); // determine which block is expanded
  
	const [blocklist , setBlocklist]= React.useState<BlockProp[]>([{title: "one", description: "two", time: "three"}, {title: "one", description: "two", time: "three"}]);

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