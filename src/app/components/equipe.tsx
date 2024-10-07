import React from 'react'

const Equipe = () => {
    const membres = [{ image: "/equipe/founder.png", poste: "Expert Management (PDG)", nom: "Nazifou KERIM", note: "4.5" }, { image: "/equipe/vice-pdg.png", poste: "Expert Design", nom: "Nom du Vice", note: "4.8" }, { image: "/equipe/marketing.png", poste: "Expert Marketing", nom: "Nom du Vice", note: "4.7" },]
    return (
        <div className='flex justify-center'>
            <div className='max my-10'>
                <h1 className=' my-6 font-bricolage text-center text-2xl md:text-4xl'>Notre Equipe d'Experts</h1>
                <div className='flex flex-wrap justify-center gap-4'>
                    {
                        membres.map((element) => (
                            <div key={element.poste} className='flex '>
                                <img src={element.image} alt="" className='w-40 object-contain' />
                                <div className='p-5 w-64'>
                                    <p className='font-bricolage font-bold text-lg'>{element.nom}</p>

                                    <p className='text-green-500'> {element.poste}</p>
                                    <div className='flex gap-1 text-zinc-700 my-3'>
                                        <img src="/icons/notation.png" alt="" className='h-6' />
                                        <p>(Noté {element.note}/5)</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src="/icons/facebook.png" alt="" className='h-8 w-8 p-2 rounded-full border shadow-md' />
                                        <img src="/icons/twitter.png" alt="" className='h-8 w-8 p-2 rounded-full border shadow-md' />
                                        <img src="/icons/linkedin.png" alt="" className='h-8 w-8 p-2 rounded-full border shadow-md' />
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Equipe