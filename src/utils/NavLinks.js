import { FaHome, FaChalkboardTeacher } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';
import { AiFillInfoCircle } from 'react-icons/ai';
import { TiInfoLarge } from 'react-icons/ti';

export const UrlLinks = [
  {
    name: 'Home',
    url: '/',
    icon: <FaHome />,
  },
  {
    name: 'Foreword',
    url: '/foreword'
  },
  {
    name: 'Preface',
    url: '/preface'
  },
  {
    name: 'School Anthem',
    url: '/anthem'
  },
  {
    name: 'Vision',
    url: '/vision'
  },
  {
    name: 'Mission',
    url: '/mission'
  },
  {
    name: 'Principal Officers',
    url: '/principal-officers'
  },
  {
    name: 'About us',
    url: '/about-us'
  },
 
  {
    name: 'Staffs',
    url: '/staff',
    icon:"",
  },
  {
    name: 'Courses',
    url: '/course',
    icon: <SiCoursera />,
  },
  {
    name: "Course's Synopsis (ND)",
    url: '/synopis-Nd',
    icon: <AiFillInfoCircle />,
  },
  {
    name: "Course's Synopsis (HND)",
    url: '/synopis-Hnd',
    icon: <TiInfoLarge />,
  },
  {
    name:"Course Details",
    url:"/course-details",
    icon:<i className="ri-article-line"></i>
  },{
    name:"Search",
    url:"/search",
    icon:<i className="ri-search-line"></i>
  }
];
