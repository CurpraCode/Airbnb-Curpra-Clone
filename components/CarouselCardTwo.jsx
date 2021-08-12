import {discover} from "../data"
const CarouselCardTwo = ()=>{
    const data =discover.items
    const dataUrl =discover.urlPrefix
    return(
        <div className="max-w-7xl mx-auto px-8 sm:px-10">
            <h2 className="text-4xl font-semibold py-8">{discover.title}</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                {data.map((datas, index)=>(
                    <div key={index} className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
                        <div className="relative h-80 w-80">
                            <img src={dataUrl + datas.img} className="rounded-lg" layout="fill" alt={datas.title}/>
                        </div>
                        <span>
                        <h3  className="text-2xl mt-3">{datas.title}</h3>
                        {datas.p && <p>{datas.p}</p>}
                    </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarouselCardTwo