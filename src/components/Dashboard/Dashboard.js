import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyBarChart from '../MyBarChart/MyBarChart';
const Dashboard = () => {
    return (
        <div className=''>
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
        </div>
    );
};

export default Dashboard;