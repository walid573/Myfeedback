import { Button } from '@nextui-org/react'
import React from 'react'

function Trend() {
    const TrendCard = [
        {
            id:1,
            img:"./t1.png",
            title:"Bella Italia",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:2,
            img:"./t2.png",
            title:"Little Shucker",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:3,
            img:"./t3.png",
            title:"Marafuku Ramen",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:4,
            img:"./t4.png",
            title:"Bottega",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:5,
            img:"./t5.png",
            title:"Arabia Nights",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:6,
            img:"./t6.png",
            title:"Lokma",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:7,
            img:"./t7.png",
            title:"The snug",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:8,
            img:"./t8.png",
            title:"Starbelly",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:9,
            img:"./t9.png",
            title:"Iori",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:10,
            img:"./t10.png",
            title:"Ngalley",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:11,
            img:"./t11.png",
            title:"diogonal",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
        {
            id:12,
            img:"./t12.png",
            title:"Kitoko",
            des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            
        },
      
    ]
  return (
   <section className='mt-24 mb-6'>
    <div className='container mx-auto'>
        <h1 className='text-3xl font-bold'>The latest trends</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-4  pb-12  '>
        {
                    TrendCard.map(card => (
                        <div key={card.id} className=' bg-[#F8F8F8] rounded-xl hover:shadow-md '>
                            <img className='object-cover w-full' src={card.img} alt={card.title} />
                            <div className='p-4'>
                            <h2 className='text-2xl font-semibold py-2 text-[#232323]'>{card.title}</h2>
                            <p className='text-[#8F8F8F] mt-2 mb-2'>{card.des}</p>
                            <div className='flex flex-row gap-2 mb-2'>
                                <img className='w-6 h-6' src="star.png" alt="" />
                                <img className='w-6 h-6' src="star.png" alt="" />
                                <img className='w-6 h-6' src="star.png" alt="" />
                                <img className='w-6 h-6' src="star.png" alt="" />
                                <img className='w-6 h-6' src="star.png" alt="" />
                                <p className='font-semibold'>5.0</p>
                                <p className='text-[#7A7A7A]'>(876 reviews)</p>
                            </div>
                            </div>
                        </div>
                    ))
                }
        </div>

        <div className='flex flex-col items-center justify-center md:p-8 '>
            <h1 className='text-2xl font-semibold pb-2 '>Discover more cool restaurants</h1>
            <Button color='primary' radius='full' size='lg' className='bg-[#1677BD] px-5 '>Show more</Button>
        </div>
    </div>
   </section>
  )
}

export default Trend