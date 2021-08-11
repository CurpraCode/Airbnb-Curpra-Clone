import {places} from "../data"
function Explore (){
    return(
    <div className="max-w-7xl mx-auto px-8 sm:px-10">
        <h1 className="text-4xl font-semibold pb-5">Explore Nearby</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {places.map((item, index)=>(
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out" key={index}>
                    <div className="relative h-16 w-16">
                        <img src={`/images/explore/${index + 1}.jpg`} layout="fill" className="rounded-lg" alt={item.name} />
                    </div>
                    <span>
                        <h3>{item.name}</h3>
                        <p className="text-gray-500">{item.time}-hour drive</p>
                    </span>
                </div>
            ))
                }
        </div>
    </div>
    )
}

export default Explore