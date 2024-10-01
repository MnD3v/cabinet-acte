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
                isInView && <div className='fixed flex flex-col items-center justify-center bg-blue-950 h-full w-full'>
                    <div className='loader'></div>
                </div>}
            <motion.div
                variants={Animations.opacity({ duration: 0.4 })}
                initial="hidden"
                whileInView="show"
                className=''>
                <div className='bg-blue-950 flex flex-col items-center text-white'>
                    <AppBar></AppBar>

                    <div className=' justify-center items-center mb-8 md:my-12 mx-2'>
                        <h1 className='font-jost text-center text-2xl md:text-4xl'> {formation?.domaine} </h1>


                    </div>

                </div>
                <div className='flex justify-center'>
                    <div className='max'>
                        <h1 className='font-jost text-green-700 my-4'>Formations</h1>
                        <div className='w-full flex justify-center'>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3'>
                                {
                                    formation?.formation.map((element) => (
                                        <div key={element.titre} className='relative p-4 border overflow-hidden'>
                                            <img src="/utils/choose3.png" alt="" className='absolute -bottom-4 -right-4 h-28' />
                                            <img src="/icons/graduate.png" alt="" className='h-8' />
                                            <h3 className='font-bold font-bricolage'>{element.titre}</h3>
                                            <p>{element.description}</p>
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