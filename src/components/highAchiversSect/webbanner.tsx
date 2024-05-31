import React from 'react'
import PxWrapper from '../shares/PxWrapper'
import Image from 'next/image'

const Webbanner = () => {
    return (
        <PxWrapper>
            <div className="md:grid grid-cols-12 flex-col-reverse flex">
                <div className="col-span-12 md:col-span-8">
                    <h1 className="md:text-5xl text-3xl font-semibold bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text">
                        Get accepted with a data-driven approach that delivers proven results
                    </h1>
                    <p className="my-4 text-lg md:text-2xl font-normal">Get accepted into a top university with a data-driven approach that delivers proven results</p>
                    <p className="my-4 text-lg md:text-2xl font-normal">Boost your chances of acceptance by sending a letter of continued interest.</p>
                    <button type="button" className="text-white text-base bg-textColor rounded-md py-3 px-5">BOOK YOUR STRATEGY SESSION!</button>
                </div>

                <div className="text-center mb-10 md:text-left col-span-12 md:col-span-4 relative ml-auto mr-auto md:mr-0 md:ml-auto">
                    <Image src="/banner/bannerleft.png" width={300} height={300} alt="asdf" />
                    <div className="absolute top-[50%] left-[50%]">
                        <Image src="/banner/play.png" width={50} height={50} alt='play' />
                    </div>
                </div>
            </div>
        </PxWrapper>
    )
}

export default Webbanner
