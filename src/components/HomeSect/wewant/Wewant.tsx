import React from 'react'
import PxWrapper from '../../shares/PxWrapper'
import Image from 'next/image'

const Wewant = () => {
    return (
        <PxWrapper>
                <div className="md:grid grid-cols-12 flex flex-col">
                    <div className="col-span-4 mb-10 lg:mb-0">
                        <Image src="/wewant.png" alt='parentsof' height={450} width={450} />
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-7">
                        <h2 className='text-3xl mb-8 bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text'>Parents of our high achievers are ready to do what it takes to solve these problems...</h2>
                        <ul className='relative checklist-ul'>
                            <li className='text-lg listyle text-[#758EB3]'>Ready to invest in the guidance and support of a luxury service.
                            </li>
                            <li className='text-lg listyle text-[#758EB3]'>Willing to trust in our ability to strategize effectively, point your child in the right direction, and break the process into manageable, stress-free steps.
                            </li>
                            <li className='text-lg listyle text-[#758EB3]'>Able to surrender to the process to allow us to do our job and give your child a clear direction and the tools necessary to achieve their college admissions goals
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='text-lg mt-10 md:px-20 text-[#758EB3]'>We will take your child through a proven process for opening up more opportunities at top universities with more predictable results, taking clear steps every week to move their profile in the right direction so that they can get into one or more of their top 3 choices!</p>
            </PxWrapper>
    )
}

export default Wewant
