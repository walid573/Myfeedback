/* eslint-disable no-unused-vars */
import React from 'react'

function Carousel() {
   const Card = [
        {
            id:1,
            img:"./c1.png",
            title:"Bottega",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:2,
            img:"./c2.png",
            title:"Bottega",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:3,
            img:"./c3.png",
            title:"Bottega",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:4,
            img:"./c4.png",
            title:"Bottega",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
    ]
  return (
    <section className='w-full bg-white mb-12'>
        <div className='container w-full  md:h-[70vh] bg-[#1677BD] mx-auto rounded-lg '>
            <h1 className='text-4xl px-8 py-7 text-white font-semibold'>Find the best restaurant ratings below</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-4 px-10'>
                {
                    Card.map(card => (
                        <div key={card.id} className='bg-[#F8F8F8] rounded-xl mb-4'>
                            <img className='object-cover w-full' src={card.img} alt={card.title} />
                            <div className='p-4'>
                                <h2 className='text-2xl font-semibold py-2 text-[#232323]'>{card.title}</h2>
                                <p className='text-[#8F8F8F] mt-2 mb-2'>{card.des}</p>
                                <div className='flex flex-row gap-2 mb-2'>
                                    {[...Array(5)].map((_, index) => (
                                        <img key={index} className='w-6 h-6' src="star.png" alt="star" />
                                    ))}
                                    <p className='font-semibold'>5.0</p>
                                    <p className='text-[#7A7A7A]'>(876 reviews)</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
  
export default Carousel