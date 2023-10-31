import {Box, styled} from "@mui/material";
import {  useContext, useEffect, useState } from "react";
import {DataContext} from "../context/Dataprovider";

const container= styled(Box)`
    height:39vh;
`

const Result=()=>{
      const [src, setSrc]=useState('');
     const {html, css, js}=useContext(DataContext);
     const sorce=`
       <html>
         <body> ${html}</bode>
         <style> ${css}</style>
         <script> ${js}</script>
       </html>
     `
     useEffect(()=>{
      const timeout= setTimeout(()=>{
        setSrc(sorce);
       }, 2500);
       return ()=> clearTimeout(timeout);
     }, [html, css, js]);
    return(
        <container>
            <iframe 
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder={0}
                width="100%"
                height="100%"
            />

             
        </container>
    )
}
 export default Result;