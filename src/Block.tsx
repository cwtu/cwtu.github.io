import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from 'react'



const Block = (
    props : {
      block : BlockProp,  
      blockNum : number, 
      blockDisplay : number,
      handleChange : 
        (arg0: number) => 
          (event: React.SyntheticEvent<Element, Event>, expanded: boolean) => 
            void
    }) => {

	return(
		<Accordion expanded={props.blockDisplay === props.blockNum} onChange={props.handleChange(props.blockNum)}>
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