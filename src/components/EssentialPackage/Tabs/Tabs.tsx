"use client"
import Link from 'next/link';
import { useState } from 'react';
import Overview from './Overview';
import Benefits from './Benefits';
import Inclusions from './Inclusions';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className='my-10 '>
            <ul className="flex md:mx-20 bg-white shadow-2xl px-10 rounded-full py-4 flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {['Overview', 'Benefits', 'Inclusions', 'Reviews'].map((tab, index) => (
                    <li className="me-2" key={index}>
                        <Link
                            href="#"
                            onClick={() => setActiveTab(index + 1)}
                            className={`inline-block px-4 py-3 rounded-lg ${activeTab === index + 1
                                    ? 'text-white bg-blue-600 rounded-full px-2 active'
                                    : 'text-black'
                                } ${index === 4 ? 'text-gray-400 cursor-not-allowed dark:text-gray-500' : ''}`}
                        >
                            {tab}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="p-4 mt-4 dark:bg-gray-800">
                {activeTab === 1 && <div><Overview /></div>}
                {activeTab === 2 && <div> <Benefits /> </div>}
                {activeTab === 3 && <div> <Inclusions /> </div>}
                {activeTab === 4 && <div>All Reviews are here</div>}
                
            </div>
        </div>
    );
};

export default Tabs;
