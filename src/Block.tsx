// import fs from 'node:fs'
import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactMarkdown from 'react-markdown';

import { BlockDisplayContext } from "./context/BlockDisplayContext";
import style from './markdown-styles.module.css';


const Block = (
    props : {
      block : BlockType,  
      blockHash : string,      
    }) => {

  const {blockDisplay, setBlockDisplay} = React.useContext(BlockDisplayContext);
  const [mdText, setMdText] = React.useState('');

  React.useEffect(() => { // convert markdown file to string
    import(`./assets/data/${props.block.markdown}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setMdText(res));
      })
      .catch(err => console.log(err))
	})

  const handleChange = (blockHash: string) => (event: any, isExpanded : boolean)=> {
    setBlockDisplay(isExpanded ? blockHash : "");
  };

	return(
    <>
    
		<Accordion expanded={blockDisplay === props.blockHash} onChange={handleChange(props.blockHash)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '55%', flexShrink: 0 }}>
          {props.block.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary'}}>{props.block.time}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ReactMarkdown className={style.reactMarkDown} children={mdText}/>
        {/* <Typography>
          {props.block.description}
        </Typography> */}
      </AccordionDetails>
    </Accordion>
    </>
	)
}

export default Block;