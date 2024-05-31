import Image from 'next/image'
import React from 'react'
import PxWrapper from '../../shares/PxWrapper'

const NoGurrante = () => {
    return (
        <PxWrapper>
            <div className="md:grid grid-cols-12 flex flex-col-reverse">
                <div className="col-span-7 text-left">
                    <h2 className='text-3xl md:text-4xl mb-10 bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text'>No guarantees, but there are proactive steps you can take to significantly enhance your chances of success.</h2>
                    <p className='text-xl text-[#758EB3] mb-8'>Admissions into your top choices has nothing to do with luck!</p>
                    <button type="button" className="text-white text-base bg-custom-gradient  rounded-md py-3 px-5">Learn More</button>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-4 mb-10 md:text-right lg:mb-0">
                    <Image src="/nogurantee.png" alt='nogurantee' height={450} width={450} />
                </div>
            </div>
        </PxWrapper>
    )
}

export default NoGurrante
