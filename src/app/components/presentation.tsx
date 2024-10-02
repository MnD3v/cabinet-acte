import React from 'react'
import AppBar from './app_bar'
import { motion } from 'framer-motion'
import Animations from './utils/item'

const Presentation = () => {
    return (
        <section id='' className="flex justify-center bg-cover">

            <div className='relative w-full flex justify-center overflow-hidden'>
                <div className='w-full flex flex-col items-center '>

                    <div className='hidden 2xl:block bottom-0 -left-16 absolute h-52 w-52 bg-gradient-to-tr from-green-700 to-green-200 rounded-full pointer-events-none'></div>
                    <div className='-top-24 lg:-top-[340px] -right-24 absolute h-56 w-56 md:h-[250px] md:w-[250px] lg:h-[500px] lg:w-[500px] border border-green-400 rounded-full pointer-events-none z-10'></div>
                    <div className='-top-28 lg:-top-[300px] -right-20 absolute h-56 w-56 md:h-[250px] md:w-[250px] lg:h-[500px] lg:w-[500px] border bg-gradient-to-bl from-green-500 to-green-100 rounded-full pointer-events-none'></div>
                    <AppBar></AppBar>
                    <div className='relative max w-full md:flex justify-between z-30'>
                        <div className='w-full md:w-1/2 space-y-5 p-6 md:space-y-10 '>
                            <div className="space-y-3 ">
                                <motion.h1
                                    variants={Animations.bottomToTop({ duration: 0.5 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className="text-4xl md:text-6xl font-semibold
                                    font-jost">Decouvrez le Cabinet  </motion.h1>

                                <motion.h1
                                    variants={Animations.scale({ duration: 0.8 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className='text-6xl font-jost font-extrabold md:text-8xl text-green-700 flex flex-col'>ACTe <img src="/utils/underline.png" className='w-36 md:w-60 ' alt="" /></motion.h1>

                            </div>
                            <div className=" max flex flex-col">
                                <motion.p
                                    variants={Animations.bottomToTop({ duration: 2.2 })}
                                    initial="hidden"
                                    whileInView="show"
                                >
                                    Cabinet spécialisé dans la formation des jeunes dans des domaines technologiques et en management.
                                </motion.p>
                                <motion.a href='#contact'
                                    variants={Animations.scale({ duration: 2.0 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className="font-bricolage text-white hover:text-green-900 
                                 px-10 py-3 my-3
                               bg-green-700 hover:bg-white border-2 border-green-700  rounded-md
                                self-start
                                ">Contactez-nous</motion.a>

                            </div>
                            <div className='h-px bg-zinc-200 w-full'></div>
                            <div className='flex'>
                                <img src="/utils/satisfieds.png" alt="" className='h-16' />
                                <div className='mx-2'>
                                    <p className='text-2xl'>
                                        670+

                                    </p>
                                    <p className='font-marcellus'>De Jeunes formés</p>
                                </div>

                            </div>


                        </div>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img src="/presentation_image.png" alt="" className='w-80' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Presentation