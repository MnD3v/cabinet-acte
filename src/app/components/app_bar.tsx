"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalState } from '../contexts/GlobalStateContext';
import { usePathname } from 'next/navigation';

const AppBar = () => {
    const { menuIsOpen, setMenuIsOpen } = useGlobalState();

    const menuRef = useRef<HTMLDivElement>(null)

    const pathName = usePathname()
    const [inNotHome, setInNotHome] = useState(false)



    useEffect(() => {
        if (!(pathName === '/')) {
            setInNotHome(true)
        }
        const handleScroll = () => {

            setMenuIsOpen(false)
        }



        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuIsOpen(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll)
        }


    }, [])



    return (
        <div className='relative w-full font-jost z-50'>


            <div className={` fixed ${menuIsOpen ? "block" : "hidden"} h-full w-full bg-black/30`}>

            </div>
            <MobileAppBar inNotHome={inNotHome} menuIsOpen={menuIsOpen} menuRef={menuRef}></MobileAppBar>
            <div className='w-full flex justify-center'>
                <div className='max w-full p-6 flex flex-col items-center '>
                    <div className="max w-full  justify-between hidden md:flex">





                    </div>
                    <div className='w-full hidden md:flex items-center justify-between '>
                        <a href={inNotHome ? "/" : "#"}> <img src="/white-logo.png" alt="" className="h-12 md:h-16" />
                        </a>

                        <ul className="max flex uppercase">
                            <li className="hover:text-green-600 font-semibold  pl-9 py-3"><a href={inNotHome ? "/" : "#"}>Accueil</a></li>
                            <li className="hover:text-green-600 font-semibold  pl-9 py-3"><a href={inNotHome ? "/" : "#formations"}>Formations</a></li>

                            <li className="hover:text-green-600 font-semibold  pl-9 py-3"><a href={inNotHome ? "/" : "#a-propos"}>A Propos</a></li>
                            <li className="hover:text-green-600 font-semibold  pl-9 py-3"><a href={inNotHome ? "/" : "#contact"}>Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex w-full justify-between md:hidden items-center'>
                        <img src="/white-logo.png" alt="" className="h-12 md:h-16" />
                        <button
                            onClick={() => {

                                setMenuIsOpen((!menuIsOpen))
                                console.log(menuIsOpen)
                            }} >
                            <img src={menuIsOpen ? "/icons/close.png" : "/icons/white-menu.png"} alt="" className='h-8 w-8 bg-green-600 p-2 rounded-xl' />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AppBar


const MobileAppBar = ({ menuRef, menuIsOpen, inNotHome }: { menuRef: React.RefObject<HTMLDivElement>, menuIsOpen: boolean, inNotHome: boolean }) => (
    <motion.div ref={menuRef}
        initial={{ x: "-300px" }}
        animate={{ x: menuIsOpen ? "0" : "-300px", transition: { duration: 0.25 } }}
        className='fixed flex flex-col justify-between bg-white w-[300px] h-full p-6 text-black z-50'>
        <div className='flex flex-col items-center'>
            <img src="/logo.png" alt="" className="self-center h-20" />

            <ul className={`flex flex-col items-center justify-center  uppercase`}>
                <li className=" hover:text-green-600  px-6 py-3 "><a href={inNotHome ? "/" : "#"}>Accueil</a></li>
                <div className='h-px w-36 bg-green-700'></div>
                <li className=" hover:text-green-600  px-6 py-3 "><a href={inNotHome ? "/" : "#formations"}>Formations</a></li>
                <div className='h-px w-36 bg-green-700'></div>



                <li className=" hover:text-green-600  px-6 py-3 "><a href={inNotHome ? "/" : "#a-propos"}>A Propos</a></li>
                <div className='h-px w-36 bg-green-700'></div>

                <li className=" hover:text-green-600  px-6 py-3 "><a href={inNotHome ? "/" : "#contact"}>Contact</a></li>
                <div className='h-px w-36 bg-green-700'></div>

            </ul>
        </div>

        <div className="flex flex-wrap gap-4">


            {/* <div className=" font-bricolage gap-6 items-center space-y-3">
                <div className='flex'>
                    <img src="/icons/clock.png" alt="" className='h-4 m-1' />
                    <div>
                        <p className="font-semibold">Lundi - Samedi 08:00 - 19:00</p>
                        <p>Dimanches - FERMÉ</p>
                    </div>
                </div>

                <div className='flex'>
                    <img src="/icons/phone.png" alt="" className='h-4 m-1' />

                    <div>
                        <p className="font-semibold">+228 93 45 21 72</p>

                    </div>
                </div>

            </div> */}

        </div>

    </motion.div>
)