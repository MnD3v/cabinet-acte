import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Services = () => {


    const formations = [
        {
            "icon": "logiciels.png",
            "titre": "Informatique et Logiciel",
            "description": "Maîtrise des logiciels informatiques et des outils essentiels pour automatiser, organiser et optimiser les tâches numériques.",
            "link": "informatique-et-logiciel"
        },
        {
            "icon": "management.png",
            "titre": "Management et Soft Skills",
            "description": "Développement des compétences en leadership, communication et gestion d'équipe pour évoluer dans un environnement professionnel.",
            "link": "management-et-soft-skills"
        },
        {
            "icon": "multimedia.png",
            "titre": "Digital-Multimédia et Entrepreneuriat",
            "description": "Apprentissage des outils numériques et des techniques entrepreneuriales pour créer et gérer des projets multimédias innovants.",
            "link": "digital-multimedia-et-entrepreneuriat"
        },
        {
            "icon": "administration.png",
            "titre": "Gestion Administrative",
            "description": "Acquisition des compétences en organisation, gestion des tâches administratives et maîtrise des outils bureautiques.",
            "link": "gestion-administrative"
        },
        {
            "icon": "applications.png",
            "titre": "Développement d'applications",
            "description": "Création d'applications web et mobiles innovantes, de la conception à la mise en production, en utilisant les technologies modernes.",
            "link": "developpement-d-application"
        }
    ];

    return (
        <section id="formations" className='relative my-10 flex flex-col items-center m-2 overflow-hidden'>

            <div className='max w-full'>
                <div className='w-full flex justify-start'>
                    <motion.div
                        viewport={{ once: true }}

                        variants={Animations.scale({ duration: 0.5, inverse: true })}
                        initial="hidden"
                        whileInView="show"
                        className='flex  items-center my-4 gap-2'>

                        <p className=' text-green-700 text-2xl uppercase font-abel font-bold'> Formations</p>
                        <div className='bg-green-700 h-px w-9'></div>
                    </motion.div>
                </div>

                <p className='text-black font-jost mb-6'>Nous offrons des formations dans 5 grands domaines</p>
            </div>


            <div className=' max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-2'>
                {
                    formations.map((element) => (
                        <motion.a

                            href={"/formations/" + element.link}
                            variants={Animations.bottomToTop({ duration: 0.3 * formations.indexOf(element) + 0.2 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            key={element.icon} className='p-1'> <div

                                className=' h-full flex flex-col justify-between
                          hover:bg-white      border border-gray-300 hover:border-green-600 hover:scale-105 rounded-2xl
                                 p-2 md:p-3 
                                transition-all duration-200'>

                                <div className='space-y-4'>
                                    <motion.img src={"/icons/" + element.icon} alt=""
                                        viewport={{ once: true }}

                                        variants={Animations.scale({ duration: 0.5 })}
                                        initial="hidden"
                                        whileInView="show"
                                        className='h-10 md:h-14' />

                                    <motion.p
                                        viewport={{ once: true }}

                                        variants={Animations.bottomToTop({ duration: 0.5, distance: 25 })}
                                        initial="hidden"
                                        whileInView="show"


                                        className='text-xl text-black font-medium font-jost'>{element.titre}</motion.p>
                                    <p className='text-zinc-600'>{element.description}</p>
                                </div>
                                <div className='flex items-center font-jost font-semibold 
                                my-4
                         
                               '>Voir les formations <motion.img
                                        animate={{ x: 24 }}
                                        transition={{ repeatType: "loop", repeat: Infinity, duration: 1, ease: "linear" }}
                                        src="/icons/double_arrow_go.png" alt="" className='h-4' /> </div>

                            </div>
                        </motion.a>
                    ))
                }
            </div>


        </section>
    )
}

export default Services