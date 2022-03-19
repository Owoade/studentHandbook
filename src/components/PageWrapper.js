import React from 'react';
import MotionBox from '../framerMotion/MotionBox';
import pageVariants from '../utils/pageVariants';
import {useEffect} from "react"

const PageWrapper = ({ children }) => {
  
 
  return (
    <>
    <span id="top" style={{opacity:0}}>hello</span>
     <MotionBox
      w="full"
      h="full"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      p={'5px 10px'}
    >
      {children}
    </MotionBox>
    </>
   
  );
};

export default PageWrapper;
