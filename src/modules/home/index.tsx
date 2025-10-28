import AirMax from "./AirMax";
import Featured from "./Featured";
import Hero from "./Hero";


function HomeModule() {
  return (
    <div className="h-full min-h-screen bg-white w-full space-y-5 text-black">
       <Hero/>
       <AirMax/>
       <Featured/>
    </div>
   
  );
}

export default HomeModule;
