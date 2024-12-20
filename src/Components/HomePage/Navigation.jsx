import React from 'react'

function Navigation() {
    
  return (
    <section className='mb-8 '>
        <div className='grid grid-cols-6 md:grid-cols-12'>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./All.png" alt="" />
                <h1 className='text-[#AFAFAF] font-semibold '>All</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center border-b-2 border-[#1677BD]   '>
                <img className='w-8 h-8 ' src="./resturent.png" alt="" />
                <h1 className='text-[#1677BD] font-semibold'>Restaurants</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./hotels.png" alt="" />
                <h1 className='text-[#AFAFAF] font-semibold'>Hotels</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./home.png" alt="" />
                <h1 className='text-[#AFAFAF] font-semibold'>Home services</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./hanger.png" alt="" />
                <h1 className='text-[#AFAFAF] font-semibold'>Shopping</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./car.png" alt="" />
                <h1 className='text-[#AFAFAF] font-semibold'>Car location</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./brush.png" alt="" />
                <h1 className='text-[#AFAFAF] font-semibold'>Beauty & Spa</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./dog.png" alt="" />
                <h1 className='text-[#AFAFAF] font-semibold'>Park</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./mask.png" alt="" />
                <h1 className='text-[#AFAFAF] font-semibold'>museum</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./cup.png" alt="" />
                <h1 className='text-[#AFAFAF]  font-semibold'>Car wash</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./bear.png" alt="" />
                <h1 className='text-[#AFAFAF] font-semibold'>Bars</h1>
            </div>
            <div className='container p-4 space-y-1 mx-auto flex flex-col items-center'>
                <img className='w-8 h-8 ' src="./dumble.png" alt="" />
                <h1 className='text-[#AFAFAF] font-semibold'>Gyms</h1>
            </div>
            
        </div>
    </section>
  )
}

export default Navigation