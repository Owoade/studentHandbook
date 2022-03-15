import PageWrapper from '../components/PageWrapper';
import { Heading, Text, Box } from '@chakra-ui/react';
const PrincipalOfficers = () => {
    return (
        <PageWrapper>
            <Heading textAlign={'center'} size={'md'} as="h3" my={"3"}>
                PRINCIPAL OFFICERS
            </Heading>
            <Box textAlign={"center"} width={"300px"} my="4" mx={"auto"}>
                <Text fontWeight={"extrabold"}>
                    DR. ADEKOYA OLATUNDE OWOSIBO
                </Text>
                <Text>B.Agric, M.Sc, Ph.D (U.I), MBA(LAUTECH)
                </Text>
                <Text>PROVOST</Text>
            </Box>
            <Box textAlign={"center"} width={"300px"} my="4" mx={"auto"}>
                <Text fontWeight={"extrabold"}>
                    REV'D BABATOPE J. DAVID
                </Text>
                <Text>B.A (Hons), M.A (Comm/Lang Arts U.I), Dip.TH, AMNIM
                </Text>
                <Text>REGISTRAR</Text>
            </Box>
            <Box textAlign={"center"} width={"300px"} my="4" mx={"auto"}>
                <Text fontWeight={"extrabold"}>
                    MR. ADENIYI OSADIYA

                </Text>
                <Text>B.Sc, MBA, ACA

                </Text>
                <Text>COLLEGE BURSAR
                </Text>
            </Box>
            <Box textAlign={"center"} width={"300px"} my="4" mx={"auto"}>
                <Text fontWeight={"extrabold"}>
                MR. AYODELE O. OLAYINKA
                </Text>
                <Text>B.Sc, MBA, CNA
                </Text>
                <Text>COLLEGE AUDITOR
                </Text>
            </Box>
        </PageWrapper>
    );
}

export default PrincipalOfficers;