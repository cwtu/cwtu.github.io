import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from 'react'
import { BlockDisplayContext } from "./context/BlockDisplayContext";



const Block = (
    props : {
      block : BlockType,  
      blockHash : string,      
    }) => {

  const {blockDisplayHash, setBlockDisplayHash} = React.useContext(BlockDisplayContext);

  const handleChange = (blockHash: string) => (event: any, isExpanded : boolean)=> {
    setBlockDisplayHash(isExpanded ? blockHash : "");
  };

	return(
		<Accordion expanded={blockDisplayHash === props.blockHash} onChange={handleChange(props.blockHash)}>
      <AccordionSummary
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {props.block.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>{props.block.time}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {props.block.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
	)
}

export default Block;