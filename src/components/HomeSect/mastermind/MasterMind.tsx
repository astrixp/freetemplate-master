import PxWrapper from '@/components/shares/PxWrapper'
import React from 'react'

const cards = [
    {
        id: 1,
        Nums: "01",
        title: "Typical Applicant Pool",
        description: "Your typical applicant pool as a high achiever is 3.9+ unweighted GPA, 1500+ SAT and 34+ ACT"
    },
    {
        id: 2,
        Nums: "02",
        title: "Know Your Value",
        description: "Your typical applicant pool as a high achiever is 3.9+ unweighted GPA, 1500+ SAT and 34+ ACT"
    },
    {
        id: 3,
        Nums: "03",
        title: "University Fit",
        description: "Your typical applicant pool as a high achiever is 3.9+ unweighted GPA, 1500+ SAT and 34+ ACT"
    },
    {
        id: 4,
        Nums: "04",
        title: "Value Credibility",
        description: "Your typical applicant pool as a high achiever is 3.9+ unweighted GPA, 1500+ SAT and 34+ ACT"
    },
    {
        id: 5,
        Nums: "05",
        title: "Articulate Your Value",
        description: "Your typical applicant pool as a high achiever is 3.9+ unweighted GPA, 1500+ SAT and 34+ ACT"
    }
]
const MasterMind = () => {
    return (
        <div className="masterbg">
            <PxWrapper>
                <div className="text-center mb-10">
                    <p className='text-xl text-[#758EB3]  mb-5'>How did we get these results?? Its all in our 5-step method.</p>
                    <h2 className='md:text-4xl text-3xl text-black'>The College Mastermind Approach</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        cards.map((i) => (
                            <div className="bg-white shadow-2xl rounded-lg px-5 py-8" key={i.id}>
                                <h3 className='text-[#1B8AD6] w-fit text-3xl md:text-4xl bg-[#cce5f6] rounded-full p-2 mb-2'> {i.Nums} </h3>
                                <h1 className='text-2xl mb-4'> {i.title} </h1>
                                <p className='text-[#758EB3] text-lg mb-4'> {i.description} </p>
                                <button type="button" className="text-white text-base w-[100%] bg-custom-gradient  rounded-md py-3 px-5">Learn More</button>

                            </div>
                        ))
                    }
                </div>
                <div className="text-center w-full mt-12">
                    <p className='text-xl text-[#758EB3]  mb-5'>Following every step of our approach becomes even more important as the selectivity rate of your childs top 3 choices rises.</p>
                    <button type="button" className="text-white text-base bg-custom-gradient  rounded-md py-3 px-5">BOOK YOUR STRATEGY SESSION!</button>
                </div>
            </PxWrapper>
        </div>
    )
}

export default MasterMind
