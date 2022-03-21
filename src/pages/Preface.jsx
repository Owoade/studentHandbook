import PageWrapper from "../components/PageWrapper"
import Preface from "../components/Home/Foreword";
import BottomNavigation from "../components/shared/BottomNavigation";
const PrefacePage = () => {
    return ( <PageWrapper>
        <Preface />
        <BottomNavigation navigation={{next:"/anthem",prev:"/foreword"}} />
    </PageWrapper> );
}
 
export default PrefacePage;