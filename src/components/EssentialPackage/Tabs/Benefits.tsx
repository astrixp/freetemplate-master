
import React from 'react'

const OverviewData = [
    {
        id: 1,
        description: 'Premium: Our tailored approach is the key to our programs success. For the premium package, students come to us with their Value Credibility less-established than what would be needed to get accepted. They must go beyond typical teen extracurricular activities and leadership roles in order to truly be effective in getting into a selective college.',
    },
    {
        id: 2,
        description: 'We must solidify their Value Credibility over a set of powerful sessions. During these sessions, we cultivate all of the perspective, personal growth, and deep value we can, positioning the student’s essays in a way that impresses colleges.',
    },
    {
        id: 3,
        description: 'These sessions will be the foundation of the entire strategy of the application, as we lay out a cohesive and diverse application that demonstrates value in several ways.',
    },
]
const Benefits = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-4xl'>Benefits</h1>
            <p className='text-3xl md:text-4xl text-center md:px-20 mt-10 text-[#4B66EA]'> Why it works?</p>
            <div className="md:mt-10 mt-6">
                {OverviewData.map((data) => (
                    <div key={data.id}>
                        <div className="bg-white rounded-lg p-5 mb-5" >
                            <ul className='checklist-ul'>
                                <li className='text-[#758EB3]'> {data.description} </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Benefits
