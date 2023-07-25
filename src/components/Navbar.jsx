import { useState, useLayoutEffect, memo, forwardRef } from "react";


const Navbar = forwardRef((props, ref) => {
    const [top, setTop] = useState(true)

    useLayoutEffect(() => {
        const onScroll = () => {
            const el = ref.current
            if (el.scrollTop !== 0) {
                setTop(false)
            } else {
                setTop(true)
            }
        }

        const element = ref.current;
        element && element.addEventListener("scroll", onScroll);
    }, [])

    return (
        <header className={`fixed bg-primary-50
        ${top && "bg-transparent"} w-full h-[75px] items-center 
                transition-all duration-100 z-20 `}>
            <div className="flex w-full justify-end px-5">
                <nav className={`flex h-[75px]`}>
                    <div className="flex h-[75px] flex-wrap items-center">
                        {props.children}
                    </div>
                </nav>
            </div>
        </header>

    )
})

export default memo(Navbar);