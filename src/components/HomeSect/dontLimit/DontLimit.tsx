import Image from 'next/image'
import React from 'react'
import PxWrapper from '../../shares/PxWrapper'

const DontLimit = () => {
    return (
        <PxWrapper>
            <div className="md:grid grid-cols-12 flex flex-col">
                <div className="col-span-4 mb-10 md:text-right lg:mb-0">
                    <Image src="/dontlimit.png" alt='dontlimit' height={450} width={450} />
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-7 text-left">
                    <h2 className='text-3xl md:text-4xl mb-10 bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text'>We dont limit spaces due to volume</h2>
                    <p className='text-xl text-[#758EB3] mb-8'>We do not take on thousands of students per year, and we care about our reputation, so we need to make sure that you are going to trust us to know this process and know what works.</p>
                    <button type="button" className="text-white text-base bg-custom-gradient  rounded-md py-3 px-5">Learn More</button>
                </div>
            </div>
            <div className="w-full text-center mt-10">
                <button type="button" className="text-white text-base bg-custom-gradient  rounded-md py-3 px-5">CLICK HERE TO BOOK YOUR STRATEGY SESSION NOW!</button>
            </div>
        </PxWrapper>
    )
}

export default DontLimit
