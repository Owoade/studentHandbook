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
const ListOfCourses = () => {
    return ( 
        <PageWrapper>
            <Heading textAlign={'center'} size={'md'} as="h3" my={"3"}>
              NATIONAL DIPLOMA COMPUTER SCIENCE
            </Heading>
            <Heading textAlign={'center'} size={'md'} as="h3" my={"3"}>
                1ST SEMESTER YEAR 1
            </Heading>
            <Table>
                <Thead>
                    <Tr>
                        <Td fontWeight={"extrabold"} width="5%">S/N</Td>
                        <Td fontWeight={"extrabold"} width="20%">COURSE CODE</Td>
                        <Td fontWeight={"extrabold"} width="60%">COURSE TITLE</Td>
                        <Td fontWeight={"extrabold"} width="5%">L</Td>
                        <Td fontWeight={"extrabold"} width="5%">CU</Td>
                        <Td fontWeight={"extrabold"} width="5%">CH</Td>
                    </Tr>
                    
                </Thead>

                <Tbody>
                <Tr>
                        <Td width="5%">1</Td>
                        <Td width="15%">COM111 </Td>
                        <Td width="60%">Introduction to computing </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">3</Td>
                        <Td width="5%">4</Td>
                    </Tr>
                <Tr>
                        <Td width="5%">2</Td>
                        <Td width="15%">COM112 </Td>
                        <Td width="60%">Introduction to Digital Electronics  </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">3</Td>
                        <Td width="5%">4</Td>
                </Tr>
                <Tr>
                        <Td width="5%">3</Td>
                        <Td width="15%">COM113 </Td>
                        <Td width="60%">Introduction to Programming</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">4</Td>
                        <Td width="5%">4</Td>
                </Tr>
                <Tr>
                        <Td width="5%">4</Td>
                        <Td width="15%">COM114 </Td>
                        <Td width="60%">Statistics for Computing 1 </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">0</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                </Tr>
                <Tr>
                        <Td width="5%">5</Td>
                        <Td width="15%">COM115 </Td>
                        <Td width="60%">Computer application packages I  </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">3</Td>
                        <Td width="5%">4</Td>
                </Tr>
                <Tr>
                        <Td width="5%">6</Td>
                        <Td width="15%">MTH111 </Td>
                        <Td width="60%">Logic and Linear Algebra   </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">0</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                </Tr>
                <Tr>
                        <Td width="5%">7</Td>
                        <Td width="15%">GNS101 </Td>
                        <Td width="60%">Use of English I    </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">0</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                </Tr>
                <Tr>
                        <Td width="5%">7</Td>
                        <Td width="15%">GNS127</Td>
                        <Td width="60%">Citizenship Education I    </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">4</Td>
                        <Td width="5%">4</Td>
                </Tr>
                <Tr>
                        <Td width="5%">8</Td>
                        <Td width="15%">BPH121</Td>
                        <Td width="60%">Optics, waves, Electricity and Magnetism    </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                </Tr>
                <Tr>
                        <Td width="5%">9</Td>
                        <Td width="15%">EEP 127</Td>
                        <Td width="60%">Skill Acquisition    </Td>
                        <Td width="5%"></Td>
                        <Td width="5%">3</Td>
                        <Td width="5%">1</Td>
                        <Td width="5%">3</Td>
                </Tr>
                </Tbody>
            </Table>
            <Heading textAlign={'center'} size={'md'} as="h3" my={"3"}>
                1ST SEMESTER YEAR 2
            </Heading>
            <Table>
                <Thead>
                    <Tr>
                        <Td fontWeight={"extrabold"} width="5%">S/N</Td>
                        <Td fontWeight={"extrabold"} width="20%">COURSE CODE</Td>
                        <Td fontWeight={"extrabold"} width="60%">COURSE TITLE</Td>
                        <Td fontWeight={"extrabold"} width="5%">L</Td>
                        <Td fontWeight={"extrabold"} width="5%">CU</Td>
                        <Td fontWeight={"extrabold"} width="5%">CH</Td>
                    </Tr>
                    
                </Thead>

                <Tbody>
                <Tr>
                        <Td width="5%">1</Td>
                        <Td width="15%">COM121 </Td>
                        <Td width="60%">Introduction to computing </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">3</Td>
                        <Td width="5%">4</Td>
                    </Tr>
                <Tr>
                        <Td width="5%">2</Td>
                        <Td width="15%">COM122 </Td>
                        <Td width="60%">ntroduction to Internet  </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">3</Td>
                        <Td width="5%">4</Td>
                </Tr>
                <Tr>
                        <Td width="5%">3</Td>
                        <Td width="15%">COM123 </Td>
                        <Td width="60%">Programming Language using Java I </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">4</Td>
                        <Td width="5%">4</Td>
                </Tr>
                <Tr>
                        <Td width="5%">4</Td>
                        <Td width="15%">COM124 </Td>
                        <Td width="60%">Statistics for Computing 1 </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">0</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                </Tr>
                <Tr>
                        <Td width="5%">5</Td>
                        <Td width="15%">COM125 </Td>
                        <Td width="60%">Introduction to Systems Analysis and Design   </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">3</Td>
                        <Td width="5%">4</Td>
                </Tr>
                <Tr>
                        <Td width="5%">6</Td>
                        <Td width="15%">COM126 </Td>
                        <Td width="60%">PC Upgrade & Maintenance    </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">0</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                </Tr>
                <Tr>
                        <Td width="5%">7</Td>
                        <Td width="15%">GNS128 </Td>
                        <Td width="60%">Citizenship Education II    </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">0</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                </Tr>
                <Tr>
                        <Td width="5%">8</Td>
                        <Td width="15%">GNS102</Td>
                        <Td width="60%">Communication in English     </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">4</Td>
                        <Td width="5%">4</Td>
                </Tr>
                <Tr>
                        <Td width="5%">9</Td>
                        <Td width="15%">EED126</Td>
                        <Td width="60%">Practice of Entrepreneurship     </Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                        <Td width="5%">2</Td>
                </Tr>
                <Tr>
                        <Td width="5%">9</Td>
                        <Td width="15%">GNS 228</Td>
                        <Td width="60%">Research Methods     </Td>
                        <Td width="5%"></Td>
                        <Td width="5%">3</Td>
                        <Td width="5%">1</Td>
                        <Td width="5%">3</Td>
                </Tr>
                <Tr>
                        <Td width="5%">10</Td>
                        <Td width="15%">MTH 121</Td>
                        <Td width="60%">Calculus I      </Td>
                        <Td width="5%"></Td>
                        <Td width="5%">3</Td>
                        <Td width="5%">1</Td>
                        <Td width="5%">3</Td>
                </Tr>
                </Tbody>
            </Table>
        </PageWrapper>
     );
}
 
export default ListOfCourses;