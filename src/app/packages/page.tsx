import LeftCard from '@/components/EssentialPackage/LeftCard'
import LeftItems from '@/components/EssentialPackage/LeftItems'
import Tabs from '@/components/EssentialPackage/Tabs/Tabs'
import PxWrapper from '@/components/shares/PxWrapper'
import Image from 'next/image'
import React from 'react'
import { IoIosStar } from "react-icons/io";


const PackagePage = () => {
  return (
    <div className="bg-[#f0f9fe]">
      <PxWrapper>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3 mb-6 md:mb-0">
            <LeftCard />
            <LeftItems />
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-12 md:col-span-8">
            <div className="Structure text-center py-8 bg-custom-gradient rounded-lg text-white p-[20px]">
              <p className='text-end text-sm mb-5 md:mb-0'>Category: Test Prep</p>
              <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                <div className="flex flex-col items-center">
                  <Image src="/footerLogo.png" alt="footer" width={200} height={200} />
                  <div className="flex flex-row gap-2">
                  <IoIosStar className='text-base text-yellow-400'/>
                  <IoIosStar className='text-base text-yellow-400'/>
                  <IoIosStar className='text-base text-yellow-400'/>
                  <IoIosStar className='text-base text-yellow-400'/>
                  <IoIosStar className='text-base text-yellow-400'/>
                  </div>
                </div>
                <h1 className='text-white text-3xl md:text-4xl'>Essential Package</h1>
              </div>
            </div>
            <Tabs />
          </div>
        </div>
      </PxWrapper>
    </div>
  )
}

export default PackagePage

