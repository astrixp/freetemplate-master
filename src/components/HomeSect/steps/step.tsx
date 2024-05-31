import PxWrapper from '@/components/shares/PxWrapper'
import React from 'react'

const data = [
    {
        id: 1,
        title: "Step 1",
        instructions: "Book a 45-minute Strategy Session",
        description: "Gain clarity on your childs current college admissions profile and learn what will be necessary for them to gain acceptance at the current universities on their list."
    },
    {
        id: 2,
        title: "Step 2",
        instructions: "Join the College Mastermind Family",
        description: "If we are a good fit for your family and if we can help, we will invite your child to join us! Then the fun begins, and we’ll get right to work on developing their profile."
    }
]
const Steps = () => {

    return (
        <div className="stepbg">
            <PxWrapper>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:px-20">
                    {
                        data.map((i) => (
                            <div className="bg-white px-10 py-10 shadow-2xl" key={i.id}>
                                <h3 className='text-center bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text mb-5 text-3xl md:text-4xl'>{i.title}</h3>
                                <h5 className='text-center mb-4 text-2xl '>{i.instructions}</h5>
                                <p className='text-center text-[#758EB3] text-lg'>{i.description}</p>
                            </div>

                        ))
                    }
                </div>
            </PxWrapper>
        </div>
    )
}

export default Steps
