import React, { useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const MyLineChart = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <LineChart width={800} height={500} data={datas}>
      <Line dataKey={"investment"}></Line>
      <Line dataKey={"revenue"}></Line>
      <XAxis dataKey="month"></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </LineChart>
  );
};

export default MyLineChart;
