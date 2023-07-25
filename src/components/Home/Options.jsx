import { useEffect } from "react"
const Options = ({onToggle, toggle, option}) => {
    useEffect(()=>{
        window.addEventListener("click",(e)=>{
            e.preventDefault()
            const element = e.target.tagName
            if (element === "UL" || element === "LI"){
                onToggle(false)
            }else {
                onToggle(true)
            }
        })
        
    },[])

    return (
        <div className="duration-200 absolute top-0 right-full overflow-hidden">
            <ul className="flex flex-col bg-gray-700 min-w-[250px] px-4 py-2 space-y-2 rounded-sm">
                <li></li>
                <li>like</li>
                <li>report</li>
                <li>share</li>
            </ul>
        </div>
)}

export default Options