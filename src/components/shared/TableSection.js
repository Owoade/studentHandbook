import { Heading, VStack } from '@chakra-ui/react';
import TableData from './Table';
import queryString from "query-string"
const TableSection = ({ tableName, data, ...rest }) => {
  const url = queryString.parse(window.location.search)
  return (
    <VStack {...rest} overflow="hidden" w="full" as="section">
      {tableName && <Heading backgroundColor={tableName == url.resource ? "yellow" : "" } size="sm">{tableName}</Heading>}
      <VStack mb={8} alignItems={'flex-start'} w="full" overflowX="auto">
        <TableData data={data} />
      </VStack>
    </VStack>
  );
};

export default TableSection;
