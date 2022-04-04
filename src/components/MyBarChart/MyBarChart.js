import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
      fetch("chartData.json")
        .then((res) => res.json())
        .then((data) => setDatas(data));
    }, []);
       
    return (
        <BarChart width={800} height={400} data={datas}>
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="green" />
          <Bar dataKey="sell" fill="red" />
          <XAxis dataKey={'month'} />
          <YAxis />
          <Tooltip />
        </BarChart>
    );
};

export default SpecialChart;