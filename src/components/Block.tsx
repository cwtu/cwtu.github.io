// import fs from 'node:fs'
import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, styled, Typography, Link, Grid } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ReactMarkdown from 'react-markdown';

import { BlockDisplayContext } from "./context/BlockDisplayContext";
import style from './markdown-styles.module.css';
import ScrollFade from '@benestudioco/react-scrollfade';

const MyAccordionDetails = styled(AccordionDetails)(({theme, color}) => ({
  // height: "50%",
  // maxHeight: "400px",
  // overflow: "auto",
  background: theme.palette.background.paper
}))

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
		<Accordion expanded={blockDisplay === props.blockHash} onChange={handleChange(props.blockHash)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        // expandIcon={blockDisplay === props.blockHash ?<OpenInNewRoundedIcon />:<ExpandMoreIcon/>}

        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Grid container direction="column">
          <Grid item>
            <Typography>
              {props.block.title}
            </Typography>
          </Grid>
          {
            'time' in props.block ?
              <Grid item>
                <Typography sx={{ color: 'text.secondary'}}>{props.block.time}</Typography>
              </Grid>
              : <div></div>
          }
        </Grid>
        
      </AccordionSummary>
      <MyAccordionDetails>
        <ScrollFade/>
        <ReactMarkdown className={style.reactMarkDown} children={mdText}/>
        {
        'link' in props.block ? 
          <Box display="flex" justifyContent="center" >
            {/* <Button variant="contained" endIcon={<OpenInNewRoundedIcon />}>See more</Button>s */}
            <Button 
              variant="contained" 
              endIcon={<OpenInNewRoundedIcon />}
              onClick={() => window.open(props.block.link)}
              >take a look</Button>
          </Box>
       : <div></div> 
       }
        {/* <Typography>
          {props.block.description}
        </Typography> */}
      </MyAccordionDetails>
    </Accordion>
	)
}

export default Block;