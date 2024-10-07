"use client"
import AppBar from '@/app/components/app_bar';
import Animations from '@/app/components/utils/item';
import { formations } from '@/app/constants';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
const Formation = ({ params }: { params: { link: string } }) => {





    const formation = formations.find((e) => {
        console.log(params);
        console.log(e.link);

        return e.link === params.link
    });


    const [isInView, setIsInView] = useState(true);

    useEffect(() => {

        setIsInView(false)

        return () => {

        }
    }, [])


    return (
        <div>
            {
                isInView && <div className='fixed flex flex-col items-center justify-center bg-white h-full w-full'>
                    <div>
                    </div>
                    <img src="/mini-logo.png" alt="" className="h-14 md:h-24 my-3" />
                    <div className='loader h-9 w-9 md:h-16 md:w-16'></div>

                </div>}
            <motion.div
                variants={Animations.opacity({ duration: 0.4 })}
                initial="hidden"
                whileInView="show"
                className=''>
                <div
                    // style={{
                    //     backgroundImage: "radial-gradient(#22c55e 1px, transparent 0)",
                    //     backgroundSize: "20px 20px"
                    // }}
                    className=' flex flex-col items-center bg-green-950 text-white'>
                    <AppBar></AppBar>

                    <div

                        className='w-full justify-center items-center pb-8  md:py-12 px-2'>
                        <h1 className='font-jost uppercase text-center text-2xl md:text-5xl'> {formation?.domaine} </h1>


                    </div>

                </div>
                <div className='flex justify-center p-2'>
                    <div className='max'>
                        <div className='flex  items-center self-start space-x-2 my-3'>
                            <div className='h-2 w-2 bg-green-700 '></div>

                            <p className='text-green-700 uppercase font-bricolage font-bold'>Formations</p>
                            <div className='h-2 w-2 bg-green-700'></div>

                        </div>
                        <div className='w-full flex justify-center'>
                            <div className='font-jost w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
                                {
                                    formation?.formation.map((element) => (
                                        <div key={element.titre} className='relative 
                                        hover:bg-white border rounded-3xl overflow-hidden'>
                                            <img src="/utils/choose3.png" alt="" className='absolute -bottom-4 -right-4 h-28' />
                                            <div className='w-full bg-green-600 text-white p-4'>
                                                <img src="/icons/graduate.png" alt="" className='h-8' />
                                                <h3 className='font-bold font-jost '>{element.titre}</h3>
                                            </div>
                                            <p className='p-4'>{element.description.split("*").map((element2) => (<span className={element.description.indexOf(element2) % 2 == 0 ? `font-normal` : 'font-bold text-green-800'}>{element2}</span>))}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>

    )
}

export default Formation