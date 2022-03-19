import { OrderedList, ListItem, Text, Box, Heading } from "@chakra-ui/react";
import RenderSubData from "../shared/RenderSubData";
// import 

const RenderCourseMarkup = ({ courseData }) => {
    if (courseData.list) {
        if (courseData.list.type == "alphabet") {
            return (
                <Box my={"5"}>
                    <Text fontWeight={"extrabold"}>
                        {courseData.dataHeading}
                    </Text>
                    <OrderedList>
                        {
                            courseData.data.map(each => <ListItem>{each.text}</ListItem>)
                        }

                    </OrderedList>
                </Box>

            )
        } else if (courseData.list.type == "multiple-components") {
            {
                return(
               <Box my={"5"}>
                    <Text fontWeight={"extrabold"}>
                        {courseData.dataHeading}
                    </Text>
                    {
                        courseData.data.map(each => <RenderSubData data={each} />)
                    }
                </Box>)
            }
        }
    } else if (courseData.paragraph) {
        return (
            <Box my={"5"}>
                <Text fontWeight={"extrabold"}>
                    {courseData.dataHeading}
                </Text>

                <Text>{courseData.data}</Text>
            </Box>
        )
    }

    return null

}

export default RenderCourseMarkup;