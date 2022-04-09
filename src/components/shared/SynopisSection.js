import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PageWrapper from '../PageWrapper';
import BottomNavigation from './BottomNavigation';
import queryString from "query-string"
const SynopisSection = ({ title, data,level }) => {
  const url = queryString.parse(window.location.search)
  return (
    <PageWrapper>
      <Heading mb={8} textAlign={'center'} size={'md'}>
        {title}
      </Heading>
      <VStack spacing={8} alignItems={'flex-start'} w="full">
        {data.map((item, index) => (
          <VStack spacing={0} alignItems={'flex-start'} w="full" key={index}>
            <Text fontWeight="bold"  key={index}  backgroundColor={item.course == url.resource ? "yellow" : ""}>{item.course}</Text>
            <Text  key={index}  backgroundColor={item.description == url.resource ? "yellow" : ""}>{item.description}</Text>
          </VStack>
        ))}
      </VStack>
      {level == "nd" ?  <BottomNavigation navigation={{next:"/synopis-Hnd",prev:"/course"}} /> : <BottomNavigation navigation={{prev:"/synopis-Nd",next:"/course-details"}} />}
    </PageWrapper>
  );
};

export default SynopisSection;
