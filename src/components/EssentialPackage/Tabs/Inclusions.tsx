
import Image from 'next/image'
import React from 'react'

const OverviewData = [
    {
        id: 1,
        src: '/packages/inclusions/image1.png',
        alt: 'image1'
    },
    {
        id: 2,
        src: '/packages/inclusions/image2.png',
        alt: 'image2'
    },
    {
        id: 3,
        src: '/packages/inclusions/image3.png',
        alt: 'image3'
    },
    {
        id: 4,
        src: '/packages/inclusions/image4.png',
        alt: 'image4'
    },
    {
        id: 5,
        src: '/packages/inclusions/image5.png',
        alt: 'image5'
    },
    {
        id: 6,
        src: '/packages/inclusions/image6.png',
        alt: 'image6'
    },
    {
        id: 7,
        src: '/packages/inclusions/image7.png',
        alt: 'image7'
    },
    {
        id: 8,
        src: '/packages/inclusions/image1.png',
        alt: 'image1'
    },
    {
        id: 9,
        src: '/packages/inclusions/image2.png',
        alt: 'image2'
    },
    {
        id: 10,
        src: '/packages/inclusions/image3.png',
        alt: 'image3'
    },
    {
        id: 11,
        src: '/packages/inclusions/image4.png',
        alt: 'image4'
    },
    {
        id: 12,
        src: '/packages/inclusions/image5.png',
        alt: 'image5'
    },
    {
        id: 13,
        src: '/packages/inclusions/image6.png',
        alt: 'image6'
    },
    {
        id: 14,
        src: '/packages/inclusions/image7.png',
        alt: 'image7'
    },

]
const Inclusions = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-4xl'>Inclusions</h1>
            <div className="md:mt-10 mt-6 grid grid-cols-1 md:grid-cols-4 gap-5">
                {OverviewData.map((data) => (
                    <div key={data.id}>
                        <div className="bg-white rounded-lg p-5 mb-5" >
                            <Image src={data.src} className='mx-auto' alt={data.alt} width={150} height={150} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Inclusions
