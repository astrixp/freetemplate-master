import Image from 'next/image'
import React from 'react'

const LeftCard = () => {
    return (
        <>
            <section className='shadow-2xl rounded-xl px-4 py-8'>
                <Image src="/packages/clgpackage.png" className='mb-5' alt='packages' width={250} height={200} />
                <div className="flex justify-between py-2 border-b-2 border-[#D9D9D9]">
                    <small>Sessions</small>
                    <small className='text-[#758EB3]'>35</small>
                </div>
                <div className="flex justify-between py-2 border-b-2 border-[#D9D9D9]">
                    <small>Support Meetings</small>
                    <small className='text-[#758EB3]'>8</small>
                </div>
                <div className="flex justify-between py-2 border-b-2 border-[#D9D9D9]">
                    <small>GPA</small>
                    <small className='text-[#758EB3]'>TOP 25% of applicants</small>
                </div>
                <div className="flex justify-between py-2 border-b-2 border-[#D9D9D9]">
                    <small>Test Scores</small>
                    <small className='text-[#758EB3]'>TOP 25% of applicants</small>
                </div>
                <div className="flex justify-between py-2 border-b-2 border-[#D9D9D9]">
                    <small>Value Credibility Level</small>
                    <small className='text-[#758EB3]'>Exceptional</small>
                </div>
            </section>
            <div className="w-full m-auto text-center">
                <button type="button" className="text-white text-center m-auto text-base bg-textColor mt-[-27px] rounded-lg py-3 px-5">Buy This Package</button>
            </div>
        </>
    )
}

export default LeftCard
