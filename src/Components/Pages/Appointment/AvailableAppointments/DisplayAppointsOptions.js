import { format } from 'date-fns';
import React from 'react';

const DisplayAppointsOptions = ({ appointmentOption, setBookingDetails, bookingDetail, selectedDate }) => {
    const { name, slots } = appointmentOption;
    //Handle Booking Appointment
    const handleBookingAppointment = (e)=> {
        e.preventDefault()
        const form = e.target;
        const date = form.date.value;
        const options = form.options.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const bookingDetails = {
            serviceId : appointmentOption._id,
            date,
            options,
            name,
            email,
            phone
        }
        console.log(bookingDetails);
    }
    return (
        <div className='p-5 shadow-2xl rounded-xl flex flex-col gap-2'>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <h2 className='text-lg font-semibold text-primary'>Available Hours</h2>
            <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
            <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>

            <label
            htmlFor='booking-modal'
            className='bg-primary py-2 px-3 rounded-lg text-white font-semibold my-3 text-center cursor-pointer' 
            onClick={() => setBookingDetails(name)}
            >Book Appointment</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-auto">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-3">{bookingDetail}</h3>
                    <form onSubmit={handleBookingAppointment} className='flex flex-col gap-5'>
                        <input name='date' type="text" placeholder={format(selectedDate, 'PP')} className="input input-bordered w-full max-w-xs text-gray-900 font-bold" disabled value={format(selectedDate, 'PP')}/>
                        <label htmlFor="options">Select Schedule</label>
                        <select name="options" id="options" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value="slot">{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="tel" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <button type='submit' className='text-white bg-primary font-semibold rounded-lg py-2 px-3 text-center w-full max-w-xs my-5'>Confirm Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DisplayAppointsOptions;