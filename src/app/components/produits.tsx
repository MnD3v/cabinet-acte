"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Animations from './utils/item'
const Produits = () => {
    const popupRef = useRef<HTMLDivElement>(null)

    const produits = [
        {
            "image": "produit-1.png",
            "name": "Sinus",
            "description": "Remède contre les *sinusites*",
            "full_description": "Sinus est un remède naturel conçu pour soulager les symptômes des *sinusites*. En réduisant l'inflammation et en facilitant la respiration, il aide à éliminer les douleurs liées aux *sinusites chroniques* ou aiguës. L'efficacité est notable dès les premières utilisations, avec une amélioration significative après deux semaines de traitement."
        },
        {
            "image": "produit-2.png",
            "name": "SPERMO",
            "description": "Remède contre *l'infertilité masculine*",
            "full_description": "SPERMO est un traitement naturel visant à améliorer la *fertilité masculine*. Il stimule la production de *spermatozoïdes* et améliore leur motilité, augmentant ainsi les chances de conception. Un traitement de 30 jours est recommandé pour obtenir des résultats optimaux."
        },
        {
            "image": "produit-3.png",
            "name": "INFECTICIDE",
            "description": "Lutte contre les *infections de tout genre : Brûlures vaginales, Syphilis, Gonorrhée, Plaies intestinales*",
            "full_description": "INFECTICIDE est un puissant antibactérien naturel qui combat les *infections vaginales*, *intestinales*, et d'autres origines. Il aide à soulager les symptômes douloureux tout en stimulant les défenses naturelles de l'organisme pour prévenir les récidives. Un traitement d'un mois est recommandé pour une guérison complète."
        },
        {
            "image": "produit-4.png",
            "name": "GRAND PURIFICATEUR",
            "description": "Purifie l'organisme, efficace contre les *hémorroïdes internes et externes*",
            "full_description": "Le GRAND PURIFICATEUR est un remède naturel destiné à purifier l'organisme en agissant sur les *hémorroïdes internes* et *externes*. Il aide à réduire l'inflammation, soulage la douleur et favorise la guérison des tissus endommagés. Un soulagement notable se fait sentir après quelques jours d'utilisation."
        },
        {
            "image": "produit-5.png",
            "name": "STÉFINISH",
            "description": "Remède efficace contre *l'infertilité féminine*",
            "full_description": "STÉFINISH est un remède naturel conçu pour lutter contre *l'infertilité féminine* en régulant le cycle menstruel et en stimulant la *fertilité*. Il améliore la santé reproductive générale, avec des résultats visibles après trois mois de traitement."
        },
        {
            "image": "produit-6.png",
            "name": "FER DE LANCE",
            "description": "Lutte contre *la faiblesse sexuelle et l'éjaculation précoce*",
            "full_description": "FER DE LANCE est un stimulant naturel pour les hommes, aidant à combattre la *faiblesse sexuelle* et *l'éjaculation précoce*. Il améliore les performances sexuelles et la confiance en soi, avec des effets visibles dès les premières prises."
        },
        {
            "image": "produit-7.png",
            "name": "HÉPATO BILIAIRE",
            "description": "Remède contre *l'hépatite A, B & C, les problèmes biliaires, et le paludisme*",
            "full_description": "HÉPATO BILIAIRE est un remède naturel puissant qui aide à soigner les affections du *foie* et de la *vésicule biliaire*, y compris *l'hépatite* et le *paludisme*. Il purifie le sang et renforce les défenses naturelles de l'organisme, avec des résultats notables après un mois de traitement."
        },
        {
            "image": "produit-8.png",
            "name": "MERCI TONTON",
            "description": "Solution contre *l'érection molle chez les hommes*",
            "full_description": "MERCI TONTON est une solution naturelle conçue pour aider les hommes à retrouver des *érections fermes* et durables. Ce remède améliore la circulation sanguine dans la région génitale et renforce les muscles du plancher pelvien, avec des résultats visibles dès la première semaine d'utilisation."
        },
        {
            "image": "produit-9.png",
            "name": "FRIGIDOS",
            "description": "Intervient dans les cas de *manque de sensation lors des rapports sexuels chez les femmes*",
            "full_description": "FRIGIDOS est un remède naturel qui stimule les *sensations* et la *libido* chez les femmes. Il améliore la réponse sexuelle en augmentant le flux sanguin vers les organes génitaux, aidant ainsi à retrouver une vie sexuelle épanouie. Les premiers résultats apparaissent après deux semaines de traitement."
        },
        {
            "image": "produit-10.png",
            "name": "HEROS",
            "description": "Soigne *les infections intestinales*",
            "full_description": "HEROS est un remède efficace contre les *infections intestinales*, aidant à réduire les inflammations et à réguler le transit intestinal. Il favorise la guérison des parois intestinales et améliore la santé digestive générale. Un traitement de 15 jours est recommandé pour une guérison complète."
        },
        {
            "image": "produit-11.png",
            "name": "ULCERURE",
            "description": "Solution contre *les ulcères sous toutes leurs formes*",
            "full_description": "ULCERURE est un traitement naturel qui agit rapidement pour soulager et guérir les *ulcères gastriques* et *duodénaux*. Il apaise les parois de l'estomac, réduit l'acidité et favorise la cicatrisation. Les premiers signes de guérison apparaissent après une semaine d'utilisation."
        }
    ]

    const [currentProduit, setCurrentProduit] = useState<{
        image: string;
        name: string;
        description: string;
        full_description: string;
    } | null>(null)


    const [isPopupVisible, setPopupVisible] = useState(false)

    useEffect(() => {
        // Fonction de gestion de l'événement clavier
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                console.log(isPopupVisible)
                console.log('Touche Échap pressée');
                setPopupVisible(false)
                console.log(isPopupVisible)
                document.body.style.overflow = 'auto';


            }

            if (event.key === 'Backspace') {
                console.log(isPopupVisible)

                console.log('Touche Retour pressée');
                setPopupVisible(false)
                console.log(isPopupVisible)
                document.body.style.overflow = 'auto';

            }
        };

        // Ajoute l'écouteur de l'événement "keydown"
        window.addEventListener('keydown', handleKeyDown);

        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                document.body.style.overflow = 'auto';

                setPopupVisible(false)
            }
        }


        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    useEffect(() => {
        console.log('isPopupVisible:', isPopupVisible);
    }, [isPopupVisible]);

    return (
        <section id='produits' className='relative flex  justify-center items-center py-10 my-10'>
            <div

                className={` fixed top-0 ${isPopupVisible ? "flex" : "hidden"} justify-center items-center h-full w-full bg-black/40 backdrop-blur-sm z-50`}>
                <motion.div
                    ref={popupRef}
                    variants={Animations.opacity({ duration: 0.2 })}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className='flex flex-col w-[550px] max-w-[90vw] max-h-[80vh] bg-white rounded-xl overflow-y-auto scroll-smooth'>
                    <div className='flex justify-between p-2'>
                        <div className='bg-green-500 border border-white ring ring-green-500 px-4 py-2 rounded-lg text-white self-start'>
                            CEMENA-TOGO
                        </div>
                        <button onClick={() => {



                            document.body.style.overflow = 'auto';


                            setPopupVisible(!isPopupVisible)

                        }} className='p-4 rounded-full bg-red-500'>
                            <img src="/icons/close.png" alt="" className='h-4' />
                        </button>
                    </div>
                    <div className='relative w-full flex flex-col '>
                        {currentProduit && (
                            <>
                                <img src={`/produits/${currentProduit.image}`} alt="" className='h-40 self-center' />
                                <div className='p-2 mb-10'>
                                    <h2 className='text-green-700 font-semibold font-bricolage'>{currentProduit.name}</h2>
                                    <p className='text-start'>
                                        {currentProduit.full_description.split("*").map((element3, index) => (
                                            <span
                                                key={index}
                                                className={index % 2 === 1 ? "text-red-600 font-semibold" : "text-black"}
                                            >
                                                {element3}
                                            </span>
                                        ))}
                                    </p>
                                </div>

                                <div className=' absolute bottom-0 w-full grid grid-cols-2 justify-center space-x-1 p-2 bg-white'>
                                    <a href="tel:+22893452172" target='_blank' className='flex justify-center items-center bg-green-600 border-2 border-green-500 
                                    px-10 py-2
                                 
                                    rounded-md h-auto'>
                                        <p className='text-white'>Appeler</p>
                                    </a>
                                    <a href='https://wa.me/22893452172' target='_blank' className=' bg-white border-2 border-green-500 rounded-md p-2'>
                                        <div className='flex justify-center items-center space-x-2 text-green-600'>
                                            <img src="/icons/whatsapp.png" alt="" className='h-9' />
                                            Whatsapp
                                        </div>


                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>

            </div>
            <div className='m-2'>
                <div className='flex items-center justify-center mb-5'>
                    <img src="/utils/feuille.png" alt="" className='h-10' />
                    <p className=' uppercase text-lg text-green-600 font-medium '>Nos PRODUITS</p></div>
                <div className='max grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
                    {
                        produits.map((element) => (
                            <button onClick={() => {
                                document.body.style.overflow = 'hidden';

                                setPopupVisible(!isPopupVisible)
                                setCurrentProduit(element)
                            }} key={element.name} className='relative group
                           flex flex-col items-center justify-center
                            my-6
                             bg-white hover:bg-green-50 border-2 border-green-500 rounded-2xl '>
                                <motion.img src="/produits/produit-1.png" alt=""
                                    variants={Animations.scale({ duration: 0.3 * produits.indexOf(element), })}
                                    initial="hidden"
                                    whileInView="show"
                                    className='absolute  -top-8  h-24 group-hover:scale-125' />
                                <div className='w-full h-full  flex flex-col justify-between items-center p-2 mt-16 text-center'>

                                    <div>
                                        <p className='text-xl text-green-800  font-bricolage font-semibold '>{element.name}</p>
                                        <p>{element.description.split("*").map((element2) => (<span key={element2} className={`${element.description.split("*").indexOf(element2) % 2 === 1 ? "text-red-600 font-semibold" : "text-black"}`}>{element2} </span>))}</p>
                                    </div>
                                    <a className='text-white hover:text-white w-full py-3 bg-green-600 hover:bg-green-900 border border-white hover:ring ring-green-900 rounded-xl'>Voir</a>
                                </div>

                            </button>
                        ))
                    }
                </div>

            </div>


        </section>
    )
}

export default Produits