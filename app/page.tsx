import Searchbar from "./components/Searchbar"
import Image from "next/image"
import { IoSunnyOutline } from "react-icons/io5";


export default function Home() {
	return (
		<section className="relative w-5/6 h-5/6 bg-[#f3f3f3] rounded-3xl">
			<div className="absolute h-full w-72 flex flex-col items-center bg-white rounded-s-3xl py-8">
				<Searchbar />
				<div className="mt-4 flex flex-col justify-center items-center">
					<Image
						src="/../images/clear.png"
						width={200}
						height={200}
						alt="clear weather"
						className=""
					/>
					<span className="weather-number">
						24º
					</span>
				</div>
				<div>
					<span className="font-light">Montevideo,	</span>
					<span className="font-light text-gray-500">Uruguay</span>
				</div>

				
				<div className="w-5/6 flex flex-col mt-8 p-4 bg-gray-200 rounded-xl">
					<span className="font-light">Max: 25º</span>
					<span className="font-light">Min: 16º</span>
					<span className="font-light">Feels like: 25º</span>
				</div>
			</div>

		</section>
	)
}
