import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyPieChart from '../MyBarChart/MyPieChart/MyPieChart';
const Dashboard = () => {
    
    return (
        <div className=''>
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
            <MyPieChart></MyPieChart>
        </div>
    );
};

export default Dashboard;