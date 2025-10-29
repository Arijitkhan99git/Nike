import { dontMiss } from "@/assets"

function Dontmiss() {
  return (
     <div className="w-full container mx-auto px-4 md:px-2 xl:px-10 py-8 md:py-10">
            <h1 className="font-medium text-2xl">Don't Miss</h1>
            <div className="w-full mt-5 mb-6 md:mb-10">   
                <img src={dontMiss} alt="Don't Miss" className="w-full"/>
            </div>
            
            <div className="flex flex-col justify-center items-start md:items-center gap-5 md:gap-6">
                <h1 className="text-4xl md:text-5xl font-medium">FLIGHT ESSENTIALS</h1>
                <p>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
    
                <div className="bg-black text-white px-4 py-2 my-2 rounded-full hover:cursor-pointer">
                    <button className="hover:cursor-pointer">Shop</button>
                </div>
            </div>
        </div>
  )
}

export default Dontmiss