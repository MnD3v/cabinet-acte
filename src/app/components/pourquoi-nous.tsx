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
        <div className="relative text-white py-6 md:py-12 flex justify-center mx-1 my-5 md:m-6 overflow-hidden">
            <div className='max bg-[url("/utils/footer.png")] bg-cover '>
                <div className='flex flex-col  p-3 py-6 md:p-6'>

                    <div className='flex  items-center self-start space-x-2 my-3'>
                        <div className='h-2 w-2 bg-green-500 '></div>

                        <p className='text-green-500 uppercase font-bricolage font-bold'>POURQUOI NOUS CHOISIR</p>
                        <div className='h-2 w-2 bg-green-500'></div>

                    </div>
                    <p className='font-marcellus text-2xl md:text-4xl'>Nous accompagnons chaque etudiant dans l'acquisition des competances
                    </p>
                    <p>Avec une experience de plus de 7 ans, nous avons pour vision de former des jeunes dans les metiers de l'avenir. L'insertion professionnel de nos jeunes est notre principal but</p>
                    <div className='h-14'></div>
                    <div className=' flex flex-col md:flex-row gap-2 md:gap-4'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 font-marcellus'>
                            {
                                raisons.map((element) => (
                                    <motion.div
                                        variants={Animations.bottomToTop({ duration: 0.3 })}
                                        initial="hidden"
                                        whileInView="show"
                                        key={element} className='space-y-3 flex'>
                                        <img src="/utils/diamant.png" alt="" className='h-7 m-2' />
                                        <p className=''>{element}</p>

                                    </motion.div>

                                ))
                            }

                        </div>
                        <div className='relative w-full md:w-[500px] lg:w-[700px] h-[350px] md:h-[500px] p-3 my-4'>
                            <motion.div className='-left-3 -top-3 absolute w-[100px] h-[100px] rounded-tl-[100px] rounded-br-[100px] bg-green-500
                       '
                                variants={Animations.leftToRight({ duration: 0.5, inverse: true })}
                                initial="hidden"
                                whileInView="show"
                            />
                            <motion.img src="/pourquoi.jpeg" alt="" className='relative w-full md:w-[360px] lg:w-[400px] h-[350px] md:h-[500px] rounded-tl-[90px] rounded-br-[90px]
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