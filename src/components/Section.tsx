import React from "react";
import hash from "object-hash";
import Block from "./Block";
import { Typography, Box } from "@mui/material";

const Section = (props: {
                  sectionName : string,
                  blockList : BlockType[],
                }) => {

  return (
    <Box marginBottom={4}>
      <Typography variant="h4" marginBottom={1}>{props.sectionName}</Typography>
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
	  </Box>
  );
}

export default Section;