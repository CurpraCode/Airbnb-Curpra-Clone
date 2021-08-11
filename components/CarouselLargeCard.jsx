import {live} from "../data"
const CarouselLargeCard = ()=>{
    const data =live.items
    const dataUrl =live.urlPrefix
    return(
        <div>
            <h2 className="text-4xl font-semibold py-8">{live.title}</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                {data.map((datas, index)=>(
                    <div key={index} className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
                        <div className="relative h-80 w-80">
                            <img src={dataUrl + datas.img} className="rounded-lg" layout="fill" alt={datas.title}/>
                        </div>
                        <span>
                        <h3  className="text-2xl mt-3">{datas.title}</h3>
                    </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarouselLargeCard