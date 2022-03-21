import PageWrapper from "../components/PageWrapper";
import PrincipalOfficers from "../components/Home/PrincipalOfficers";
import BottomNavigation from "../components/shared/BottomNavigation";
const PrincipalOfficersPage = () => {
    return ( <PageWrapper>
        <PrincipalOfficers />
        <BottomNavigation navigation={{next:"/about-us",prev:"/mission"}} />
    </PageWrapper> );
}
 
export default PrincipalOfficersPage;