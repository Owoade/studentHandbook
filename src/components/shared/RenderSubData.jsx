import { Box,Heading,Text,ListItem,OrderedList,UnorderedList, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption } from "@chakra-ui/react";
const RenderSubData = ({data}) => {
    if(data.type== "list"){
        if(data.desc=="alphabet" ){
            return ( 
                <Box my={"2"}>
                    <Text fontWeight={"bold"}>{data.subHeading}</Text>
                    <Text>{data.breadCrumb}</Text>
                    <OrderedList>
                        {
                            data.data.map(each => <ListItem>{each.text}</ListItem>)
                        }

                    </OrderedList>
                </Box>
             )
        }else if(data.desc=="none"){
            return(
            <Box my={"2"}>
            <Text fontWeight={"bold"}>{data.subHeading}</Text>
            <Text>{data.breadCrumb}</Text>
            <UnorderedList>
                {
                    data.data.map(each => <ListItem>{each.text}</ListItem>)
                }

            </UnorderedList>
        </Box>)
        } else if(data.list.type){
            return(
                <Box my={"2"}>
                <Text fontWeight={"bold"}>{data.subHeading}</Text>
                <Text>{data.breadCrumb}</Text>
                {
                    data.data.map(ulData=> 
                        <>
                        <Text fontWeight={"bold"} my="3">{ulData.subHeading}</Text>
                         <Box >
                            {
                                ulData.data.map(olData => (<Text textDecoration={"none"}>{olData.text}</Text>))
                            }
    
                        </Box>
                        </>
                        
                        
                        )
                     

                }
                
            </Box>)
        }
        
    }else if(data.paragraph){
        return(
            <Box my={"2"}>
                     <Text fontWeight={"bold"}>{data.subHeading}</Text>
                    <Text>{data.data}</Text>
            </Box>
        )
    }
    else if(data.type=="table"){
        return(
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        {
                            data.tableHeading.map(each => (<Th>{each}</Th>))
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {
                    data.tableBody.tableRows.map(row => (<Tr>
                        {row.map(rowData => (<Td>{rowData}</Td>))}
                    </Tr>))
                    }

                </Tbody>

            </Table>
        )
    }

    return null
    
}
 
export default RenderSubData;