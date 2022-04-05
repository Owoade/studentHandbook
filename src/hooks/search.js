import {administrative} from "../utils/administrativeData"
import {NdCourses,HndCourses} from "../utils/CourseData";
import { CourseDetailsData } from "../utils/CourseDetailsData";
import { lecturer } from "../utils/lecturerData";
import { SynopisHnd,synopsisNd } from "../utils/SynopisData";
import { technology } from "../utils/technologyData";
export const useSearch = (string)=>{
    const result = []
    const administrators=administrative[0].rows.map(function(each){ return {name:each.Name,rank:each.Rank}});

    const NdCoursesData = NdCourses.map(function(each) {return  {titles: each.data.rows.map(row => row["Course Title"]),codes:each.data.rows.map(row => row["Course Code"])}})
    
    const HndCoursesData = HndCourses.map(function(each) {return  {titles: each.data.rows.map(row => row["Course Title"]),codes:each.data.rows.map(row => row["Course Code"])}})

    const CourseDetails= CourseDetailsData.map(
        function(each){
            if( typeof each.data == "object"){
                return {heading: each.dataHeading,subHeadings:each.data.map(data => data. subHeading)}
            }else{
                return {heading:each.dataHeading}
            }
        }
    ) 

    const lecturers = lecturer[0].rows.map(function(each){ return {name:each.Name,rank:each.Rank}});
    
    const technologists = technology[0].rows.map(function(each){ return {name:each.Name,rank:each.Rank}});


//    Search through each resource
      const AdminResult = administrators.filter(each => each.name.toLowerCase().includes(string.toLowerCase()) || each.rank.toLowerCase().includes(string.toLowerCase()))

    console.log(administrators)
    console.log(CourseDetails)
    console.log(HndCoursesData)
    console.log(NdCoursesData)
    console.log(lecturers)
    console.log(technologists)
    console.log(technology)

}