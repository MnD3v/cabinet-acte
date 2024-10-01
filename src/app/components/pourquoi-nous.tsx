import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const PourquoiNous = () => {

    const raisons = [
        "Formations spécialisées et polyvalentes dans les domaines technologiques, du management et de l'administration.",
        "Un accompagnement personnalisé pour chaque étudiant, du début de la formation jusqu’à l’insertion professionnelle.",
        "Un réseau d’entreprises partenaires qui facilite l’accès à des opportunités de stages et d’emplois.",
        "Des formateurs expérimentés et reconnus dans leurs domaines respectifs.",
        "Des méthodes pédagogiques innovantes, incluant des projets pratiques et des simulations professionnelles.",
        "Un suivi après formation pour garantir une évolution continue et un perfectionnement professionnel."
    ]
    return (
        <div className="py-6 md:py-12 flex justify-center m-1 md:m-4">
            <div className='max bg-green-950 bg-cover text-white '>
                <div className='flex flex-col bg-black/50 p-2 md:p-6'>
                    <p className='text-green-300 text-lg'>POURQUOI NOUS CHOISIR</p>
                    <div className='h-9'></div>
                    <p className='font-marcellus text-2xl md:text-4xl'>Nous accompagnons chaque etudiant dans l'acquisition des competances
                    </p>
                    <p>Avec une experience de plus de 7 ans, nous avons pour vision de former des jeunes dans les metiers de l'avenir. L'insertion professionnel de nos jeunes est notre principal but</p>
                    <div className='h-14'></div>
                    <div className=' flex flex-col md:flex-row gap-2 md:gap-4'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 font-marcellus text-lg'>
                            {
                                raisons.map((element) => (
                                    <motion.div
                                        variants={Animations.bottomToTop({ duration: 0.3 })}
                                        initial="hidden"
                                        whileInView="show"
                                        key={element} className='space-y-3 flex'>
                                        <img src="/icons/check.png" alt="" className='h-7 m-2' />
                                        <p className=''>{element}</p>

                                    </motion.div>

                                ))
                            }

                        </div>

                        <motion.img src="/pourquoi.jpg" alt="" className='w-full md:w-[360px] lg:w-[400px] h-[500px] rounded-tl-[90px] rounded-br-[90px]
                        object-cover'
                            variants={Animations.scale({ duration: 0.5 })}
                            initial="hidden"
                            whileInView="show"
                        />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default PourquoiNous