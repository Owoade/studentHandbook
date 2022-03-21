import {
  Text,
  HStack,
  Link,
  VStack,
  Heading,
  Button, ButtonGroup,
  chakra,
  Flex
} from '@chakra-ui/react';
import BottomNavigation from '../components/shared/BottomNavigation';

import Anthem from '../components/Home/Anthem';
import Foreword from '../components/Home/Foreword';
import PageWrapper from '../components/PageWrapper';
import Preface from '../components/Home/Preface';
import PrincipalOfficers from '../components/Home/PrincipalOfficers';
import AboutUs from '../components/Home/AboutUs';
import Vision from '../components/Home/Vision';
import Mission from '../components/Home/Mission';

const Home = () => {
  return (
    <PageWrapper>
      <Flex flexDir="column" justifyContent={'space-between'} w="full" h="70vh">
        <VStack justifyContent={'center'} mt={4} as="section">
          <Flex>
        <img src="https://fcahptib.edu.ng/collogo.png" width={"50px"} />
        <img style={{width:"50px"}} src="https://th.bing.com/th/id/OIP.gyELfX6Mr4tD-c0q2HiGhQHaHa?pid=ImgDet&rs=1" />
          </Flex>
          <Heading textAlign={'center'} size={'lg'} as="h1">
            COMPUTER SCIENCE TECHNOLOGY DEPARTMENT
          </Heading>
          
          <Heading textAlign={'center'} size="sm" as="h2">
            FEDERAL COLLEGE OF ANIMAL HEALTH AND PRODUCTION TECHNOLOGY,
          </Heading>
          <Text>P.M.B 5029, MOOR PLANTATION,</Text>
          <Text>IBADAN, OYO STATE, NIGERIA</Text>
        </VStack>
        <VStack spacing={0}>
          <Text>STUDENTS’ HANDBOOK</Text>
          <Text>2ND EDITION</Text>
        </VStack>
        <VStack spacing={0}>
          <HStack>
            <Text>Email Address:</Text>
            <Link
              to="#"
              onClick={() =>
                (window.location.href = 'mailto:computertech@fcahptib.edu.ng')
              }
            >
              computertech@fcahptib.edu.ng
            </Link>
          </HStack>
          <HStack>
            <Text>Website:</Text>
            <chakra.a
              href="https://fcahptib.edu.ng"
              rel="noopener noreferrer"
              target={'_blank'}
              _hover={{ textDecoration: 'underline' }}
            >
              www.fcahptib.edu.ng
            </chakra.a>
          </HStack>
        </VStack>
      </Flex>
      <BottomNavigation navigation={{next:"/staff"}} />
   </PageWrapper>
  );
};

export default Home;
