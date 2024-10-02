import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const APropos = () => {
    const avantages = [

        { icon: "enseignants.png", description: "Formateurs experts: Nos formateurs sont des professionnels du secteur, prêts à partager leur expérience et savoir-faire." },
        { icon: "mind.png", description: "Méthodes d'apprentissage innovantes: Utilisation des dernières technologies et outils pour un apprentissage pratique et efficace.", }, { icon: "business.png", description: "Partenariats avec des entreprises: Nous collaborons avec des entreprises locales et internationales pour faciliter l'insertion professionnelle de nos apprenants.", }, { icon: "certificate.png", description: "Certifications reconnues: Nos formations sont certifiées et reconnues dans le secteur numérique." },

    ]
    return (
        <section id="a-propos" className='flex flex-col  items-center p-3 my-6'>
            <div className='hidden max-md:flex  items-center space-x-2'>
                <div className='h-2 w-2 bg-green-700'></div>

                <p className='text-green-700 uppercase font-bricolage font-bold'>A propos de nous</p>
                <div className='h-2 w-2 bg-green-700'></div>

            </div>
            <div className='max flex flex-wrap gap-3'>
                <motion.img src="/entreprise.jpg" alt=""

                    variants={Animations.leftToRight({ duration: 0.5 })}
                    initial="hidden"
                    whileInView="show"
                    className='object-cover w-full h-[260px] sm:h-[400px] lg:w-[50%] lg:h-auto' />
                <div className='w-full lg:w-[400px] xl:w-[600px]'>
                    <div className='max-md:hidden flex items-center space-x-2'>
                        <div className='h-2 w-2 bg-green-700'></div>

                        <p className='text-green-700 uppercase font-bricolage font-bold'>A propos de nous</p>
                        <div className='h-2 w-2 bg-green-700'></div>

                    </div>
                    <h1 className='font-jost text-2xl md:text-3xl text-black leading-tight
                    my-3
                    '>
                        Nous sommes un agence offrant des formations aux jeunes sur le territoire Togolais.  Des clients nous font confiance depuis 2014
                    </h1>
                    <div className='flex items-center'> <img src="/icons/star.png" alt="" className='h-10' /> <h3 className='font-jost italic text-green-700 text-2xl'>
                        Ce Qui Nous Distingue</h3></div>
                    <div className='flex flex-wrap'>

                        {
                            avantages.map((element) => (
                                <motion.div
                                    variants={Animations.bottomToTop({ duration: 0.3 * avantages.indexOf(element) })}
                                    initial="hidden"
                                    whileInView="show"
                                    key={element.icon}
                                    className='flex items-start 
                                my-4 gap-3
                                w-full sm:w-72
                                '>

                                    <div className='h-16 w-16 rounded-full bg-green-100 flex items-center justify-center'>
                                        <img src={"/icons/" + element.icon} alt="" className='h-9' />
                                    </div>
                                    <div className='w-[80%] sm:w-52'>
                                        <p className='text-green-900 font-jost text-xl font-semibold'>{element.description.split(':')[0]} </p>
                                        <p>{element.description.split(':')[1]}</p>
                                    </div >

                                </motion.div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </section>
    )
}

export default APropos