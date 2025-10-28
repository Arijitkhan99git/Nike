import { banner1 } from "@/assets/index";

function Hero() {
  return (
    <div className="bg-white w-full container mx-auto px-4 md:px-2 xl:px-10">             
           
              <div className="w-full ">
                <img src={banner1} alt="banner" className="object-cover w-full"/>
              </div>
    
              <div className="text-black py-8 lg:py-10 flex flex-col justify-center items-start md:items-center ">
                <h4 className="text-base font-medium mb-2">First Look</h4>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5">Nike Air Max Pulse</h1>
                
                <p className="text-sm max-w-lg">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
                <p className="text-sm max-w-lg">—designed to push you past your limits and help you go to the max.</p>
    
                <div className="flex gap-2 justify-center mt-6">
                  <div className="bg-black text-white px-6 py-2 rounded-full hover:cursor-pointer">Notify Me</div>
                  <div className="bg-black text-white px-6 py-2 rounded-full hover:cursor-pointer">Shop Air Max</div>
                </div>
              </div>

        </div>
  )
}

export default Hero