import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assests/img/chair.png'
import AvailableTreatment from './AvailableTreatment';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto'>
            <h1 className='text-2xl lg:text-4xl font-bold text-center text-primary my-5'>Book An Appointment</h1>
            <div className='flex flex-col-reverse lg:flex-row lg:gap-10 justify-between my-5'>
                <div className='w-full lg:w-2/4'>
                    <DayPicker
                        mode='single'
                        onSelect={setSelectedDate}
                        selected={selectedDate}
                    >
                    </DayPicker>
                </div>
                <div className='w-full lg:w-2/4'>
                    <img src={chair} alt='Hospital Chair' />
                </div>
            </div>
            <p className='text-center text-lg'>Selected Day for Appointment: <span className='font-semibold'>{format(selectedDate, 'PP')}</span></p>
            <AvailableTreatment
            selectedDate={selectedDate}
            ></AvailableTreatment>
        </div>
    );
};

export default Appointment;