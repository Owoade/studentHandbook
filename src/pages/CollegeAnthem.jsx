import PageWrapper from '../components/PageWrapper';
import { Heading, Text } from '@chakra-ui/react';
const CollegeAnthem = () => {
    return (
        <PageWrapper>
            <Heading size={'md'} textAlign={"center"} as="h3" my="3">
                COLLEGE ANTHEM
            </Heading>
            <Text textAlign={"center"} width={"300px"} my="3" mx={"auto"}>
                1. Federal College of Animal Health
                And Production Technology
                Builders of great potentials
                Through Agriculture and modern technology

            </Text>
            <Text textAlign={"center"} width={"300px"} my="3" mx={"auto"}>
                All hail our great alma matter
                The citadel of knowledge and creativity
                Great Moorites uphold your vision
                Animal care for productivity
            </Text>
            <Text textAlign={"center"} width={"300px"} my="3" mx={"auto"}>
                2. Federal College of Animal Health
                And Production Technology
                Caring for man's agricultural needs
                Through extension service to community


            </Text>

        </PageWrapper>
    );
}

export default CollegeAnthem;