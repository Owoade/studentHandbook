import {Heading,Text,Box} from "@chakra-ui/react"
import PageWrapper from '../components/PageWrapper';
const HodSpeech = () => {
    return ( 
        <PageWrapper>
            <Heading  size={'md'} as="h3" my="3">
            FOREWARD
          </Heading>
          <Text my="3">
            The Federal College of Animal Health and Production Technology, Moor Plantation, Ibadan offers full and part-time courses leading to National Diplomas and Higher National Diploma qualifications through the kind of trainings we give our students, our graduates are expected to be skillful and competent enough to be job creators with little or no assistance.
          </Text>
          <Text my="3">
            Our programmes are structured to meet national and international standard of middle level man power development.
          </Text>
          <Text my="3">
            This handbook is all encompassing as it provides information that will guide the students throughout their stay in the college towards successful academic achievement. Also it provides entry requirements and other information concerning the Department.
          </Text>
          <Text my="3">
            Therefore, students should note that they are to adhere strictly and comply with the College regulations and departmental rules as approved by the College management. 
          </Text>
          <Text my="3">
            I look forward to attending your graduation ceremony soonest.
          </Text>
          <Text my="3">
           Thank you. 
          </Text>
          <Box mt="5">
            <Text fontWeight={"extrabold"}>Dr. A. O. Owosibo </Text>
            <Text>(B.Agric, M.Sc, Ph.D)</Text>
            <Text>College Provost</Text>
          </Box>
        </PageWrapper>
     );
}
 
export default HodSpeech;