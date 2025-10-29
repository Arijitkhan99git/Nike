import AirMax from "./AirMax";
import Dontmiss from "./Dontmiss";
import Essentials from "./Essentials";
import Featured from "./Featured";
import GearUp from "./GearUp";
import Hero from "./Hero";
import SelectedSection from "./SelectedSection";


function HomeModule() {
  return (
    <div className="h-full min-h-screen bg-white w-full space-y-5 text-black">
       <Hero/>
       <AirMax/>
       <Featured/>
       <GearUp/>
       <Dontmiss/>
       <Essentials/>
       <SelectedSection/>
    </div>
   
  );
}

export default HomeModule;
