import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Services = () => {
    const services = [

        
            {
              "titre": "Assistance comptable, fiscale et sociale",
              "description": "Accompagnement dans la gestion de vos obligations comptables, fiscales et sociales. Nous vous aidons à optimiser la gestion financière de votre entreprise tout en respectant la législation en vigueur."
            },
            {
              "titre": "Création et gestion d’entreprise",
              "description": "Aide à la création de votre entreprise, de la rédaction des statuts à l’immatriculation. Nous vous accompagnons également dans la gestion quotidienne et l’optimisation de votre structure."
            },
            {
              "titre": "Contrôle et audit des comptes",
              "description": "Vérification rigoureuse de la gestion comptable de votre entreprise à travers un audit complet. Nous vous garantissons une transparence totale de vos comptes pour une gestion financière optimale."
            },
            {
              "titre": "Production et certification des états financiers",
              "description": "Réalisation des états financiers (bilan, compte de résultat, etc.) et certification de leur conformité aux normes comptables, afin de garantir la fiabilité et la transparence de votre situation financière."
            },
            {
              "titre": "Implémentation des systèmes de gestion automatisés",
              "description": "Mise en place de solutions de gestion automatisée pour améliorer l'efficacité de vos processus internes. Nous vous proposons des outils adaptés pour la gestion des stocks, des ventes, des achats et des ressources humaines."
            },
            {
              "titre": "Branding et identité visuelle",
              "description": "Création d’une image de marque forte et cohérente. Nous vous aidons à définir votre positionnement, vos valeurs et à concevoir des éléments visuels uniques pour votre entreprise (typographie, couleurs, design)."
            },
            {
              "titre": "Logo et marque de votre entreprise",
              "description": "Conception d'un logo distinctif et mémorable pour votre entreprise. Nous créons une marque visuelle qui reflète votre identité, vos valeurs et attire l'attention de vos clients cibles."
            }
          
          

    ]
    return (
        <section id="services" className='relative flex flex-col  items-center p-3 my-6 overflow-hidden'>
          <div className='max '>
          <motion.div
                viewport={{ once: true }}

                variants={Animations.scale({ duration: 0.5, inverse: true })}
                initial="hidden"
                whileInView="show"

                className='flex lg:hidden  items-center my-4 gap-2 self-start'>
               
                <p className=' text-green-700 text-xl uppercase font-abel font-bold self-start'> Nos services</p>
                <div className='bg-green-700 h-px w-9'></div>
            </motion.div>

            
                <div className='w-full'>
                    <div className='w-full flex justify-start'>
                        <motion.div
                            viewport={{ once: true }}

                            variants={Animations.scale({ duration: 0.5, inverse: true })}
                            initial="hidden"
                            whileInView="show"

                            className='hidden lg:flex  items-center my-4 gap-2 self-start'>
                            <p className=' text-green-700 text-xl uppercase font-abel font-bold self-start'> Nos services</p>
                            <div className='bg-green-700 h-px w-9'></div>

                        </motion.div>
                    </div>



                    Nous offrons des prestations de services dans plusieurs domaines
                 
         
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>

                        {
                            services.map((element) => (
                                <motion.div
                                    viewport={{ once: true }}

                                    variants={Animations.bottomToTop({ duration: 0.3 * services.indexOf(element) })}
                                    initial="hidden"
                                    whileInView="show"
                                    key={element.titre}
                                    className='flex items-start 
                                my-4 
                                border p-4
                                
                                cursor-pointer
                                '>

                              
                                    <div className='hover:scale-110'>
                                        <p className='text-green-700 font-jost text-xl font-semibold font-abel'>{element.titre} </p>
                                        <p className='text-zinc-600'>{element.description}</p>
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

export default Services