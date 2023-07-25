import { NavLink,useNavigate, useLocation, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch , useSelector} from "react-redux";
import logo from "../../static/img/Logo-mini.png";

const Sidebar = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const navigate = useNavigate()
    const openSideBar = () => {
        setMounted(!mounted)
    }

    const isAuthenticated = true
    useEffect(()=>{
        // dispatch(changeActive())
        navigate(location.pathname)
    },[])

    const handleLogout = () => {
        // dispatch(logout()).unwrap().then(res => {
        //     if(res.data.type === "INFO"){
        //         navigate("/login")
        //     }else{
        //         localStorage.removeItem('auth')
        //         dispatch(authenticate())
        //     }
        // })
    }
    if (true){
        <Navigate to={location.pathname} />
    }

    const sideBarItem = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="w-6  h-6 absolute ml-4">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
            ,
            path: "/profile",
            name: "profile"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6 absolute ml-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                </svg>
            ,
            path: "/",
            name: "home"
        },
        
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6 absolute ml-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
            ,
            path: "/rank",
            name: "rank"
        },
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6 absolute ml-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            ,
            path: "/new",
            name: "new_song"
        },
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6 absolute ml-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            ,
            path: "/artist",
            name: "artist"
        },
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6 absolute ml-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
            ,
            path: "/top100",
            name: "top100"
        },
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6 absolute ml-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            ,
            path: "/topic",
            name: "topic"
        }

    ]
    return (
        <div className={`fixed
            top-0
            h-12
            sm:h-full
            drop-shadow-md
            flex-col items-center 
            w-full
            sm:w-16
            text-gray-700
            bg-primary-50
            transition-all
            ${mounted ? ("h-full sm:w-[250px]") : ""} 
            duration-200
            overflow-hidden
            z-20
            `}>
                <div className={`flex cursor-pointer 
                    w-full items-center
                    duration-200
                    transition-all
                    h-[75px] bg-primary-50
                    ${mounted ? ("justify-end pr-4"):("justify-center")}`}
                    >
                    <img src={logo} onClick={openSideBar} className={`w-12 h-12`} alt="logo" />
                </div>
            
            <div className={`flex items-center  mx-auto border-gray-300`}>
                <div className={`flex flex-col w-full`}>
                        {
                            sideBarItem.map((item, key) => {
                                return (
                                    <NavLink
                                        key={key}
                                        to={item.path}
                                        onClick={()=>setMounted(false)}

                                        className={`group ${({ isActive, isPeding }) => isActive ?
                                            "active" : ""} 
                                `}
                                    >
                                        <div className={`w-16 transition ease-in-out duration-300 w-full`}>
                                            <div
                                                className={` 
                                                rounded
                                            items-center
                                            group-[.active]:bg-gradient-to-r from-cyan-200 to-blue-300 
                                            h-10 m-1
                                            hover:bg-gradient-to-r from-cyan-200 to-blue-300 flex  
                                            duration-300
                                            `}>
                                                <>
                                                    {item.icon}
                                                </>
                                                <span className={`
                                        ml-14 leading-4 whitespace-nowrap overflow-hidden text-sm font-medium ${!mounted && "opacity-0"} duration-200`}>{t(item.name)}</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                </div>
            </div>
            {
            isAuthenticated && mounted &&
            <div className="px-8 mt-6">
                <div className="bg-gradient-to-r text-center from-green-100 to-green-50 w-full px-5 py-4">
                    <div className="text-white text-lg tracking-wide leading-none"><p>Join now to discover playlists made just for you.</p></div>
                    <button className="flex mt-5 mx-auto bg-white rounded w-16 h-8 justify-center items-center">join</button>
                </div>
            </div>
            }
        </div>
        

    )
}

export default Sidebar