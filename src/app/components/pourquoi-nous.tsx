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
        <div className="relative text-white py-6 md:py-12 flex justify-center my-5 * overflow-hidden">
            <div className='max bg-[url("/utils/footer.png")] bg-cover '>
                <div className='flex flex-col  p-3 py-6 md:p-6'>

                    <motion.div
                        variants={Animations.scale({ duration: 0.5, inverse: true })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className=' flex items-center my-4 gap-2 self-start'>
                        <div className='bg-green-400 h-2 w-9'></div>
                        <p className=' text-green-400 text-xl uppercase font-jost font-bold self-start'> Pourquoi nous choisir ?</p>
                    </motion.div>
                    <p className='font-marcellus text-2xl md:text-4xl'>Nous accompagnons chaque etudiant dans l'acquisition des competances
                    </p>
                    <p>Avec une experience de plus de 7 ans, nous avons pour vision de former des jeunes dans les metiers de l'avenir. L'insertion professionnel de nos jeunes est notre principal but</p>


                    <div className=' flex flex-col md:flex-row gap-2 md:gap-4 mt-10'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 font-marcellus'>
                            {
                                raisons.map((element) => (
                                    <motion.div
                                        viewport={{ once: true }}

                                        variants={Animations.bottomToTop({ duration: 0.3 })}
                                        initial="hidden"
                                        whileInView="show"
                                        key={element} className='space-y-3 flex items-start'>
                                        <motion.img src="/utils/diamant.png" alt=""
                                            viewport={{ once: true }}

                                            variants={Animations.scale({ duration: 0.5 })}
                                            initial="hidden"
                                            whileInView="show"
                                            className='h-7 m-3' />
                                        <p className=''>{element}</p>

                                    </motion.div>

                                ))
                            }

                        </div>
                        <div className='relative w-full max-md:h-[400px] md:w-[700px] lg:w-[900px] my-6'>
                            <motion.div
                                viewport={{ once: true }}

                                className='-left-3 -top-3 absolute w-[100px] h-[200px] rounded-tl-[100px] rounded-br-[100px] bg-gradient-to-bl from-green-500 to-lime-500
                       '
                                variants={Animations.leftToRight({ duration: 0.5, inverse: true })}
                                initial="hidden"
                                whileInView="show"
                            />
                            <motion.div
                                viewport={{ once: true }}

                                className='-right-3 -bottom-3 absolute w-[100px] h-[200px] rounded-tl-[100px] rounded-br-[100px] bg-gradient-to-bl from-green-500 to-lime-500
                       '
                                variants={Animations.leftToRight({ duration: 0.5, inverse: true })}
                                initial="hidden"
                                whileInView="show"
                            />
                            <motion.img
                                viewport={{ once: true }}

                                src="/pourquoi.png" alt="" className='relative w-full md:w-[400px] lg:w-[440px] h-full  rounded-tl-[90px] rounded-br-[90px]
                        object-cover z-30'
                                variants={Animations.leftToRight({ duration: 0.5, inverse: true })}
                                initial="hidden"
                                whileInView="show"
                            />
                        </div>

                    </div>

                </div>



            </div>
        </div>
    )
}

export default PourquoiNous