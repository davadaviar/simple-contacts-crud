import { IoSearch } from "react-icons/io5";

export default function Search() {
    return (
        <div className="relative flex flex-1">
            <input 
                type="text" 
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Search..."
            />
            <IoSearch className="absolute top-3 left-4 text-gray-400" />
        </div>
    );
}