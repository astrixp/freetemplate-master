import Image from 'next/image'
import React from 'react'

const Percentage = () => {
    return (
        <div className="w-full p-6 md:p-14 grid gap-10 bg-custom-gradient grid-cols-1 md:grid-cols-3 justify-center items-center">
            <div className="bg-white rounded-md px-5 py-5">
                <div className="h-[100px] text-center">
                    <Image src="/percentage/100.png" alt="100" className='m-auto' height={100} width={100} />
                </div>
                <p className='text-lg '>of high achievers got into a Top 30 university 2024</p>
            </div>
            <div className=" bg-white rounded-md px-5 py-5">
                <div className="h-[100px] text-center">
                    <Image src="/percentage/94.png" alt="94" className='m-auto' height={100} width={100} />
                </div>
                <p className='text-lg '>of our clients got one of their top 3 choices in 2 years.</p>
            </div>
            <div className="bg-white rounded-md px-5 py-5">
                <div className="h-[100px] text-center">
                    <Image src="/percentage/star.png" alt="star" className='m-auto' height={100} width={100} />
                </div>
                <p className='text-lg '> Perfect ACT scorers in 2024 School Year</p>
            </div>
        </div>
    )
}

export default Percentage
