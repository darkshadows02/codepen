import { useContext } from "react";
import Editor from "./Editor";
import {Box, styled} from "@mui/material";
import  {DataContext} from "../context/Dataprovider";
const Container=styled(Box)`
     display:flex;
     background-color:#060606;
     height:60vh;
`
const Code=()=>{

  // const {html, css, js,sethtmal,setcss, setjs}=useContext(Datacontext);
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
        // <>
          <Container> 
          <Editor 
            heading="HTML"
            icons="/"
            color="#FF3C41"
            value={html}
            onChange={setHtml}
          />
          <Editor
            heading="CSS"
            icons="*"
            color="#0EBEFF"
            value={css}
            onChange={setCss}
          />
          <Editor
            heading="JS"
            icons="()"
            color="#FCD000"
            value={js}
            onChange={setJs}
          />
          </Container>
        // </>
    )
}
export default Code;