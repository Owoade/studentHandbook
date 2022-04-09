import { Box, Input,Text } from "@chakra-ui/react";
import {useState} from "react";
import { useSearch } from "../hooks/search";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const [str,setString] = useState("");
    const [result,setResult] = useState(null)
    const getResult= useSearch
    const navigate = useNavigate()
    const search = (e)=>{
      setString(e.target.value);
      const res = getResult(e.target.value)
      console.log(result)
      setResult(res.length  > 0 ? res : null)
    }
    return ( 
        <Box width="100%">
           <Input placeholder='Search....' value={str} onChange={(e)=> search(e)} display={"block"} width="80%" margin="1em auto"/>
           {result && <Box width="80%" bgColor="whitesmoke" padding="1em" margin="1em auto">
                 {
                     result.map(res => (<Box  marginBottom="1em" cursor={"pointer"} onClick={()=> navigate(res.link)}>
                       <h3 style={{color:"blue",textDecoration:"underline"}}>{res.resource}</h3>
                       <Text fontSize="12px" color="grey">{res.key}</Text>
                     </Box>))
                 }
           </Box>}
        </Box>
     );
}
 
export default SearchPage;