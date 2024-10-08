import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const APropos = () => {
    const avantages = [

        { icon: "enseignants.png", description: "Formateurs experts: Nos formateurs sont des professionnels du secteur, prêts à partager leur expérience et savoir-faire." },
        { icon: "mind.png", description: "Méthodes d'apprentissage innovantes: Utilisation des dernières technologies et outils pour un apprentissage pratique et efficace.", }, { icon: "business.png", description: "Partenariats avec des entreprises: Nous collaborons avec des entreprises locales et internationales pour faciliter l'insertion professionnelle de nos apprenants.", }, { icon: "certificate.png", description: "Certifications reconnues: Nos formations sont certifiées et reconnues dans le secteur numérique." },

    ]
    return (
        <section id="a-propos" className='relative flex flex-col  items-center p-3 my-6 overflow-hidden'>
            <motion.div
                variants={Animations.scale({ duration: 0.5, inverse: true })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className='flex lg:hidden  items-center my-4 gap-2 self-start'>
                <div className='bg-green-700 h-2 w-9'></div>
                <p className=' text-green-700 text-xl uppercase font-jost font-bold self-start'> A propos de nous</p>
            </motion.div>
            <div className='max flex flex-wrap gap-3'>
                <motion.img src="/entreprise.jpg" alt=""

                    variants={Animations.leftToRight({ duration: 0.5 })}
                    initial="hidden"
                    whileInView="show"
                    className='object-cover w-full h-[260px] sm:h-[400px] lg:w-[50%] lg:h-auto' />
                <div className='w-full lg:w-[400px] xl:w-[600px]'>
                    <div className='w-full flex justify-start'>
                        <motion.div
                            variants={Animations.scale({ duration: 0.5, inverse: true })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}
                            className='hidden lg:flex  items-center my-4 gap-2 self-start'>
                            <div className='bg-green-700 h-2 w-9'></div>
                            <p className=' text-green-700 text-xl uppercase font-jost font-bold self-start'> A propos de nous</p>
                        </motion.div>
                    </div>




                    <p className='font-normal font-bricolage text-lg leading-relaxed
                    my-3
                    '>
                        <span className='font-bold text-green-600 text-3xl'>ACTe</span>, Agence de Conseil en  <span className='font-bold'>Management</span>  et <span className='font-bold'>Technologie</span>, est un cabinet d’expertise en management (comptable, fiscale, markéting et Ressources Humaines) et technologie. Le cabinet ACTe est au cœur du renforcement de capacités des jeunes diplômés, en leur offrant des <span className='font-bold text-green-600'>formations qualifiés</span> et <span className='font-bold text-green-600'>répondant aux exigences actuelles du marché de l'emploi</span>.  Aussi, il offre une gamme de prestations et de services dédiés aux professionnels, étudiants et aux entreprises. Il intervient auprès des Petites et Moyennes Entreprises (PME) dans les domaines de la <span className='font-bold '>comptabilité , du conseil, de l’audit et dans la mise en place d’outils</span>  de pilotage utiles à une bonne gestion de leur entreprise.
                    </p>
                    <div className='flex items-center gap-2'> <motion.img
                        animate={{ rotate: 360, }}
                        transition={{ repeatType: "loop", repeat: Infinity, duration: 4, ease: "linear" }}
                        src="/icons/star.png" alt="" className='h-10' /> <h3 className='italic font-jost text-zinc-700 text-2xl duration-[4s]'>
                            Ce qui nous distingue</h3></div>
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

                                    <motion.div
                                        variants={Animations.scale({ duration: 0.3 })}
                                        initial="hidden"
                                        whileInView="show"
                                        className='h-16 w-16 rounded-full bg-[#FAF4EB] flex items-center justify-center'>
                                        <img src={"/icons/" + element.icon} alt="" className='h-9' />
                                    </motion.div>
                                    <div className='w-[80%] sm:w-52'>
                                        <p className='text-black font-jost text-xl font-semibold'>{element.description.split(':')[0]} </p>
                                        <p className='text-zinc-600'>{element.description.split(':')[1]}</p>
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