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
            section:"Kids's",
            image: essentials3
        },
    ]
  return (
    <div className='w-full container mx-auto px-4 md:px-2 xl:px-10 py-8 md:py-10'>
        <div>
        <h1 className="font-medium text-2xl">Featured</h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
                {
                    data.map(d=>(
                        <div>
                            <img src={d.image} alt={d.section} />
                        </div>
                    ))
                }
        </div>
       </div>
    </div>
  )
}

export default Essentials