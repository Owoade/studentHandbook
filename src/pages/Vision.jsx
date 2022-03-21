import PageWrapper from "../components/PageWrapper";
import Vision from "../components/Home/Vision";
import BottomNavigation from "../components/shared/BottomNavigation";
const VisionPage = () => {
    return ( 
        <PageWrapper>
            <Vision />
            <BottomNavigation  navigation={{next:"/mission",prev:"/anthem"}} />
        </PageWrapper>
     );
}
 
export default VisionPage;