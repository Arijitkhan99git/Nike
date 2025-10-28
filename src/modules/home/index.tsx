import AirMax from "./AirMax";
import Hero from "./Hero";


function HomeModule() {
  return (
    <div className="h-full min-h-screen bg-white w-full space-y-5">
       <Hero/>
       <AirMax/>
    </div>
   
  );
}

export default HomeModule;
