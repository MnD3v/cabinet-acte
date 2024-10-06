import React from 'react'

const Temoignages = () => {
    return (
        <div className='flex justify-center'>

            <div className='max'>
                <h1 className='my-9 font-jost'>Ce que disent nos etudiants</h1>

                <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full bg-zinc-400 flex justify-center items-center'>
                        <img src="/icons/arrow-go.png" alt="" className='h-6 rotate-180' />
                    </div>
                    <div className='flex flex-col items-center sm:flex-row gap-6'>

                        <img src="/students/student-1.png" alt="" className='h-36 self-center' />

                        <div className='flex flex-col w-96 max-w-[85%]'>
                            <img src="/icons/quote.png" alt="" className='h-10 opacity-20 self-start' />
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente mollitia. Accusantium impedit qui voluptatibus, iste magnam unde reprehenderit expedita iusto, perspiciatis, doloremque quidem asperiores eaque illo dignissimos tempora modi!</p>
                            <img src="/icons/quote.png" alt="" className='h-10 opacity-20 rotate-180 self-end' />

                            <h2 className='font-black font-bricolage'>Marcus Le noir</h2>
                            <p className='text-orange-500'>Etudiant en Design</p>
                        </div>
                    </div>
                    <div className='h-10 w-10 rounded-full bg-green-500 flex justify-center items-center'>
                        <img src="/icons/arrow-go.png" alt="" className='h-6' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Temoignages