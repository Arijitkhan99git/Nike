import { featured } from "@/assets/index"

function Featured() {
  return (
    <div className="w-full container mx-auto px-4 md:px-2 xl:px-10 py-8 md:py-10">
        <h1 className="font-medium text-2xl">Featured</h1>
        <div className="w-full mt-5 mb-6 md:mb-10">   
            <img src={featured} alt="featured" className="w-full"/>
        </div>
        
        <div className="flex flex-col justify-center items-start md:items-center gap-5 md:gap-7">
            <h1 className="text-4xl md:text-5xl font-medium">STEP INTO WHAT FEELS GOOD</h1>
            <p >Cause everyone should know the feeling of running in that perfect pair.</p>

            <div className="bg-black text-white px-4 py-2 my-2 rounded-full">
                <button>Find Your Shoe</button>
            </div>
        </div>
    </div>
  )
}

export default Featured