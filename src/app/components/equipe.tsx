import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Equipe = () => {
    const membres = [{ image: "/equipe/pignandi.png", poste: "Dr, Responsable pôle RH", nom: "Géraldine PIGNANDI", note: "4.5" }, { image: "/equipe/luc.png", poste: "Dr, Consultant formateur, Stratégie Marketing", nom: "Luc MAGREBE", note: "4.8" },
    { image: "/equipe/vice-pdg.png", poste: "Consultant formateur, informaticien", nom: "Justin HOULOUMIE", note: "4.8" }, { image: "/equipe/aubin.png", poste: "Consultant formateur, Graphiste designer", nom: "Aubin KUEVIAKOE", note: "4.7" },
    { image: "/equipe/manu.png", poste: "Consultant formateur, Développeur ", nom: "Emanuel DJATIKA", note: "4.7" },
    { image: "/equipe/vice-pdg.png", poste: "Drt, Gestionnaire Comptable agrée", nom: "R. Kangni KUEVIAKOE", note: "4.7" },
    ]
    return (
        <div className='flex justify-center'>
            <div className='max my-10'>
                <h1 className=' my-6 font-bricolage text-center text-2xl md:text-4xl'>Notre Equipe <span className='text-green-500'>d'Experts</span></h1>
                <div className='flex flex-wrap justify-center gap-4'>
                    {
                        membres.map((element) => (
                            <div key={element.poste} className='flex '>
                                <motion.img
                                    viewport={{ once: true }}

                                    variants={Animations.bottomToTop({ duration: 0.5 * membres.indexOf(element), distance: 19 })}
                                    initial="hidden"
                                    whileInView="show"

                                    src={element.image} alt="" className='w-40 object-contain' />
                                <div className='p-5 w-64'>
                                    <motion.p
                                        viewport={{ once: true }}

                                        variants={Animations.bottomToTop({ duration: 0.5, distance: 19 })}
                                        initial="hidden"
                                        whileInView="show"

                                        className='font-bricolage font-bold text-lg'>{element.nom}</motion.p>

                                    <motion.p
                                        viewport={{ once: true }}

                                        variants={Animations.leftToRight({ duration: 0.7, distance: 19, inverse: true })}
                                        initial="hidden"
                                        whileInView="show"

                                        className='text-green-500'> {element.poste}</motion.p>
                                    <div className='flex gap-1 text-zinc-700 my-3'>
                                        <motion.img
                                            viewport={{ once: true }}

                                            variants={Animations.scale({ duration: 0.5, })}
                                            initial="hidden"
                                            whileInView="show"

                                            src="/icons/notation.png" alt="" className='h-6' />
                                        <p>(Noté {element.note}/5)</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <a href="https://facebook.com" target='_blank'>
                                            <motion.img src="/icons/facebook.png" alt=""

                                                viewport={{ once: true }}

                                                variants={Animations.scale({ duration: 0.3 })}
                                                initial="hidden"
                                                whileInView="show"

                                                className='h-8 w-8 p-2 rounded-full border shadow-md' />
                                        </a>
                                        <a href="https://twitter.com" target='_blank'>
                                            <motion.img src="/icons/twitter.png" alt=""
                                                viewport={{ once: true }}

                                                variants={Animations.scale({ duration: 0.5 })}
                                                initial="hidden"
                                                whileInView="show"

                                                className='h-8 w-8 p-2 rounded-full border shadow-md' />
                                        </a>
                                        <a href="https://likedin.com" target='_blank'>

                                            <motion.img src="/icons/linkedin.png" alt=""
                                                viewport={{ once: true }}

                                                variants={Animations.scale({ duration: 0.7 })}
                                                initial="hidden"
                                                whileInView="show"

                                                className='h-8 w-8 p-2 rounded-full border shadow-md' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Equipe