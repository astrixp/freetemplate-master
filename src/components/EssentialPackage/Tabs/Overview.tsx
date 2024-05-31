import React from 'react'

const OverviewData = [
    {
        id: 1,
        description: 'They should have a very high GPA for the  universities they would like to attend',
    },
    {
        id: 2,
        description: 'They should have top class rigor from their  high school compared to other applicants at  their top 3 universities',
    },
    {
        id: 3,
        description: 'They should have top test scores if the  school is not test-blind',
    },
    {
        id: 4,
        description: 'They should have their Value Credibility  extremely well defined with evident personal  growth and deep perspectives that will allow  them to shine in their essays.',
    },
]
const Overview = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-4xl'>Overview</h1>
            <p className='text-xl md:px-20 mt-10 text-[#758EB3]'> <span className='text-[#4B66EA]'>Premium package:</span>  This is a great package for  our first generation families who have a child  who checks ALL of the following:</p>
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

export default Overview
