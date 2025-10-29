function SelectedSection() {    
    const sectionData = [
       {
         sectionName: "Icons",
         sectionList : ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"]
       },
       {
         sectionName: "Shoes",
         sectionList : ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"]
       },
       {
         sectionName: "Clothing",
         sectionList : ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"]
       },
       {
         sectionName: "Kids'",
         sectionList : ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"]
       },
    ]


  return (
    <div className='w-full container mx-auto px-4 md:px-2 xl:px-10 py-8 md:py-10 '>
        <div className="w-full mx-auto flex justify-center items-center pb-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-15">
                {
                    sectionData.map(data=>(
                         <div >
                            <h1 className="font-semibold mb-5">{data.sectionName}</h1>
                            <div className="flex flex-col gap-3">
                                {
                                    data.sectionList.map(d=>(
                                        <span className="font-semibold text-[#757575] hover:cursor-pointer">{d}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                   
                }
            </div>
        </div>
    </div>
  )
}

export default SelectedSection