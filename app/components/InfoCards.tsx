import Image from "next/image"
import { WiHumidity } from "react-icons/wi";

function InfoCards () {
    return (
        <div className="relative w-36 h-32 p-4 mt-8 flex flex-col justify-center items-center bg-white rounded-2xl">
            <div className="absolute top-[-1rem] w-8 h-8 rounded-full bg-slate-400">
                <WiHumidity className="w-full h-full" />
            </div>
            <span className="absolute top-6 text-gray-400">Humidity</span>
            <div className="mt-6">
                <span className="font-medium text-[3rem]">64</span>
                <span className="text-gray-400 font-medium">%</span>
            </div>
        </div>
    )
}

export default InfoCards