import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    // const [appointments, setAppointments] = useState([])
    // console.log(appointments);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/appointments?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [user?.email])

    //Using tanstacQuery
    const {data:appointments = []} = useQuery({
        queryKey: ['appointments', user?.email],
        queryFn: () => fetch(`http://localhost:5000/appointments?email=${user?.email}`)
        .then(res => res.json())
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Appointment Date</th>
                            <th>Treatment Name</th>
                            <th>Booked Schedule</th>
                            <th>Booking Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, i) => <tr key={i}>
                                <th>{i+1}</th>
                                <td className='font-semibold'>{appointment.treatmentName}</td>
                                <td>{appointment.apptDate}</td>
                                <td>{appointment.schedule}</td>
                                <td>{appointment.bookedOn}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;