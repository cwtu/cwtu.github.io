import React from "react";
import hash from "object-hash";
import Block from "./Block";
import { Typography } from "@mui/material";

const Section = (props: {
                  sectionName : string,
                  blockList : BlockType[],
                }) => {

  return (
    <>
      <Typography variant="h5">{props.sectionName}</Typography>
      {props.blockList.map((block : BlockType, index : number) => {
        const blockHash = hash.sha1(block)
        return(
          <Block 
            key={blockHash}
            block={block} 
            blockHash={blockHash} 
          />
        )
      })}
	  </>
  );
}

export default Section;