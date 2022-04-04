import React, { useEffect, useState } from 'react';
import { Pie, PieChart } from 'recharts';

const MyPieChart = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
      fetch("chartData.json")
        .then((res) => res.json())
        .then((data) => setDatas(data));
    }, []);
       
    return (
<PieChart width={730} height={250}>
  <Pie data={datas} dataKey="sell" nameKey="revenue" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={datas} dataKey="investment" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
    );
};

export default MyPieChart;