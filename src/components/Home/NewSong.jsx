import { useState, useEffect } from "react";

import NewSong3 from "../../../static/img/img_banner/NewSong3.jpg";
import NewSong2 from "../../../static/img/img_banner/NewSong2.jpg"
import NewSong1 from "../../../static/img/img_banner/NewSong1.jpg"
const NewSong = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        setList([{
            img: NewSong1,
            rank: 1,
            path: "/",
            name_song: "Anh Yeeu EMmmmmmm",
            artist_name: "Cukak",
        }, {
            img: NewSong2,
            rank: 2,
            path: "/",
            name_song: "Anh Yeeu EMmmmmmm",
            artist_name: "Cukak",
        }, {
            img: NewSong3,
            rank: 3,
            path: "/",
            name_song: "Anh Yeeu EMmmmmmmasd asd asd asdas das dasd asdsadasd asd asd asd",
            artist_name: "Cukak",
        },])
    }, [])
    return (
        <div className="px-4 bg-primary-bgIndex py-6">
            <div className="flex space-x-8 w-full">
                {list.map((item, i) => (
                    <div className="relative">
                        <div className="absolute w-24 h-12 -top-5 left-5 rounded bg-white">
                            {/* <div className="w-24 h-12 top-100 bg-white"></div> */}
                        </div>
                        <div key={i} className={`flex rounded overflow-hidden `}>
                            <img src={item.img} className="hover:scale-125 duration-200" alt={item.name_song} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewSong