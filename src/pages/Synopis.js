import SynopisSection from '../components/shared/SynopisSection';
import { SynopisNd } from '../utils/SynopisData';
import BottomNavigation from '../components/shared/BottomNavigation';

const Synopis = () => {
  return (
    <>
     <SynopisSection
      title="SYNOPSIS OF COURSES IN THE  NATIONAL DIPLOMA (ND) COMPUTER SCIENCE TECHNOLOGY DEPARTMENT"
      data={SynopisNd}
      level={"nd"}
    />
   
    </>
   
  );
};

export default Synopis;
