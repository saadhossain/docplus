import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assests/img/footer.png'

const Footer = () => {
    return (
        <div 
        className='w-10/12 mx-auto py-10 grid grid-cols-3 justify-between bg=[#26292B]'
        style={{
            background: `url(${footer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >
            <div>
                <h2 className='text-2xl my-2'>Services</h2>
                <ul>
                    <li><Link>Emergency Checkup</Link></li>
                    <li><Link>Monthly Checkup</Link></li>
                    <li><Link>Weekly Checkup</Link></li>
                    <li><Link>Deep Checkup</Link></li>
                </ul>
            </div>
            <div>
                <h2 className='text-2xl my-2'>Oral Health</h2>
                <ul>
                    <li><Link>Floraid Treatment</Link></li>
                    <li><Link>Cavity Filling</Link></li>
                    <li><Link>Teath Whitening</Link></li>
                    <li><Link>Teach Caping</Link></li>
                </ul>
            </div>
            <div>
                <h2 className='text-2xl my-2'>Importants</h2>
                <ul>
                    <li><Link>Checkup Fees</Link></li>
                    <li><Link>Terms of Use</Link></li>
                    <li><Link>Brach & Doctors</Link></li>
                    <li><Link>Discount Policy</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;