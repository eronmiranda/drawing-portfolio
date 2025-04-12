import React from "react";
import { motion } from "motion/react"
import Zoom from '@mui/material/Zoom';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (event) =>{
    if(event.target.classList.contains('backdrop'))
    {
      setSelectedImg(null);
    }
  };

  return(
    <motion.div 
      className="backdrop" 
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <Zoom in={selectedImg}>
        <img 
          src={selectedImg} 
          alt="enlarged pic"/>
      </Zoom>

    </motion.div>
  );
}

export default Modal;
