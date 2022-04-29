import { administrative } from "../utils/administrativeData"
import { NdCourses, HndCourses } from "../utils/CourseData";
import { CourseDetailsData } from "../utils/CourseDetailsData";
import { lecturer } from "../utils/lecturerData";
import { SynopisHnd, SynopisNd } from "../utils/SynopisData";
import { technology } from "../utils/technologyData";

export const useSearch = (str) => {
    const result = []
    const administrators = administrative[0].rows.map(function (each) { return { name: each.Name, rank: each.Rank } });

    const NdCoursesData = NdCourses.map(function (each) { return { titles: each.data.rows.map(row => row["Course Title"]), codes: each.data.rows.map(row => row["Course Code"]) } })

    const HndCoursesData = HndCourses.map(function (each) { return { titles: each.data.rows.map(row => row["Course Title"]), codes: each.data.rows.map(row => row["Course Code"]) } })

    const CourseDetails = CourseDetailsData.map(
        function (each) {
            if (typeof each.data == "object") {
                return { heading: each.dataHeading, subHeadings: each.data.map(data => data.subHeading) }
            } else {
                return { heading: each.dataHeading }
            }
        }
    )

    const lecturers = lecturer[0].rows.map(function (each) { return { name: each.Name, rank: each.Rank } });

    const technologists = technology[0].rows.map(function (each) { return { name: each.Name, rank: each.Rank } });


    //    Search through each resource
    if (str.length >= 5) {
        administrators.forEach(function (each) {
            if (each.name.toLowerCase().includes(str.toLowerCase())) result.push({ resource: each.name, string: str, link: `/staff?search_key=staff_rank&&resource=${each.name}&&str=${str}`, key: "Staff's name" })
            if (each.rank.toLowerCase().includes(str.toLowerCase())) result.push({ resource: each.name, string: str, link: `/staff?search_key=staff_rank&&resource=${each.rank}&&str=${str}`, key: "Staff's rank" })
        })

        NdCoursesData.forEach(function (each) {
            if (each.titles.includes(str.toUpperCase())) {
                result.push({ resource: each.titles[each.titles.indexOf(str.toUpperCase())], string: str, key: "Course title", link: `/course?search_key=course_codes&&resource=${each.titles[each.titles.indexOf(str.toUpperCase())]}&&str=${str}` })
            }
            if (each.codes.includes(str.toUpperCase())) {
                result.push({ resource: each.codes[each.codes.indexOf(str.toUpperCase())], string: str, key: "Course code", link: `/course?search_key=course_codes&&resource=${each.titles[each.titles.indexOf(str.toUpperCase())]}&&str=${str}` })
            }
        })
        HndCoursesData.forEach(function (each) {
            if (each.titles.includes(str.toUpperCase())) {
                result.push({ resource: each.titles[each.titles.indexOf(str.toUpperCase())], string: str, key: "course title", link: `/course?search_key=course_codes&&resource=${each.titles[each.titles.indexOf(str.toUpperCase())]}&&str=${str}` })
            }
            if (each.codes.includes(str.toUpperCase())) {
                result.push({ resource: each.titles[each.titles.indexOf(str.toUpperCase())], string: str, key: "course title", link: `/course?search_key=course_codes&&resource=${each.titles[each.titles.indexOf(str.toUpperCase())]}&&str=${str}` })
            }
        })
        CourseDetails.forEach(function (each) {
            if (each.heading.includes(str.toUpperCase())) {
                result.push({ resource: each.heading, string: str, key: "Course details heading", link: `/course-details?search_key=heading&&resource=${each.heading}&&str=${str}` })
            }
        })

        lecturers.forEach(function (each) {
            if (each.name.toLowerCase().includes(str.toLowerCase())) result.push({ resource: each.name, string: str, link: `/staff?search_key=staff_rank&&resource=${each.name}&&str=${str}`, key: "Staff's name" })
            if (each.rank.toLowerCase().includes(str.toLowerCase())) result.push({ resource: each.rank, string: str, link: `/staff?search_key=staff_rank&&resource=${each.rank}&&str=${str}`, key: "Staff's rank" })
        })
        if("LIST OF LECTURERS".includes( str.toUpperCase())) result.push({resource:"LIST OF LECTURERS",link:"/staff?resource=LIST OF LECTURERS",key:"List of lecturers"})
        technologists.forEach(function (each) {
            if (each.name.toLowerCase().includes(str.toLowerCase())) result.push({ resource: each.name, string: str, link: `/staff?search_key=staff_rank&&resource=${each.name}&&str=${str}`, key: "Staff's name" })
            if (each.rank.toLowerCase().includes(str.toLowerCase())) result.push({ resource: each.rank, string: str, link: `/staff?search_key=staff_rank&&resource=${each.rank}&&str=${str}`, key: "Staff's Rank" })
        })
        if("LIST OF TECHNOLOGIST".includes( str.toUpperCase())) result.push({resource:"LIST OF TECHNOLOGISTS",link:"/staff?resource=LIST OF TECHNOLOGISTS",key:"List of Technologists"})

        SynopisNd.forEach(function (each) {
            if (each.course.toLowerCase().includes(str.toLowerCase())) result.push({ resource: each.course, string: str, link: `/synopis-Nd?search_key=course_title&&resource=${each.course}&&str=${str}`, key: "course-name" })
            if (each.description.toLowerCase().includes(str.toLowerCase())) result.push({ resource: each.description, string: str, link: `/synopis-Nd?search_key=course-desc&&resource=${each.description}&&str=${str}`, key: "Course Description" })
        })
        SynopisHnd.forEach(function (each) {
            if (each.course.toLowerCase().includes(str.toLowerCase())) result.push({ resource: each.course, string: str, link: `/synopis-Hnd?search_key=course_title&&resource=${each.course}&&str=${str}`, key: "Course name" })
            if (each.description.toLowerCase().includes(str.toLowerCase())) result.push({ resource: each.description, string: str, link: `/synopis-Hnd?search_key=course-desc&&resource=${each.description}&&str=${str}`, key: "course-desc" })
        })
    }


    return result

}