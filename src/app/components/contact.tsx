import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Contact = () => {

    const contacts = [{
        icon: "chat.png", title: "Ecrivez nous un message", description: `+228 90 90 90 90
       `, buttonText: "Envoyer un message", link: ""
    }, { icon: "red-mail.png", title: "Envoyez nous un mail", description: "kingloveempire@gmail.com", buttonText: "Envoyer un mail", link: "" }, { icon: "phone-call.png", title: "Appelez nous", description: "+228 98 98 98 98", buttonText: "+228 90559055", link: "" },
    { icon: "red-map.png", title: "Adresse ", description: "Kara-Tomdè", buttonText: "+228 90559055", link: "" },]
    return (
        <section id="contact" className='flex flex-col items-center justify-center'>

            <div className='flex justify-center'>
                <div className='max md:flex md:justify-between w-full  bg-red-100 p-6 md:p-16 my-12'>
                    <div className='font-bricolage w-[43%] max-md:w-full'>
                        <h1 className='text-3xl md:text-5xl'>
                            Faites vous accompagner par <span className='text-red-600'>KLM Empire</span>
                        </h1>
                        <p className='font-play italic'>Devenez un acteur clé dans des secteurs stratégiques. Que ce soit dans le commerce, l'immobilier, l'import-export, ou l'agriculture, nos solutions vous apportent l'expertise et l'accompagnement nécessaires pour réussir et innover dans des domaines en pleine croissance.</p>
                    </div>
                    <div className='w-full md:max-w-[43%]'>
                        <div className='w-full flex flex-col md:grid md:grid-cols-2 gap-3'>
                            <input type="text" name="" placeholder='Nom complet' id="" className='px-1 w-full py-3 border-b-[1px] border-zinc-500 bg-transparent ' />
                            <input type="number" name="" placeholder='Téléphone' id="" className='px-1 w-full py-3 border-b-[1px] border-zinc-500 bg-transparent' />
                            <textarea name="" placeholder='Votre message' id="" className='md:col-span-2 px-1 w-full py-3 border-b-[1px] border-zinc-500 bg-transparent' />
                        </div>
                        <button className='bg-red-600 text-white font-semibold px-8 py-4 my-4'>Envoyer</button>
                    </div>
                </div>

            </div>
            <div className='max-w-[800px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 m-3'>
                <div>
                    <div className='flex items-center gap-1'> <div className='h-px bg-zinc-800 w-16'></div> <h3>Retrouvez nous</h3> </div>
                    <h1>Contactez <span className='text-red-500'>Nous</span></h1>
                    <p>Nous avons des experts en social en direct qui attendent pour vous aider du lundi au vendredi de 7h à 18h</p>
                </div>
                {contacts.map((element) => (
                    <motion.div

                        variants={Animations.bottomToTop({ duration: 0.4 * contacts.indexOf(element) + 0.4, })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        key={element.icon} className='w-full  rounded-xl flex flex-col p-4 gap-3'>

                        <img src={`/icons/${element.icon}`} alt="" className='h-10 md:h-14 self-start' />

                        <h3>{element.title}</h3>
                        <p style={{ whiteSpace: 'pre-wrap' }} className=''>{element.description} </p>


                    </motion.div>
                ))}
            </div>
        </section>

    )
}

export default Contact