import { Flex, Heading, Text,UnorderedList,ListItem,Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import * as route from "../utils/routes"
const Sidebar = ({active,setActivePage}) => {
  const navigations=[
    {
      page:route.WELCOME_PAGE,
      active:false,
      route:"/"
    },
    {
      page:route.HOD_SPEECH,
      active:false,
      route:"/hod-speech"
    },
    {
      page:route.PREFACE,
      active:false,
      route:"/preface"
    },
    {
      page:route.COLLEGE_ANTHEM,
      active:false,
      route:"/anthem"
    },
    {
      page:route.PRINCIPAL_OFFICERS,
      active:false,
      route:"/principal-officers"
    },
    {
      page:route.ABOUT_VISION_MISSION,
      active:false,
      route:"/about-us-vision-mission"
    },
    {
      page:route.LIST_OF_LECTURERS,
      active:false,
      route:"/list-of-technologist"
    },
    {
      page:route.TABLE_COURSES,
      active:false,
      route:"/table-of-courses"
    },
    {
      page:route.COURSE_DETAILS,
      active:false,
      route:"course-details/"
    },{
      page:route.DEPARTMENTAL_DETAILS,
      active:false,
      route:"/departmental-details"
    }

  ]
  const filtered_navigation=navigations.map(each=> each.page == active ? {...each,active:true} : each)
  return (
   
      <Box
      borderRight={'1px solid'}
      borderColor={'gray.500'}
      maxW="250px"
      w="full"
      h="full"
      overflowY="auto"
      as="aside"
    >
      <Heading>Contents</Heading>
      <UnorderedList my="2">
        {
            filtered_navigation.map(each => <ListItem fontWeight={ each.active ? "extrabold" : ""} cursor={"pointer"} onClick={()=> setActivePage(each.page)}>{each.page}</ListItem> )
        }
      </UnorderedList>
     
    </Box>
  
     
    
   
  );
};

export default Sidebar;
