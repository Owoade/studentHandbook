import PageWrapper from "../components/PageWrapper";
import Anthem from "../components/Home/Anthem";
import BottomNavigation from "../components/shared/BottomNavigation"
const AnthemPage = () => {
    return ( 
        <PageWrapper>
            <Anthem />
            <BottomNavigation navigation={{next:"/vision",prev:"/preface"}} />        </PageWrapper>
     );
}
 
export default AnthemPage;