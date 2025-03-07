
import OurWorkHeroSection from '../components/OurWork/OurWorkHeroSection.jsx';
import OurPrograms from '../components/OurWork/OurPrograms.jsx';
import ComprehensiveSupport from '../components/OurWork/ComprehensiveSupport.jsx'
import ConsultancyServices from '../components/OurWork/ConsultancyServices.jsx'
function OurWorkMain() {
  return (
    <div className='flex flex-col gap-10 m-4 sm:m-4 md:m-8 lg:m-8'>
         <OurWorkHeroSection/>
         <OurPrograms/>
    </div>
  )
}
export default OurWorkMain;