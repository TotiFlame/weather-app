import { FiSearch } from "react-icons/fi";

function Searchbar () {
    return (
        <div className="flex items-center border-[1px] border-[#c2c2c2] rounded-xl">
            <FiSearch className="mx-2" />
            <input
                type="text"
                placeholder="Search places..."
                className="flex-1 py-2 pl-2 pr-8 text-sm text-black rounded-xl placeholder:text-[#c2c2c2] focus:outline-none"
            />
        </div>
    )
}

export default Searchbar