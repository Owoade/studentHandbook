import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
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
import useWindowSize from './utils/useWindowSize';
import Staff from './pages/Staff';
import Courses from './pages/Courses';
import Synopis from './pages/Synopis';
import SynopisHnd from './pages/SynopisHnd';
import CourseDetails from "./pages/CourseDetails";
import ForeWordPage from "./pages/Foreword";
import AnthemPage from "./pages/Anthem";
import AboutUsPage from "./pages/Aboutus";
import MissionPage from "./pages/Mission";
import PrincipalOfficersPage from "./pages/PrincipalOfficers";
import PrefacePage from "./pages/Preface";
import VisionPage from "./pages/Vision";
import { useSearch } from './hooks/search';

function App() {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { width } = useWindowSize();
  useSearch()
  //close sidebar if screen is more than  a smaller width
  useEffect(() => {
    if (width > 768) {
      onClose();
    }
  }, [onClose, width]);

  return (
    <Flex w="100vw" h="100vh" overflow="hidden" as="section">
      <Box
        p={'5px'}
        maxW={'250px'}
        w="full"
        h={'full'}
        display={{ base: 'none', md: 'flex' }}
      >
        <Sidebar onClose={onClose} />
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
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <VStack
        alignItems="flex-start"
        w="full"
        h="100vh"
        overflowY="hidden"
        as="main"
      >
        <Header isOpen={isOpen} onOpen={onOpen} />
        <AnimatePresence exitBeforeEnter>
          <VStack alignItems="flex-start" w="full" h="full" overflowY="auto">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/course" element={<Courses />} />
              <Route path="/synopis-Nd" element={<Synopis />} />
              <Route path="/synopis-Hnd" element={<SynopisHnd />} />
              <Route path="/course-details" element={<CourseDetails />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/vision" element={<VisionPage />} />
              <Route path="/principal-officers" element={<PrincipalOfficersPage />} />
              <Route path="/preface" element={<PrefacePage />} />
              <Route path="/anthem" element={<AnthemPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/foreword" element={<ForeWordPage />} />
            </Routes>
          </VStack>
        </AnimatePresence>
      </VStack>
    </Flex>
  );
}

export default App;
