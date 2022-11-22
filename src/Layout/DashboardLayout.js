import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import AdminLeftSidebar from './AdminLeftSidebar';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-11/12 lg:w-10/12 mx-auto my-5 flex gap-5'>
                <AdminLeftSidebar></AdminLeftSidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;