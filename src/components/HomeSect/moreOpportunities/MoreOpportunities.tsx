import Image from 'next/image'
import React from 'react'
import PxWrapper from '../../shares/PxWrapper'

const MoreOpportunities = () => {
  return (
    <PxWrapper>
      <div className="md:grid grid-cols-12 flex flex-col-reverse">
        <div className="col-span-7 text-left">
          <h2 className='text-3xl md:text-4xl mb-10 bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text'>More opportunities at top universities with more predictable results!</h2>
          <p className='text-xl text-[#758EB3] mb-8'>We get results. We are not cheap, but the undeniable benefits of working with a support team during this process outweigh the costs for most families.</p>
          <p className='text-xl text-[#758EB3] mb-8'>If you are going to invest, get a results-driven approach that will give you confidence and reduce your stress.</p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4 mb-10 md:text-right lg:mb-0">
          <Image src="/moreopportunites.png" alt='nogurantee' height={450} width={450} />
        </div>
      </div>
    </PxWrapper>
  )
}

export default MoreOpportunities
