import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import  RenderActiveComponent  from './components/RenderActiveComponent';
import {
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active,setActive]=useState(localStorage.getItem("active-page") ||  "Welcome page")
  const setActivePage=(page)=>{
     localStorage.setItem("active-page",page)
     setActive(page)
  }
  return (
    <Flex w="100vw" h="100vh" overflow="hidden" as="section">
      <Box
        p={'5px'}
        maxW={'250px'}
        w="full"
        h={'full'}
        display={{ base: 'none', md: 'flex' }}
      >
        <Sidebar active={active} setActivePage={setActivePage} />
      </Box>

      <Drawer
        display={{ base: 'block', md: 'none' }}
        isOpen={isOpen}
        onOpen={onOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar active={active} setActivePage={setActivePage} />
        </DrawerContent>
      </Drawer>

      <VStack
        alignItems="flex-start"
        w="full"
        h="100vh"
        overflowY="auto"
        as="main"
      >
        <Header isOpen={isOpen} onOpen={onOpen} />
        <AnimatePresence exitBeforeEnter>
           <RenderActiveComponent active={active} />
        </AnimatePresence>
      </VStack>
    </Flex>
  );
}

export default App;
