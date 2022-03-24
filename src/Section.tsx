import React from "react";
import hash from "object-hash";
import Block from "./Block";

const Section = (props: {
                  sectionName : string,
                  blockList : BlockType[],
                }) => {

  return (
    <>
      <p>{props.sectionName}</p>
      {props.blockList.map((block : BlockType, index : number) => {
        return(
          <Block 
            block={block} 
            blockHash={hash.sha1(block)} 
          />
        )
      })}
	  </>
  );
}

export default Section;