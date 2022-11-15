import React, { useState } from 'react';
import AppointCalender from './AppointCalender/AppointCalender';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointCalender
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointCalender>
            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;