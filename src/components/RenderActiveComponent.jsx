import HodSpeech from "../pages/HodSpeech"
import * as route from "../utils/routes"
import Home from "../pages/Home";
import Preface from "../pages/Preface";
import CollegeAnthem from "../pages/CollegeAnthem";
import PrincipalOfficers from "../pages/PrincipalOfficers";
import VisionMissionAbout from "../pages/VisionMissionAbout";
import ListOfLecturers from "../pages/ListOfLecturers";
import ListOfCourses from "../pages/ListOfCouses";
import { BreadcrumbLink } from "@chakra-ui/react";

const RenderActiveComponent = ({active}) => {
    switch(active){
        case route.WELCOME_PAGE:
          return (<Home />)
        break
        case route.HOD_SPEECH:
        return (<HodSpeech />)
        break
        case route.PREFACE:
        return(<Preface />)
        break
        case route.COLLEGE_ANTHEM:
         return(<CollegeAnthem />)
         break
        case route.PRINCIPAL_OFFICERS:
           return(<PrincipalOfficers />) 
        break
        case route.ABOUT_VISION_MISSION:
            return(<VisionMissionAbout />)   
        break    
        case route.LIST_OF_LECTURERS:
            return(<ListOfLecturers />)   
        break 
        case route.TABLE_COURSES:
            return(<ListOfCourses />)   
        break
            
        default :
        return (<Home />)
    }
   
}
 
export default RenderActiveComponent;