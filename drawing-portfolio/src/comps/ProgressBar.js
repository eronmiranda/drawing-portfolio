import React, {useEffect} from "react";
import useStorage from "../hooks/useStorage";
import Box from '@mui/material/Box';
import LinearProgressWithLabel from "./LinearProgressWithLabel";


const ProgressBar = ({file, setFile}) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if(url){
      setFile(null);
    }
  }, [url,setFile]);

  return(
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} color="secondary"/>
    </Box>
  );
}

export default ProgressBar;