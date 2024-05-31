import React from 'react'
import PxWrapper from '../../shares/PxWrapper'

const IfYou = () => {
    return (
        <PxWrapper>
            <div className="mt-10 bg-custom-gradient bg-h-[80px] rounded-lg text-white items-center p-[20px]">
                <p className='text-center text-3xl md:text-4xl'>If you are serious about reaching your college <br /> admissions goals, schedule your strategy session now</p>
                <div className="w-full text-center py-8">
                    <button className='h-[38px] text-center mt-2 bg-white text-black rounded-md'>
                        <span className='px-2 text-sm md:text-base'>BOOK YOUR STRATEGY SESSION NOW!</span>
                    </button>
                </div>
            </div>
        </PxWrapper>
    )
}

export default IfYou
