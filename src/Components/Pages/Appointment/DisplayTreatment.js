import React from 'react'

const DisplayTreatment = ({ treatment, setAvailableTreatment }) => {
    const { treatmentName, slots } = treatment;
    return (
        <div>
            <div className='p-5 rounded-lg bg-primary text-center'>
                <h4 className='text-2xl font-bold text-white'>{treatmentName}</h4>

                <p className='font-semibold text-white border-b-2 border-white pb-1 mt-5'>
                    {
                        slots.length > 1 ? `${slots.length} Spaces Available` : `${slots.length} Space Available`
                    }
                </p>
                <p className='font-semibold text-white'>
                    {
                        slots.length > 0 ? slots[0] : 'Try Another Day'
                    }
                </p>
                <label 
                disabled={slots.length === 0}
                onClick={()=> setAvailableTreatment(treatment)}
                htmlFor="booking-modal"
                className='btn bg-accent duration-500 ease-in-out hover:bg-gray-900 w-full py-2 rounded-lg font-semibold text-white mt-10'
                >Book Appointment</label>
            </div>
        </div>
    );
};

export default DisplayTreatment;