import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Contact = () => {

    const contacts = [{ icon: "green-message.png", title: "Envoyez nous un mail", description: "cabinetactetg@gmail.com", buttonText: "Envoyer un mail", link: "" }, { icon: "green-phone.png", title: "Appelez nous", description: "+228 92 21 75 64", buttonText: "+228 92 21 75 64", link: "" },
    { icon: "green-map.png", title: "Adresse ", description: "Kara-Tomdè", buttonText: "+228 92 21 75 64", link: "" },]
    return (
        <section id="contact" className='flex flex-col items-center justify-center'>

            <div className='flex justify-center'>


            </div>
            <div className='max-w-[800px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 m-3'>
                <div>
                    <div className='flex items-center gap-1'> <div className='h-px bg-zinc-800 w-16'></div> <h3>Retrouvez nous</h3> </div>
                    <h1 className='font-jost'>Contactez <span className='text-green-500'>Nous</span></h1>
                    <p>Nous avons des experts en social en direct qui attendent pour vous aider du lundi au vendredi de 7h à 18h</p>
                </div>
                {contacts.map((element) => (
                    <motion.div

                        variants={Animations.bottomToTop({ duration: 0.4 * contacts.indexOf(element) + 0.4, })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        key={element.icon} className='font-bricolage w-full  rounded-xl flex flex-col p-4 gap-3'>

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