


import { motion } from "framer-motion";
import Animations from "./utils/item";

const Temoignages = () => {


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
            <div className="max p-4 ">


             

                <h2 className=' my-6 font-abel font-bold text-center text-xl md:text-2xl font-roboto '>Quelques temoignages de nos etudiants </h2>
                <div


                    className=" grid md:grid-cols-2 gap-3  md:gap-9"
                >
                    {
                        commentaires.map((element) => (


                            <div
                                key={element.description}
                                className="p-3 md:p-4 border hover:border-e_orange hover:scale-95 ring-1 ring-offset-1 ring-gray-300 hover:ring-e_orange">
                                <motion.div
                                    variants={Animations.leftToRight({ duration: 0.4 })}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}

                                    className=""
                                >
                                    <img src="/icons/quote.png" alt=""

                                        className='h-10 opacity-20 ' />
                                </motion.div>
                                <div className="flex gap-2">
                                    <img src={"/students/"+element.image} alt="" className="h-24"/>
                             <div className="items-start">
                             <motion.h2
                                    variants={Animations.leftToRight({ duration: 0.4, })}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className='font-semibold text-xl font-roboto text-e_orange pt-4' >{element.nom}</motion.h2>
                        
                             </div>
                                </div>
                                <motion.p
                                    variants={Animations.scale({ duration: .6 })}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className='  '>{element.description}</motion.p>
                        
                                <div className="w-full flex justify-end">
                                    <motion.div
                                        variants={Animations.bottomToTop({ duration: 0.4 })}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        className="self-end"
                                    >
                                        <img src="/icons/quote.png" alt=""

                                            className='h-10 opacity-20 rotate-180 ' />
                                    </motion.div>

                                </div>






                            </div>
                        ))
                    }


                </div >
            </div >





        </div >
    );
};

export default Temoignages;


