import { WiHumidity } from "react-icons/wi";

interface CardsProps {
    title: string;
    number: number;
    measurement: string;
}

function InfoCards (props: CardsProps) {
    return (
        <div className="relative w-36 h-32 p-4 mt-8 flex flex-col justify-center items-center bg-white rounded-2xl">
            {/* <div className="absolute top-[-1rem] w-8 h-8 rounded-full bg-slate-400">
                <WiHumidity className="w-full h-full" />
            </div> */}
            <span className="absolute top-6 text-gray-400">{props.title}</span>
            <div className="mt-6">
                <span className="font-medium text-[3rem]">{props.number}</span>
                <span className="text-gray-400 text-sm">{props.measurement}</span>
            </div>
        </div>
    )
}

export default InfoCards