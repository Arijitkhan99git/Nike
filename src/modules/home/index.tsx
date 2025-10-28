import AirMax from "./AirMax";
import Featured from "./Featured";
import GearUp from "./GearUp";
import Hero from "./Hero";


function HomeModule() {
  return (
    <div className="h-full min-h-screen bg-white w-full space-y-5 text-black">
       <Hero/>
       <AirMax/>
       <Featured/>
       <GearUp/>
    </div>
   
  );
}

export default HomeModule;
