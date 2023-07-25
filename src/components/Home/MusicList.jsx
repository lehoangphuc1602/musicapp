import { useState, useEffect, useRef } from "react";
import artist6 from "../../../static/img/img_artsuggess/artist6.jpg";

const MusicList = () => {
    const [list, setList] = useState([]);
    const [openOptionIndex, setOpenOptionIndex] = useState(null);

    const lyric = {
        rank: 1,
        name_song: "Anh Yeeu EMmmmmmm",
        artist_name: "Cukak",
        img: artist6,
    };
    const optionsListRef = useRef(null);

    const handleOpenOptions = (i) => {
        setOpenOptionIndex((prevIndex) => (prevIndex === i ? null : i));
    };

    useEffect(() => {
        setList([lyric,lyric,lyric,lyric,lyric,lyric,lyric,lyric,]);
    }, []);

    const call = () => {
        console.log("call")
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            // if (optionsListRef.current && optionsListRef.current.contains(event.target)) {
            //     // Click event is inside the options list, so we don't close it
            //     return;
            // }

            const optionsElements = document.querySelectorAll(".options");
            const isClickOutside = !Array.from(optionsElements).some((element) =>
                element.contains(event.target)
            );
            if (isClickOutside) {
                setOpenOptionIndex(null);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleOptionItemClick = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up
    };


    return (
        <div className="px-4 bg-primary-bgIndex py-6">
            <ul className="list grid grid-cols-1 md:grid-cols-2">
                {list.map((item, i) => (
                    <li key={i} className="text-white group rounded py-2 mx-2 my-2 flex bg-gray-900 hover:bg-gray-800">
                        <div className="flex w-[80%]">
                            <p className="h-full flex items-center px-2">{item.rank}</p>
                            <div className="flex w-[50px] h-[50px] overflow-hidden shrink-0 items-center">
                                <img src={item.img} className="object-contain group-hover:scale-110 bg-cover" alt="track" />
                            </div>
                            <div className="flex flex-col overflow-hidden ml-4 my-auto text-[#afafaf]">
                                <p title={item.name_song} className="text-ellipsis overflow-hidden font-medium whitespace-nowrap group-hover:text-[#00d8ad]">{item.name_song}</p>
                                <span>{item.artist_name}</span>
                            </div>
                        </div>
                        <div className="flex mx-2 ml-auto items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="w-6 h-6 cursor-pointer hover:text-[#00d8ad]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                            </svg>
                            <div onClick={() => handleOpenOptions(i)} className="options relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 peer btn-option pointer-events-auto cursor-pointer hover:text-[#00d8ad]"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {openOptionIndex === i && (
                                    <div className="song-option duration-200 absolute top-0 right-full overflow-hidden" ref={optionsListRef}>
                                        <ul className="flex cursor-pointer flex-col bg-gray-700 min-w-[250px] space-y-2 rounded-sm" onClick={handleOptionItemClick}>
                                            <li onClick={call} className="hover:bg-gray-600  px-4 py-2">Thêm vào danh sách yêu thích</li>
                                            <li onClick={call} className="hover:bg-gray-600  px-4 py-2">like</li>
                                            <li onClick={call} className="hover:bg-gray-600  px-4 py-2">report</li>
                                            <li onClick={call} className="hover:bg-gray-600  px-4 py-2">share</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MusicList;