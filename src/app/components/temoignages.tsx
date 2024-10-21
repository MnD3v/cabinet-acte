
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
            "image": "mohamed.png",
            "description": "Mon parcours expertise comptable au cabinet ACTe m’a permis de développer des compétences pratiques en comptabilité grâce à des formateurs qualifiés et à des études de cas concrètes. L’encadrement était excellent et l’ambiance professionnelle m’a aidée à mieux comprendre le monde de la comptabilité. En seulement trois mois, j’ai acquis des connaissances solides que je peux désormais appliquer dans mon travail. Oui, j’ai été pleinement satisfaite de la formation. Le cabinet ACTe a non seulement répondu à mes attentes, mais les a également dépassées. Les cours étaient bien structurés, les formateurs étaient disponibles pour répondre à toutes mes questions, et le contenu de la formation était en phase avec les compétences que je souhaitais acquérir. J’ai vraiment apprécié le professionnalisme et l’accompagnement tout au long du processus.Je recommanderai volontier le cabinet ACTe à d’autres personnes car c’est un excellent environnement pour apprendre et se développer.",
            "nom": "MOHAMED Richadatou",
            "domaine": "Étudiante en développement web"
        },
        {
            "image": "sodou.png",
            "description": "Ma formation au cabinet ACTe, parcours expertise comptable et CMD a été enrichissante. L’expertise des formateurs m’ont permis de développer de nouvelles compétences dans le domaine du management et de la technologie. Leur capacité à adapter le contenu de la formation à nos besoins individuels a vraiment fait la différence. Absolument ! Le cabinet ACTe a non seulement répondu à mes attentes, mais a aussi dépassé certaines d’entre elles. J’ai acquis des compétences pratiques qui me seront précieuses pour ma carrière professionnelle future. OUI, je recommande vivement le cabinet ACTe à toute personne cherchant à développer ses compétences. La qualité de l’enseignement et l’approche personnalisée font de ce cabinet un lieu idéal pour se former.",
            "nom": "SODOU Sévérine",
            "domaine": "Étudiant en développement mobile"
        },
        {
            "image": "matimain.png",
            "description": "Ma formation en assistant de gestion au cabinet a été très fructueuse dans le sens où les cours étaient vraiment axés sur le module que j'ai choisi et j'ai vraiment aimé. J'ai été satisfaite de l'enseignement et j'ai vraiment acquis des compétences outre ce que je suis venue chercher. Sans hésiter, je recommande vivement le Cabinet ACTe à tous ceux qui veulent se faire former. Le cabinet ACTe m'a accordé un stage que je fais actuellement.",
            "nom": "MATIMAIN Colette",
            "domaine": "Étudiant en design graphique"
        },
        {
            "image": "massaba.png",
            "description": "Ma formation au cabinet ACTe a été en ce qui me concerne un vrai éveil de conscience. Une expérience passionnante et inspirante au cours de laquelle j'ai pu réaliser les défis qui m'attendent dans le monde professionnel, m'armer des compétences nécessaires et pratiquer pour bâtir la confiance en soi et une mentalité pour y faire face. La formation a répondu à mes attentes et a été satisfaisante. Je recommande le cabinet à tout jeune ayant un esprit d'entreprenariat",
            "nom": "MASSABA Leben Y.",
            "domaine": "Étudiante en management"
        },

        {
            "image": "tam.png",
            "description": "Ma formation en parcours expertise comptable au cabinet acte était excellente vue la discipline et la rigueur. J'ai été satisfaite vu que mon objectif a été atteint, la formation était un succès pour moi. Cette formation m'a apporté d'abord l'intégration sociale ensuite les connaissances nécessaires pour mon parcours professionnel. Oui je vais recommander une ou même plusieurs personnes d’aller suivre leur formation au cabinet ACTe.",
            "nom": "TAMASSI Carolle",
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

                                    <div className='flex flex-col w-96 max-w-[85vw]'>
                                        <motion.div
                                            variants={Animations.leftToRight({ duration: 0.4 })}
                                            initial="hidden"
                                            whileInView="show"
                                            className=""
                                        >
                                            <img src="/icons/quote.png" alt=""

                                                className='h-10 opacity-20 ' />
                                        </motion.div>
                                        <motion.p
                                            variants={Animations.opacity({ duration: 1.2 })}
                                            initial="hidden"
                                            whileInView="show"
                                            className='text-lg'>{element.description}</motion.p>
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
                                        {/* <motion.p
                                            variants={Animations.leftToRight({ duration: 0.7, })}
                                            initial="hidden"
                                            whileInView="show"
                                            className='text-orange-500'>{element.domaine}</motion.p> */}
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


