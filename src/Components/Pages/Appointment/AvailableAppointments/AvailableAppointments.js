import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import DisplayAppointsOptions from './DisplayAppointsOptions';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    useEffect(() => {
        fetch('appointment.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, []);
    const [bookingDetail, setBookingDetails] = useState()
    return (
        <div className='w-11/12 mx-auto my-5'>
            <h1 className='text-center'>Available Appointments : <span className='font-bold'> {format(selectedDate, 'PP')}</span> </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-5'>
                {
                    appointmentOptions.map(appointmentOption => <DisplayAppointsOptions
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setBookingDetails={setBookingDetails}
                        bookingDetail={bookingDetail}
                        selectedDate={selectedDate}
                    ></DisplayAppointsOptions>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;