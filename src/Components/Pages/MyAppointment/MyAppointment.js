import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppointment = () => {
    const { user, logOut } = useContext(AuthContext)
    // const [appointments, setAppointments] = useState([])
    // console.log(appointments);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/appointments?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [user?.email])

    //Using tanstacQuery
    const {data:appointments = [], refetch} = useQuery({
        queryKey: ['appointments', user?.email, logOut],
        queryFn: () => fetch(`http://localhost:5000/appointments?email=${user?.email}`, {
            headers: {
                authorization: `Beareer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut()
            }
            return res.json()
        })
    })
    //Handle cancel appointment
    const handleCancelAppt = (id) => {
        fetch(`http://localhost:5000/appointments/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.error('Appointment Cancelled...')
                refetch()
            }
        })
    }
    return (
        <div>
            {
                appointments.length ?
                <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Appointment Date</th>
                            <th>Treatment Name</th>
                            <th>Booked Schedule</th>
                            <th>Booking Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((appointment, i) => <tr key={i}>
                                <th>{i+1}</th>
                                <td className='font-semibold'>{appointment.treatmentName}</td>
                                <td>{appointment.apptDate}</td>
                                <td>{appointment.schedule}</td>
                                <td>{appointment.bookedOn}</td>
                                <button onClick={() => handleCancelAppt(appointment._id)} className='bg-primary py-1 px-2 rounded font-semibold text-white mt-3'>Cancel</button>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            : 
            <div>
                <h1 className='text-4xl font-semibold mt-5 bg-primary text-white py-5 px-10 rounded-xl text-center'>You have No Appointments</h1>
            </div>
            }
        </div>
    );
};

export default MyAppointment;