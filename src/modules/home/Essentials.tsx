import { essentials1, essentials2, essentials3 } from "@/assets/index"

function Essentials() {
    const data=[
        {
            section:"Men's",
            image: essentials1
        },
        {
            section:"Women's",
            image: essentials2
        },
        {
            section:"Kids'",
            image: essentials3
        },
    ]
  return (
    <div className='w-full container mx-auto px-4 md:px-2 xl:px-10 py-8 md:py-10'>
        <div>
        <h1 className="font-medium text-2xl">The Essentials</h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5 ">
                {
                    data.map(d=>(
                        <div className="relative w-full flex justify-center hover:cursor-pointer">
                            <img src={d.image} alt={d.section} />
                            <span className="bg-white absolute left-[3rem] bottom-[3rem] px-5 py-2 rounded-full font-semibold">{d.section}</span>
                        </div>
                    ))
                }
        </div>
       </div>
    </div>
  )
}

export default Essentials