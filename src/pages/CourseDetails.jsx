import PageWrapper from "../components/PageWrapper"
import { Heading, UnorderedList } from "@chakra-ui/react";
import { CourseDetailsData as data } from "../utils/CourseDetailsData";
import RenderCourseMarkup from "../components/shared/RenderCourseMarkup"
import Header from "../components/Header";
const CourseDetails = () => {
    console.log(data)
    return ( 
        <PageWrapper>
            
           {
               data.map(each=> <RenderCourseMarkup courseData={each} />)
              
               
           }
        </PageWrapper>
     );
}
 
export default CourseDetails;