import { useTranslation } from 'react-i18next';
import {useEffect, useState, memo} from 'react';
const Language = () => {
    const {t,i18n} = useTranslation();
    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value)
        localStorage.setItem('language',e.target.value)
    }
   useEffect(()=>{
    if(localStorage.getItem('language')!=='jp'){ 
        i18n.changeLanguage(localStorage.getItem('language'))
    }
   },[])
    

    return (          
        <div className="language-options hover:cursor-pointer relative inline-flex self-center hover:text-gray-600 rounded pr-2">
            <label >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                className="w-4 h-4 absolute right-4 bottom-1/2 translate-y-1/2 text-gray-600 pointer-events-none">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </label>
            <select
            onChange={(e)=>handleChange(e) }
            defaultValue={localStorage.getItem('language')? localStorage.getItem('language'):'jp'}
            className="
            text-base font-bold rounded 
            border-2 border-white
            text-gray-600 h-10 w-50 pl-5 pr-10
            bg-white 
            hover:border-2 hover:border-gray-400 focus:outline-none 
            appearance-none
                ">
                <option value="en">{t("english")}</option>
                <option value="jp">{t("japanese")}</option>
            </select>
        </div>
    )
}
export default memo(Language)