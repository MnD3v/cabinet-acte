import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'
import Link from 'next/link'

const Services = () => {


    const formations = [
        {
            "icon": "logiciels.png",
            "titre": "Informatique et Logiciel",
            "description": "Vérification régulière de la tension artérielle pour prévenir les risques d'hypertension.",
            "link": "informatique-et-logiciel"
        },
        {
            "icon": "management.png",
            "titre": "Management et  Soft Skills",
            "description": "Suivi de votre taux de sucre dans le sang pour prévenir le diabète.",
            "link": "management-et-soft-skills"

        },
        {
            "icon": "multimedia.png",
            "titre": "Digital-Multimedia et entrepreunariat",
            "description": "Mesure du cholestérol pour réduire les risques de maladies cardiovasculaires.",
            "link": "digital-multimedia-et-entrepreneuriat"

        },
        {
            "icon": "administration.png",
            "titre": "Gestion Administrative",
            "description": "Suivi de votre poids pour maintenir une bonne santé physique et prévenir l'obésité.",
            "link": "gestion-administrative"

        },
        {
            "icon": "applications.png",
            "titre": "Developpement d'applications",
            "description": "Évaluation des facteurs de risque pour prévenir les accidents vasculaires cérébraux.",
            "link": "developpement-d-application"

        },


    ]
    return (
        <section id="formations" className='my-10 flex flex-col items-center m-2'>

            <div className='max w-full'>

                <div className='flex items-center space-x-2'>
                    <div className='h-2 w-2 bg-green-700'></div>

                    <p className='text-green-700 uppercase font-bricolage font-bold'>NOS FORMATIONS</p>
                    <div className='h-2 w-2 bg-green-700'></div>

                </div>
                <p className='font-jost italic text-2xl my-4 mb-6'>Nous offrons des formations dans 5 grands domaines</p>
            </div>


            <div className=' max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-2'>
                {
                    formations.map((element) => (
                        <motion.a
                            variants={Animations.bottomToTop({ duration: 0.3 * formations.indexOf(element) + 0.2 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            key={element.icon} className='p-1'> <div

                                className=' h-full flex flex-col justify-between
                                border border-green-400 hover:border-green-600 rounded-md
                                 p-4 md:p-6 
                                transition-all duration-200'>

                                <div className='space-y-4'>
                                    <img src={"/icons/" + element.icon} alt="" className='h-12 md:h-16' />

                                    <p className='text-xl text-black font-semibold font-bricolage'>{element.titre}</p>
                                    <p className='text-zinc-600'>{element.description}</p>
                                </div>
                                <Link href={"/formations/" + element.link} className='text-center font-jost font-bold text-white hover:text-green-700  w-full px-6 py-4 my-1 
                                bg-green-700 hover:bg-white rounded-md border border-green-500'>Voir les formations</Link>

                            </div>
                        </motion.a>
                    ))
                }
            </div>


        </section>
    )
}

export default Services