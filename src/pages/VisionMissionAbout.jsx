import PageWrapper from '../components/PageWrapper';
import { Heading, Text, Box,UnorderedList,ListItem } from '@chakra-ui/react';
const VisionMissionAbout = () => {
    return ( 
        <PageWrapper>
             <Heading textAlign={'center'} size={'md'} as="h3" my={"3"}>
             ABOUT US
            </Heading>
            <Text my={"1"}>
                Computer Science Technology Department of Federal College of Animal Health and Production Technology, Moor Plantation, Apata, Ibadan was pioneered in 2012/2013 session after series of visitation by NBTE Resource Inspection Team.
            </Text>
            <Text my={"1"}>
            Since then we have been producing self-reliant manpower in Computer Science Technology that are capable of applying the use of computer in most areas of data processing and analysis. Additionally, our graduates are able to solve simple hardware problems, use various programming languages, know the operation of Computer system and work with different computer packages. Most of them are found working in different organizations, most of them are now inforpreneurer while some are working with different organizations.
            </Text>
            <Heading textAlign={'center'} size={'md'} as="h3" my={"3"}>
             VISION
            </Heading>
            <UnorderedList>
                <ListItem>
                    To contribute to the development of IT firm in Nigeria.
                </ListItem>
                <ListItem>
                    To be the foremost IT trainers among equals in the training of skilled personnel in computer science technology.
                </ListItem>
                <ListItem>
                To be a world class training institution in the area of computer science technology
                </ListItem>
                <ListItem>
                To produce diplomates at National Diploma (ND) and Higher National Diploma (HND) levels that are morally sound, professionally skillful and enterprising for sustainability in Nigeria.

                </ListItem>
            </UnorderedList>
            <Heading textAlign={'center'} size={'md'} as="h3" my={"3"}>
             Mision
            </Heading>
            <UnorderedList>
                <ListItem>
                To produce self-reliant man power diplomats that are capable of applying the use of computer in most area of human endeavor.
                </ListItem>
                <ListItem>
                To pursue the stated goals in our vision.
                </ListItem>
            </UnorderedList>

        </PageWrapper>
     );
}
 
export default VisionMissionAbout;