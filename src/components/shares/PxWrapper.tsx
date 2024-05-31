// components/PxWrapper.js
import React from 'react';

const PxWrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="lg:px-16 px-6 lg:py-16 py-12">{children}</div>;
};

export default PxWrapper;
