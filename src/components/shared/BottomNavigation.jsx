import { Button, ButtonGroup,Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const BottomNavigation = ({navigation}) => {
    const navigate = useNavigate()
    const navigateToRoute=(route)=>{
        window.scrollTo({
            top:0
          })
        navigate(route)  

    }
    return ( 
       <Flex my={"6"} width={"200px"} mx="auto" justifyContent={"space-between"}>
           {navigation.prev && <Button colorScheme={"blue"} onClick={()=> navigateToRoute(`${navigation.prev}#top`)}>Previous</Button>}
           {navigation.next && <Button colorScheme={"blue"} onClick={()=> navigateToRoute(`${navigation.next}#top`)}>Next</Button>}
           
       </Flex>
     );
}
 
export default BottomNavigation;