import React from 'react';

const BtnPrimary = ({children}) => {
    return (
        <button className='py-3 px-5 rounded-lg bg-primary text-white font-semibold duration-300 ease-in-out hover:bg-secondary'>{children}</button>
    );
};

export default BtnPrimary;