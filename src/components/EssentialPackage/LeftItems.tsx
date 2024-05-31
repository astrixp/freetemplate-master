import Image from 'next/image'
import React from 'react'

const LeftItems = () => {
    return (
        <div>
            <section className='shadow-2xl rounded-xl mt-5 px-4 py-8'>
                <div className="flex items-center justify-between py-2 border-b-2 border-[#D9D9D9]">
                    <Image src="/packages/psat.png" alt='psat' height={66} width={66} />
                    <small>SAT/ACT Prep</small>
                </div>
                <div className="flex items-center justify-between py-2 border-b-2 border-[#D9D9D9]">
                    <Image src="/packages/our.png" alt='psat' height={66} width={66} />
                    <small>Duration</small>
                </div>
                <div className="flex items-center justify-between py-2 border-b-2 border-[#D9D9D9]">
                    <Image src="/packages/Mask.png" alt='psat' height={66} width={66} />
                    <small>Duration</small>
                </div>
                <div className="flex items-center justify-between py-2 border-b-2 border-[#D9D9D9]">
                    <Image src="/packages/Maskgroup.png" alt='psat' height={66} width={66} />
                    <small>Duration</small>
                </div>

            </section>
            <div className="w-full m-auto text-center">
                <button type="button" className="text-white text-center m-auto text-base bg-textColor mt-[-27px] rounded-lg py-3 px-5">Add on Items</button>
            </div>

        </div>
    )
}

export default LeftItems
