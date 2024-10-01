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
            "description": "Remede contre les *sinusites*",
            "full_description": "Le remède Sinus est conçu pour soulager et guérir les *sinusites* en moins de deux semaines. Grâce à sa formule 100% naturelle, il réduit l'inflammation des sinus, améliore la respiration et élimine les douleurs associées. Ce produit est particulièrement efficace contre les sinusites chroniques et récurrentes, offrant un soulagement rapide dès les premières prises."
        },
        {
            "image": "produit-1.png",
            "name": "Hepatus",
            "description": "Remede contre l'*hepatite B*",
            "full_description": "Hepatus est un remède puissant qui combat l'*hépatite B* en renforçant les fonctions hépatiques et en éliminant les toxines du foie. Après 30 jours d'utilisation régulière, les symptômes de l'hépatite sont considérablement réduits, avec une amélioration visible des marqueurs de santé hépatique. Son efficacité est prouvée dans la régénération des cellules hépatiques endommagées."
        },
        {
            "image": "produit-1.png",
            "name": "Menopus",
            "description": "Previent la *menopose precoce*",
            "full_description": "Menopus est un traitement naturel conçu pour prévenir la *ménopause précoce*. En stimulant la production hormonale et en régulant le cycle menstruel, Menopus aide à retarder les symptômes liés à la ménopause. Une utilisation régulière de trois mois permet de stabiliser les fonctions hormonales et d'améliorer le bien-être général."
        },
        {
            "image": "produit-1.png",
            "name": "Hernus",
            "description": "Lutte contre le developpement de *l'herni*",
            "full_description": "Hernus est un traitement efficace pour freiner le développement de *l'hernie*. Il agit en renforçant les tissus et en réduisant l'inflammation au niveau de la hernie. Ce produit permet un soulagement notable des douleurs après une semaine d'utilisation, avec des résultats optimaux au bout de 30 jours."
        },
        {
            "image": "produit-1.png",
            "name": "Athmus",
            "description": "Remede efficace contre *l'asthme*",
            "full_description": "Athmus est un remède naturel qui aide à gérer et à prévenir les crises d'*asthme*. Il agit en améliorant les fonctions respiratoires et en réduisant les inflammations des voies respiratoires. Après 15 jours d'utilisation, les patients ressentent une nette amélioration de leur respiration, et la fréquence des crises d'asthme est considérablement réduite."
        },
        {
            "image": "produit-1.png",
            "name": "Ulcerus",
            "description": "Traite complètement les *ulcères*",
            "full_description": "Ulcerus est un remède naturel qui soigne les *ulcères* gastriques et duodénaux. Sa formule apaisante permet de réduire rapidement les douleurs et de cicatriser les plaies internes. Les premiers signes de guérison apparaissent après une semaine, et un traitement complet de 30 jours est recommandé pour une rémission totale."
        },
        {
            "image": "produit-1.png",
            "name": "Palus",
            "description": "Previent et Guerit le *paludisme*",
            "full_description": "Palus est un remède qui prévient et traite efficacement le *paludisme*. Sa combinaison unique d'ingrédients actifs renforce le système immunitaire et élimine le parasite responsable du paludisme. Après une cure de 7 jours, les symptômes disparaissent et les rechutes sont considérablement réduites. Ce produit est également recommandé en prophylaxie pour les zones à risque."
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