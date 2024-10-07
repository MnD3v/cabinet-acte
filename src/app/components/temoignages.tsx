
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { motion } from "framer-motion";
import Animations from "./utils/item";

const Temoignages = () => {
    // Références pour les boutons
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    const commentaires = [
        {
            "image": "student-1.png",
            "description": "Grâce à cette formation, j'ai pu maîtriser les bases du développement mobile et créer mes premières applications. Le contenu est à jour et les formateurs sont très compétents. Je recommande vivement ce programme à tout aspirant développeur mobile.",
            "nom": "Kossi Mensah",
            "domaine": "Étudiant en développement mobile"
        },
        {
            "image": "student-2.png",
            "description": "La créativité et l'innovation sont au cœur de ce programme. J'ai appris à transformer mes idées en designs professionnels. Les projets pratiques m'ont vraiment aidée à améliorer mes compétences en design graphique.",
            "nom": "Akouvi Amétépé",
            "domaine": "Étudiant en design graphique"
        },
        {
            "image": "student-3.png",
            "description": "Cette formation en management a révolutionné ma manière d'aborder les projets et de gérer les équipes. Les études de cas et les mises en situation sont particulièrement enrichissantes et permettent de se préparer au monde professionnel.",
            "nom": "Komla Anani",
            "domaine": "Étudiante en management"
        },
        {
            "image": "student-4.png",
            "description": "Le programme de développement web m'a permis de maîtriser les langages de programmation essentiels et de réaliser des projets concrets. J'ai acquis des compétences solides qui me seront très utiles dans ma carrière de développeur.",
            "nom": "Sena Ayaba",
            "domaine": "Étudiante en développement web"
        }
    ]


    return (
        <div className="relative flex flex-col items-center overflow-hidden">
            <div className="max">
                <h1 className=' my-6 font-bricolage text-center text-2xl md:text-4xl'>Ce que disent nos <span className="text-green-500">étudiants</span> </h1>
                <Swiper

                    modules={[Navigation, Pagination]}  // On spécifie les modules utilisés
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    onBeforeInit={(swiper) => {
                        // Vérifie que swiper.params.navigation est un objet (non juste "true")
                        if (typeof swiper.params.navigation === 'object') {
                            // On "cast" (coerce) pour dire à TypeScript que c'est un objet avec des propriétés
                            (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
                            (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
                        }
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    className=""
                >
                    {
                        commentaires.map((element) => (
                            <SwiperSlide
                                key={element.image}
                                className="cursor-pointer">
                                <div className='flex flex-col items-center sm:flex-row justify-center gap-6 pb-10'>

                                    <motion.img src={"/students/" + element.image} alt=""
                                        variants={Animations.scale({ duration: 0.3 })}
                                        initial="hidden"
                                        whileInView="show"
                                        className='h-36 self-center' />

                                    <div className='flex flex-col w-96 max-w-[75vw]'>
                                        <motion.div
                                            variants={Animations.leftToRight({ duration: 0.4 })}
                                            initial="hidden"
                                            whileInView="show"
                                            className=""
                                        >
                                            <img src="/icons/quote.png" alt=""

                                                className='h-10 opacity-20 ' />
                                        </motion.div>
                                        <p className='text-lg'>{element.description}</p>
                                        <motion.div
                                            variants={Animations.bottomToTop({ duration: 0.4 })}
                                            initial="hidden"
                                            whileInView="show"
                                            className="self-end"
                                        >
                                            <img src="/icons/quote.png" alt=""

                                                className='h-10 opacity-20 rotate-180 ' />
                                        </motion.div>


                                        <motion.h2
                                            variants={Animations.leftToRight({ duration: 0.4, })}
                                            initial="hidden"
                                            whileInView="show"
                                            className='font-black font-bricolage'>{element.nom}</motion.h2>
                                        <motion.p
                                            variants={Animations.leftToRight({ duration: 0.7, })}
                                            initial="hidden"
                                            whileInView="show"
                                            className='text-orange-500'>{element.domaine}</motion.p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }


                </Swiper >
            </div >


            {/* Boutons de navigation */}
            <div className="flex gap-2 justify-center my-6" >
                <div ref={prevRef} className="flex items-center justify-center h-8 w-12 rounded-full border shadow-md bg-zinc-400 cursor-pointer"> <img src="/icons/arrow-go.png" alt="" className="h-5 rotate-180 " /></div>
                <div ref={nextRef} className="flex items-center justify-center h-8 w-12 rounded-full border shadow-md bg-zinc-400 cursor-pointer"> <img src="/icons/arrow-go.png" alt="" className="h-5" /></div>
            </div>


        </div >
    );
};

export default Temoignages;


