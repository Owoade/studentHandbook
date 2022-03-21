import PageWrapper from "../components/PageWrapper";
import AboutUs from "../components/Home/AboutUs";
import BottomNavigation from "../components/shared/BottomNavigation";
const AboutUsPage = () => {
    return ( 
        <PageWrapper>
            <AboutUs />
            <BottomNavigation navigation={{next:"/courses",prev:"/principal-officers"}} />
        </PageWrapper>
     );
}
 
export default AboutUsPage;