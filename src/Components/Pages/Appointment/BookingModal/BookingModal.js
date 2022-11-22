import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';

const BookingModal = ({ availableTreatment, selectedDate , setAvailableTreatment, refetch}) => {
    const {user} = useContext(AuthContext)
    const { treatmentName, slots } = availableTreatment;
    const [schedule, setSchedule] = useState(slots[0])
    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const patientName = form.patientName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const apptDate = form.apptDate.value;

        const appointmentInfo = {
            treatmentId : availableTreatment._id,
            treatmentName,
            apptDate,
            schedule,
            patientName,
            email,
            phone,
            bookedOn: new Date()
        }
        console.log(appointmentInfo);
        //Send data to the mongodb
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Appointment Booked Successfully...')
                form.reset()
                setAvailableTreatment(null)
                refetch()
            }
            else{
                toast.error(data.message)
                setAvailableTreatment(null)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='flex flex-col'>
                        <label htmlFor="apptDate" className='font-semibold my-2'>Appointment Date</label>
                        <input type="text" name="apptDate" id="apptDate" defaultValue={format(selectedDate, 'PP')} placeholder={format(selectedDate, 'PP')} disabled className='border rounded p-2' />
                        <label htmlFor="schedule" className='font-semibold my-2'>Schedule</label>
                        <select onChange={(e)=> setSchedule(e.target.value)} name="schedule" id="schedule" className='border border-gray-500 rounded p-2'>
                            {
                                slots.map(slot => <option key={slot} value={slot}

                                >{slot}</option>)
                            }
                        </select>
                        <label htmlFor="patientName" className='font-semibold my-2'>Patient Name</label>
                        <input type="text" name="patientName" id="patientName" className='border border-gray-500 rounded p-2' defaultValue={user?.displayName} placeholder={user?.displayName} disabled/>
                        <label htmlFor="email" className='font-semibold my-2'>Patient Email</label>
                        <input type="email" name="email" id="email" className='border border-gray-500 rounded p-2' defaultValue={user?.email} placeholder={user?.email} disabled/>
                        <label htmlFor="phone" className='font-semibold my-2'>Patient Phone</label>
                        <input type="text" name="phone" id="phone" className='border border-gray-500 rounded p-2' />
                        <button type='submit' className='bg-primary py-2 rounded-lg text-white font-semibold mt-5'>Confirm Appointment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;