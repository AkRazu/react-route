import React, { PureComponent, useEffect, useState } from "react";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  import { PieChart, Pie, Sector, Cell,Scatter,RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,Radar } from 'recharts';
  

const Dashboard = ({ chart }) => {
  // const {month,investment,sell,revenue} = chart;
  const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);
  return (
    <div className="grid grid-cols-2 my-10 mx-52">
        <div>
            <h1 className="text-center font-bold text-purple-700" >Invested Vs Revenue</h1>
      <ResponsiveContainer width={600} height={300} data={charts}>
        <PieChart width={400} height={400}>
        <Tooltip />
          <Pie data={charts} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={charts} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div>
      <h1 className="text-center font-bold text-purple-700" >Sell Vs Revenue</h1>
      <ResponsiveContainer width={600} height={300} data={charts}>
        <ComposedChart
          width={500}
          height={400}
          data={charts}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" barSize={20} fill="#413ea0" />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
      <div>
      <h1 className="text-center font-bold text-purple-700" >Investment Vs Sell</h1>
      <ResponsiveContainer width={600} height={300} data={charts}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={charts}>
          <PolarGrid />
          <Tooltip />
          <PolarAngleAxis dataKey="month" />
          <PolarRadiusAxis />
          <Radar name="investment" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="sell" dataKey="sell" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
