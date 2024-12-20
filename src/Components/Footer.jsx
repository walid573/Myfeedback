import React from 'react'

function Footer() {
  return (
    <section className=' bg-[#F8F8F8]'>
        <div className='w-full container mx-auto '>
            <div className='flex flex-3 items-start justify-center gap-[250px] py-12 '>
                <div>
                    <h1 className='text-3xl font-bold pb-2'>About</h1>
                    <p className='text-[#5E5E5E] text-lg'>About MyFeedback</p>
                    <p className='text-[#5E5E5E] text-lg'>Investor Relations</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold pb-2'>MyFeedback</h1>
                    <p className='text-[#5E5E5E] text-lg'>MyFeedback for business</p>
                    <p className='text-[#5E5E5E] text-lg'>Collections</p>
                    <p className='text-[#5E5E5E] text-lg'>Talk</p>
                    <p className='text-[#5E5E5E] text-lg'>Events</p>
                    <p className='text-[#5E5E5E] text-lg'>MyFeedback blogs</p>
                    <p className='text-[#5E5E5E] text-lg'>Support</p>
                    <p className='text-[#5E5E5E] text-lg'> Developers</p>
                </div>
                <div className='flex flex-col gap-3 '>
                <div>
                    <h1 className='text-3xl font-bold'>Languages</h1>
                    <p className='flex items-center gap-1 text-[#5E5E5E] text-lg'>English <img className='h-2 w-3' src="./arrow.png" alt="" /></p>
                    
                </div>
                <div>
                    <h1 className='text-3xl font-bold' >Countries</h1>
                    <p className='flex items-center gap-1 text-[#5E5E5E] text-lg'>Singapour<img className='h-2 w-3' src="./arrow.png" alt="" /></p>
                </div>
                </div>
            </div>
            <h1 className='text-md font-semibold text-center p-4'>
            Copyright &copy; Septembre 2024`` myfeedback, designed by scott
            </h1>
        </div>
    </section>
  )
}

export default Footer