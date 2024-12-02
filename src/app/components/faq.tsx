import { useState } from 'react';
import { motion } from 'framer-motion';
import Animations from './utils/item';

export default function FAQ() {
  const faqData = [
    {
      question: "Est-il possible de payer les frais de formation par tranche ?",
      answer: "Oui, nous offrons la possibilité de payer les frais de formation en plusieurs tranches pour mieux s'adapter à votre budget. Contactez notre service administratif pour connaître les modalités."
    },
    {
      question: "Proposez-vous des cours à domicile ?",
      answer: "Oui, nous proposons des cours à domicile dans certaines régions. Cette option est idéale pour les jeunes qui préfèrent apprendre dans un environnement familier. Veuillez vérifier la disponibilité dans votre zone."
    },
    {
      question: "Les cours sont-ils également disponibles en ligne ?",
      answer: "Absolument ! Nous avons une plateforme d'apprentissage en ligne qui permet aux étudiants de suivre les cours où qu'ils soient, avec des ressources interactives et un accompagnement personnalisé."
    },
    {
      question: "Quels sont les domaines de formation proposés ?",
      answer: "Nous offrons des formations dans divers domaines tels que les langues, les compétences numériques, la préparation aux examens et le développement personnel."
    },
    {
      question: "Comment s'inscrire à une formation ?",
      answer: "Vous pouvez nous rendre visite dans l’un de nos centres. Notre équipe est là pour vous accompagner à chaque étape."
    }
  ];
  

  const [activeIndex, setActiveIndex] = useState<number|null>(null);

  const handleToggle = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='flex justify-center'>
      <div className='max p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <motion.img src="/faq.png" alt="" 
        
        variants={Animations.leftToRight({ duration: 0.1  })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='w-full max-md:h-80 max-md:w-full max-md:object-cover'/>
       <div>
        <motion.div 
            variants={Animations.scale({ duration: 0.1  })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >


        <h2 className='text-e_orange font-bold'>Notre FAQ</h2>
        <p className='my-2'>Retrouvez ici les question fréquemment posées</p>
        </motion.div>
 

       <ul style={{ listStyleType: 'none', padding: 0 }}>
        {faqData.map((item, index) => (
          <motion.li key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}
          variants={Animations.bottomToTop({ duration: 0.1*(index+1)  })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          >
            <button 
              onClick={() => handleToggle(index)} 
              className='flex justify-between w-full'
            >
              <span className='text-start font-bold'>{item.question}</span>
              <div className='flex justify-center items-center h-12 w-12 bg-e_orange/20 flex-shrink-0 p-2'>
              <span style={{ fontSize: '24px' }} className='text-e_orange font-bold'>
                {activeIndex === index ? '-' : '+'}
              </span>
              </div>
             
            </button>
            { (
             <motion.div
             initial={{ maxHeight: '0px', opacity: 0 }}
             animate={activeIndex === index ? { maxHeight: '500px', opacity: 1 } : { maxHeight: '0px', opacity: 0 }}
             transition={{ duration: 0.6 }}
             className="overflow-hidden"
           >
             <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
               {item.answer}
             </p>
           </motion.div>
            )}
          </motion.li>
        ))}
      </ul>
       </div>
      </div>
      
    </div>
    </div>
  );
}
