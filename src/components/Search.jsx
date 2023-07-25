import { memo } from "react";
const Search = () => {
    return (
        <div className="flex items-center">
            <div className="w-full px-12 align-center justify-end">
                <div className="relative flex ml-auto px-2 bg-transparent text-white w-[250px] rounded px-4 py-2 z-2">
                    <input id="search" type="text" className="outline-none bg-transparent flex-1 text-white font-bold opacity-100 tracking-wide" />
                    <label htmlFor="search" className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-6 h-6 font-black opacity-100 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </label>
                    <div className="absolute opacity-30 h-full left-0 top-0 bg-gray-300 w-[250px] rounded px-4 py-2 rounded px-4 py-2 pointer-events-none"></div>
                </div>
            </div>
        </div>
    )
}

export default memo(Search)