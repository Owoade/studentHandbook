import PageWrapper from '../components/PageWrapper';
import {
    Heading, Text, Box, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react';
const ListOfLecturers = () => {
    return (
        <PageWrapper>
            <Heading textAlign={'center'} size={'md'} as="h3" my={"3"}>
                LIST OF TEACHING STAFF IN COMPUTER SCIENCE TECHNOLOGY DEPARTMENT
            </Heading>
            <Heading textAlign={'center'} size={'md'} as="h3" >
                LIST OF LECTURERS
            </Heading>
            <Table variant='simple' my={"4"}>
                <Thead>
                    <Tr>
                        <Th>S/N</Th>
                        <Th>NAME</Th>
                        <Th>QUALIFICATION & DATE</Th>
                        <Th>RANK</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>DR AKINOSHO GAFAR ABIODUN (HOD)</Td>
                        <Td>B.Sc Mathematical Science
                            M. Information Science
                            Ph.D Information Science
                        </Td>
                        <Td>Lecturer I

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>2</Td>
                        <Td>OLANREWAJU OMOWAMIWA TAIWO
                            (Departmental Coordinator
                        </Td>
                        <Td>B.Sc (ED) Computer Science
                            M.SC Computer Science
                            MNCS (2018)

                        </Td>
                        <Td>Lecturer II

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>3</Td>
                        <Td>ADEGBILE ADEKUNLE ALIU</Td>
                        <Td>B. Tech. (Pure & Applied Physics
                            M.Sc Info. Tech.
                            M.Sc Physics
                            MNIP 2014


                        </Td>
                        <Td>Lecturer II

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>4</Td>
                        <Td>TOGUN OLUWAPELUMI</Td>
                        <Td>B. Tech (Computer Science)
                            M.Sc Information Management
                            MNCS (2018)

                        </Td>
                        <Td>Lecturer II

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>5</Td>
                        <Td>NWUFOH, C. VIVIAN</Td>
                        <Td>B.Sc (Computer Science)
                            M.Sc Information System Management
                            M.Sc (Computer Science)
                            MNCS (2020)


                        </Td>
                        <Td>Lecturer II

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>6</Td>
                        <Td>AYOBIOLOJA SEUN PATRICK</Td>
                        <Td>B.Sc. (ED) Computer Science
                            MNCS (2018)

                        </Td>
                        <Td>Lecturer II

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>7</Td>
                        <Td>SOGBETUN LATEEF OLUWASEUN</Td>
                        <Td>B. Tech.((Industrial Mathematics)
                            M. Tech. (Fluid Dynamics)
                        </Td>
                        <Td>Lecturer II

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>8</Td>
                        <Td>ADEWALE
                            FUNMILAYO  OMOLARA
                        </Td>
                        <Td>B.Sc (ED) Mathematics
                            M.Sc Mathematical Modeling

                        </Td>
                        <Td>Lecturer II

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>9</Td>
                        <Td>IDOWU IFEDOTUN ROSELINE</Td>
                        <Td>B.Tech, (Computer Engineering)
                            M.Sc (Computer Science)
                            MNCS (2018)

                        </Td>
                        <Td>Lecturer III

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>10</Td>
                        <Td>MR. ONIME FRANKLIN</Td>
                        <Td>B.Eng (Electrical and Electronics Engineering),
                            M.Eng


                        </Td>
                        <Td>Lecturer III

                        </Td>
                    </Tr>

                </Tbody>
            </Table>
            <Heading textAlign={'center'} size={'md'} as="h3" >
                LIST OF TECHNOLOGIST
            </Heading>
            <Table variant='simple' my={"4"}>
                <Thead>
                    <Tr>
                        <Th>S/N</Th>
                        <Th>NAME</Th>
                        <Th>QUALIFICATION & DATE</Th>
                        <Th>RANK</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>ALABI FALILAT ADESOLA</Td>
                        <Td>National Diploma, Higher National Diploma (Computer Science)
                        </Td>
                        <Td>Principal Computer Technologist

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>2</Td>
                        <Td>ESUOLA FATAI B.
                        </Td>
                        <Td>National Diploma, Higher National Diploma (Computer Science)

                        </Td>
                        <Td>Principal Computer Technologist

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>3</Td>
                        <Td>OLUWASEGUN ZAINAB PONLE</Td>
                        <Td>National Diploma, Higher National Diploma (Computer Science)


                        </Td>
                        <Td>Principal Computer Technologist

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>4</Td>
                        <Td>AGUDA OLANIYI OLABISI</Td>
                        <Td>Msc. Computer Science
                            B.Sc. Computer Science Higher National Diploma (Electrical Electronics Engineering)


                        </Td>
                        <Td>Senior Electrical Technologist

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>5</Td>
                        <Td>GBADEBO OLUWATOSIN A.</Td>
                        <Td>National Diploma Higher National Diploma (Computer Science)


                        </Td>
                        <Td>Senior Technical Officer

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>6</Td>
                        <Td>DADA  TIMOTHY </Td>
                        <Td>B Eng. Electrical Computer Engineering
                            Higher National Diploma
                            (Electrical Electronics Engineering)


                        </Td>
                        <Td>Senior Electrical Technologist

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>7</Td>
                        <Td>AKINTOLA OLUFEMI SEUN</Td>
                        <Td>
                            Bsc in Mathematics
                            Higher National Diploma
                            (Computer Engineering)

                        </Td>
                        <Td>Computer Technologist

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>8</Td>
                        <Td>ABDULKAREEM AFUSAT B.
                        </Td>
                        <Td>Higher National Diploma,
                            National Diploma (computer science)


                        </Td>
                        <Td>Computer Technologist

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>9</Td>
                        <Td>IDOWU IFEDOTUN ROSELINE</Td>
                        <Td>B.Tech, (Computer Engineering)
                            M.Sc (Computer Science)
                            MNCS (2018)

                        </Td>
                        <Td>Lecturer III

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>10</Td>
                        <Td>MR. ONIME FRANKLIN</Td>
                        <Td>B.Eng (Electrical and Electronics Engineering),
                            M.Eng


                        </Td>
                        <Td>Lecturer III

                        </Td>
                    </Tr>

                </Tbody>
            </Table>
            <Heading textAlign={'center'} size={'md'} as="h3" >
                LIST OF ADMINISTRATIVE STAFF IN COMPUTER SCIENCE TECHNOLOGY DEPARTMENT
            </Heading>
            <Table variant='simple' my={"4"}>
                <Thead>
                    <Tr>
                        <Th>S/N</Th>
                        <Th>NAME</Th>
                        <Th>QUALIFICATION & DATE</Th>
                        <Th>RANK</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>OYENIYI OLUFUNMILAYO EMILY</Td>
                        <Td>B.Sc (Office Technology and Management)
                            General Grading Test Typewriting (60WPM),
                            ND in Secretariat Studies
                            General Grading Test Typewriting 50WPM),
                            General Grading Test Typewriting (35WPM)

                        </Td>
                        <Td>Assistant Registrar

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>2</Td>
                        <Td>OLUJINMI OLUSHOLA MOSES
                        </Td>
                        <Td>HND Business Administration ND Business Studies

                        </Td>
                        <Td>Senior Executive Officer

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>3</Td>
                        <Td>NNABUGWU RHODA T</Td>
                        <Td>HND: Business Administration and Management


                        </Td>
                        <Td>Administrative Officer

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>4</Td>
                        <Td>OPALEYE TOYIN E</Td>
                        <Td>National Diploma in Secretarial Studies
                            Senior Secondary School Certificate



                        </Td>
                        <Td>Confidential Secretary III

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>5</Td>
                        <Td>OPALEYE TOYIN E.</Td>
                        <Td>National Diploma in Secretarial Studies
                            Senior Secondary School Certificate



                        </Td>
                        <Td>Confidential Secretary III

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>6</Td>
                        <Td>BOLARINWA BISI ABOSEDE</Td>
                        <Td>Primary Sch. Cert,
                            WAEC (NOV/DEC)
                            Sch. Cert.
                            Grade II Cert.
                            Computer Operation & Application



                        </Td>
                        <Td>Assistant Chief Agric Field Overseer

                        </Td>
                    </Tr>
                    <Tr>
                        <Td>7</Td>
                        <Td>ADEBAYO OLUMIDE BAMIDELE</Td>
                        <Td>
                            National Diploma in Accounting
                        </Td>
                        <Td>

                        </Td>
                    </Tr>

                </Tbody>
            </Table>
        </PageWrapper>
    );
}

export default ListOfLecturers;