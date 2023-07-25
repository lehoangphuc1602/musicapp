import top100_image_1 from "../../../static/img/img_banner/top100_image_1.png";
import top100_image_2 from "../../../static/img/img_banner/top100_image_2.png";
import top100_image_3 from "../../../static/img/img_banner/top100_image_3.png";
import top100_image_4 from "../../../static/img/img_banner/top100_image_4.png";
import top100_image_5 from "../../../static/img/img_banner/top100_image_5.png";
import top100_image_6 from "../../../static/img/img_banner/top100_image_6.png";
import top100_image_7 from "../../../static/img/img_banner/top100_image_7.png";
import { useState, useEffect } from "react"

const CatelogySuggesstion = () => {

    const [Catelogies, setCatelogies] = useState([])

    useEffect(() => {
        setCatelogies([
            {
                title: "Catelogy 1",
                catelogies: [
                    { img: top100_image_1, path: "/" },
                    { img: top100_image_2, path: "/" },
                    { img: top100_image_3, path: "/" },
                    { img: top100_image_4, path: "/" },
                    { img: top100_image_5, path: "/" },
                    { img: top100_image_6, path: "/" },
                    { img: top100_image_7, path: "/" },
                    { img: top100_image_1, path: "/" },
                    { img: top100_image_2, path: "/" },
                    { img: top100_image_3, path: "/" },
                    { img: top100_image_4, path: "/" },
                    { img: top100_image_5, path: "/" },
                    { img: top100_image_6, path: "/" },
                    { img: top100_image_7, path: "/" },
                ]
            },
            {
                title: "Catelogy 2",
                catelogies: [
                    { img: top100_image_1, path: "/" },
                    { img: top100_image_2, path: "/" },
                    { img: top100_image_3, path: "/" },
                    { img: top100_image_4, path: "/" },
                    { img: top100_image_5, path: "/" },
                    { img: top100_image_6, path: "/" },
                    { img: top100_image_7, path: "/" },
                    { img: top100_image_1, path: "/" },
                    { img: top100_image_2, path: "/" },
                    { img: top100_image_3, path: "/" },
                    { img: top100_image_4, path: "/" },
                    { img: top100_image_5, path: "/" },
                    { img: top100_image_6, path: "/" },
                    { img: top100_image_7, path: "/" },
                ]
            },
        ])
    }, [])

    return (
        <div className="px-4 bg-primary-bgIndex py-6 space-y-6">
            {Catelogies.map((item, i) => (
                <div className="overflow-hidden" key={i}>
                    <div className="flex justify-between">
                        <h1 className="text-white text-lg md:text-4xl font-bold mb-4">{item.title}</h1>
                        <div className="flex translate-all duration-200 space-x-4">
                            <div className="cursor-pointer hover:bg-[#423EA3] duration-200 flex rounded-full h-10 w-10 items-center z-10 justify-center text-white bg-primary-bgbtn">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>

                            </div>
                            <div className="cursor-pointer hover:bg-[#423EA3] duration-200 flex rounded-full h-10 w-10 items-center z-10 justify-center text-white bg-primary-bgbtn">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>

                            </div>
                        </div>
                    </div>
        
                    <div className="flex w-[250%] overflow-y-auto space-x-4">
                        {item.catelogies.map((catelogy, key) => (
                            <div className="w-2/5 md:w-[200px] overflow-hidden rounded-md" key={key}>
                                <img className="hover:scale-125 duration-200 transition-all object-cover bg-center" src={catelogy.img} alt="" />
                            </div>
                        ))}

                    </div>
                </div>
            ))}
        </div>
    )

}

export default CatelogySuggesstion