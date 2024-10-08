import React from 'react'
import AppBar from './app_bar'
import { motion } from 'framer-motion'
import Animations from './utils/item'

const Presentation = () => {
    return (
        <section id='' className="flex justify-center bg-[url('/utils/deco.png')] bg-opacity-20 bg-cover">

            <div className='relative w-full flex justify-center overflow-hidden'>
                <div className='w-full flex flex-col items-center '>

                    <div className='hidden 2xl:block bottom-0 -left-16 absolute h-52 w-52 bg-gradient-to-tr from-green-700 to-green-200 rounded-full pointer-events-none'></div>
                    <div className='-top-24 lg:-top-[340px] -right-24 absolute h-56 w-56 md:h-[250px] md:w-[250px] lg:h-[500px] lg:w-[500px] border border-green-400 rounded-full pointer-events-none z-10'></div>
                    <AppBar></AppBar>
                    <div className='relative max w-full md:flex justify-between items-end z-30'>
                        <div className='w-full md:w-[60%] lg:w-[70%] space-y-5 p-6 md:space-y-10 '>
                            <div className="space-y-3 md:space-y-5 ">
                                <motion.h1
                                    variants={Animations.leftToRight({ duration: 0.2 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className="text-5xl md:text-7xl lg:text-8xl font-semibold
                                    font-jost">Cabinet  <span className='text-green-500 font-bold underline underline-offset-8'>ACTe</span> </motion.h1>
                                <motion.h2
                                    variants={Animations.leftToRight({ duration: 0.5 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className='font-bricolage text-2xl md:text-3xl font-semibold my-6'>
                                    Agence de Conseil en Management et Technologie
                                </motion.h2>
                                <motion.p
                                    variants={Animations.leftToRight({ duration: .7 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className='text-lg'
                                >
                                    Expertise comptable, fiscale, RH, marketing et technologie
                                </motion.p>
                                <motion.a href='#contact'
                                    variants={Animations.leftToRight({ duration: .9 })}
                                    initial="hidden"
                                    whileInView="show"
                                    // style={{ boxShadow: "4px 5px #000" }}
                                    className="flex justify-center items-center font-bricolage text-white hover:text-green-900 
                                 h-14 w-48 my-3
                               bg-green-500 hover:bg-white rounded-full
                                self-start
                                "

                                >

                                    Contactez-nous

                                </motion.a>



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

                        <div className='flex justify-center'>
                            <motion.img
                                variants={Animations.bottomToTop({ duration: .7, inverse: true })}
                                initial="hidden"
                                whileInView="show"
                                src="/presentation_image.png" alt="" className='w-[480px] max-w-[80vw]' />
                        </div>



                    </div>

                </div>
            </div>
        </section>
    )
}

export default Presentation