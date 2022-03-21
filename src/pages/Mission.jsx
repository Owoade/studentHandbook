import PageWrapper from "../components/PageWrapper";
import Mission from "../components/Home/Mission";
import BottomNavigation from "../components/shared/BottomNavigation";
const MissionPage = () => {
    return ( 
        <PageWrapper>
            <Mission />
           <BottomNavigation navigation={{next:"/principal-officers",prev:"/vision"}} />
        </PageWrapper>
     );
}
 
export default MissionPage;