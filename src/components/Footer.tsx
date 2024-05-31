import React from 'react'
import PxWrapper from './shares/PxWrapper'
// import logo from "../../public/logo.webp"
import Link from 'next/link'
import Image from 'next/image'
import fb from "../../public/footer/facebook.png"
import insta from "../../public/footer/instagram.png"
import youtube from "../../public/footer/youtube.png"
import tiktok from "../../public/footer/tiktok.png"


const Footer = () => {
    return (
        <div className='bg-[#447EF7] text-white'>
            <PxWrapper>

                <div className="">
                    <Image src="/footerLogo.png" alt="footer" width={200} height={200} />
                </div>
                <div className='pt-16'>
                    <div className="grid grid-cols-12">
                        <div className="lg:col-span-3 lg:m-auto mb-3 lg:mb-0 md:col-span-6 col-span-12 inline-block h-full">
                            <h3 className='mb-6 font-bold text-xl'>Quick Link</h3>
                            <ul><li className="text-base mt-3"> <Link href="#">About</Link> </li>
                                <li className="text-base mt-3"> <Link href="#">Terms of Use</Link>  </li>
                                <li className="text-base mt-3"> <Link href="#">Privacy Policy</Link> </li>
                                <li className="text-base mt-3"> <Link href="#">How it Works</Link> </li>
                                <li className="text-base mt-3"> <Link href="#">Contact Us</Link> </li>
                                <li className="text-base mt-3"> <Link href="#">Packages</Link> </li>
                            </ul>
                        </div>
                        <div className="lg:col-span-3 lg:m-auto mb-3 lg:mb-0 md:col-span-6 col-span-12 inline-block h-full">
                            <h3 className='mb-6 font-bold text-xl'>Services</h3>
                            <ul><li className="text-base mt-3"> <Link href="#">Support Carrer</Link> </li><li className="text-base mt-3"><Link href="#">24h Service</Link></li><li className="text-base mt-3"><Link href="#">Quick Chat</Link> </li></ul>
                        </div>
                        <div className="lg:col-span-3 lg:m-auto mb-3 lg:mb-0 md:col-span-6 col-span-12 inline-block h-full">
                            <h3 className='font-bold mb-6 text-xl'>Countries</h3>
                            <ul>
                                <li className="text-base mt-3"> <Link href="#">Saudi Arabia</Link> </li>
                                <li className="text-base mt-3"><Link href="#">UAE</Link> </li>
                                <li className="text-base mt-3"><Link href="#">Oman</Link> </li>
                                <li className="text-base mt-3"><Link href="#">Bahrain</Link> </li>
                                <li className="text-base mt-3"><Link href="#">Qatar</Link> </li>
                            </ul>
                        </div>
                        <div className="lg:col-span-3 mb-3 lg:mb-0 md:col-span-6 col-span-12">
                            <h3 className='font-bold mb-6 text-xl'>Subscribe Our Newsletter</h3>
                            <input type="text" placeholder="Email" className="border-b-2 border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-white hover:border-white" />
                            <div className="flex gap-3 mt-6">
                                <Image src={fb} alt='facebook' width={50} height={50} />
                                <Image src={insta} alt='instagram' width={50} height={50}/>
                                <Image src={youtube} alt='youtube' width={50} height={50}/>
                                <Image src={tiktok} alt='tiktoke' width={50} height={50}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="flex justify-end gap-4 items-center" style={{ borderTop: "1px solid #fff" }}>
                            <div className="mb-3 mt-3">
                                <p className='text-base'>Privacy Policy</p>
                            </div>
                            <div className="mb-3 mt-3">
                                <p className='text-base'><Link target='_blank' href="https://github.com/WasifAli22">Legal Terms</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </PxWrapper>

        </div>
    )
}

export default Footer
