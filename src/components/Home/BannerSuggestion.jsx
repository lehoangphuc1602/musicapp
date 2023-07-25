import { useEffect, useState, memo, useCallback, useRef } from "react";
import "../../../static/css/Home/BannerSuggestion.css";
import banner_1 from "../../../static/img/img_banner/banner_1.jpg"
import banner_2 from "../../../static/img/img_banner/banner_2.jpg"
import banner_3 from "../../../static/img/img_banner/banner_3.jpg"

const BannerSuggestion = () => {
    const [BannerList, setBannerList] = useState([banner_1,banner_2,banner_3,banner_3,banner_3,banner_3,banner_2])
    const [drive, setDrive] = useState(true)
    const [ currentPoint, setCurrentPoint] = useState(2)
    const [ prev, setPrev] = useState(currentPoint-1)
    const [ next, setNext] = useState(currentPoint+1)

    const ref = useRef()
    const handleToNext = useCallback(() => {
        setDrive(true)
        const add = (prev) => {
            if (prev >= BannerList.length){
                return 1
            }else {
                return prev + 1
            }
        }
        setCurrentPoint((prev)=>{
            return add(prev)
        })
        setNext((prev)=>{
            return add(prev)
        })
        setPrev((prev)=>{
            return add(prev)
        })
    },[drive])

    const handleToPrev = useCallback(() => {
        setDrive(false)
        const tru = (prev) => {
            if (prev <= 1){
                return BannerList.length
            }else {
                return prev - 1
            }
        }

        setCurrentPoint((prev)=>{
            return tru(prev)
        })
        setNext((prev)=>{
            return tru(prev)
        })
        setPrev((prev)=>{
            return tru(prev)
        })
    },[drive])
    
    useEffect(()=>{
        ref.current = setInterval(()=>{
            if(drive){
                handleToNext()
            }else{
                handleToPrev()
            }
        },5000)

        return ()=>clearInterval(ref.current)
    },[drive])

  return (
    <div className="suggession--banner relative top-[75px] sm:top-0 group h-screen w-full">
      <div className="w-full flex h-full justify-center items-center">
        <div className="hidden absolute group-hover:flex translate-all duration-200 justify-between w-1/2 lg:w-3/4 mx-20">
          <div onClick={handleToPrev} className="cursor-pointer flex rounded-full h-10 w-10 items-center z-10 justify-center text-green-greenLight bg-green-bgBtnbanner hover:bg-green-greenLight hover:text-white duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
          </div>
          <div onClick={handleToNext} className="cursor-pointer flex rounded-full h-10 w-10 items-center z-10 justify-center text-green-greenLight bg-green-bgBtnbanner hover:bg-green-greenLight hover:text-white duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </div>
        </div>
        <div className="top-0 w-full">
          <div className="flex justify-center">
            <div className="flex relative">
            {BannerList.map((img, i) => (
              <div
                key={i}
                className={`
                    absolute transition-all duration-500 bg-center 
                    -translate-y-1/2
                    -translate-x-1/2
                    ${i+1 === currentPoint && "z-10 scale-125 -translate-x-1/2 cursor-pointer"}
                    ${i+1 === next && "translate-x-[10%] z-0 opacity-30"}
                    ${i+1 === prev && "translate-x-[-110%] z-0 opacity-30"}
                    h-[250px] w-[400px] lg:h-[300px] lg:w-[500px] 2xl:h-[350px] 2xl:w-[700px] rounded overflow-hidden
                `}
              >
                <img className="object-cover" src={img} alt={`Banner ${i}`} />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(BannerSuggestion);
