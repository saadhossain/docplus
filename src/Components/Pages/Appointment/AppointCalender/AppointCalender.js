import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../../assests/img/chair.png';
const AppointCalender = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className='w-11/12 mx-auto py-5'>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-10'>
                <div className='w-full lg:w-2/4'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
                <div className='w-full lg:w-2/4'>
                    <img src={chair} alt='Hospital Chair' />
                </div>
            </div>
            <p>You Selected : <span className='font-bold'>{format(selectedDate, 'PP')}</span> for Appointment</p>
        </div>
    );
};

export default AppointCalender;