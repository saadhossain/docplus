import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Loading/Loading';
import BookingModal from './BookingModal/BookingModal';
import DisplayTreatment from './DisplayTreatment';

const AvailableTreatment = ({ selectedDate }) => {
    const date = format(selectedDate, 'PP')
    const [availableTreatment, setAvailableTreatment] = useState(null)
    const { data: treatments = [], refetch, isLoading } = useQuery({
        queryKey: ['treatmentoptions', date],
        queryFn: () => fetch(`http://localhost:5000/treatmentoptions?date=${date}`)
            .then(res => res.json())
            .catch(err => console.error(err))
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5 grid lg:grid-cols-3 gap-5'>
            {
                treatments.map(treatment => <DisplayTreatment
                    key={treatment._id}
                    treatment={treatment}
                    setAvailableTreatment={setAvailableTreatment}
                ></DisplayTreatment>)
            }
            {
                availableTreatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    availableTreatment={availableTreatment}
                    setAvailableTreatment={setAvailableTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableTreatment;