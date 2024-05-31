import React from 'react'
import Image from 'next/image'
import PxWrapper from '@/components/shares/PxWrapper'

const Parentsof = () => {
    return (
        <div>
            <PxWrapper>
                <div className="md:grid grid-cols-12 flex flex-col">
                    <div className="col-span-4 mb-10 lg:mb-0">
                        <Image src="/parentsof.png" alt='parentsof' height={450} width={450} />
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-7">
                        <h2 className='text-3xl mb-8 bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text'>Parents of our high achievers are ready to do what it takes to solve these problems...</h2>
                        <ul className='relative checklist-ul'>
                            <li className='text-lg listyle text-[#758EB3]'>Your child is stressing out about top names.
                                You are seeing them really attach to big name universities,
                                and the selectivity rates of those colleges are really high
                            </li>
                            <li className='text-lg listyle text-[#758EB3]'>You are not sure your college list is good.   Your list is a combination of popular and/or local universities that everyone in the country or your area wants to attend.
                            </li>
                            <li className='text-lg listyle text-[#758EB3]'>Your child is not showing the level of drive, ownership, and initiative for the college admissions process, and you dont want to end up nagging and pushing them for the next few months or years.
                            </li>
                            <li className='text-lg listyle text-[#758EB3]'>You are swimming in a sea of admissions information.  Maybe you were born overseas or you see that college admissions has changed a lot in the past few years, and you are buried under conflicting information.
                            </li>
                            <li className='text-lg listyle text-[#758EB3]'>You are spending way too much time in Facebook groups trying to piece together an approach and nothing seems to give you real confidence and certainty that your plan will work.
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='text-lg mt-10 text-center text-[#758EB3]'>You need a predictable college admissions approach to take away your uncertainty, guidance to get things done efficiently, and peace of mind so that you can finally stop chasing after answers and information and get your child an actionable plan that you trust.</p>
            </PxWrapper>
        </div>
    )
}

export default Parentsof
