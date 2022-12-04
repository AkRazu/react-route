import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const Dashboard = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);
  return (
      <div className="grid md:grid-cols-2 gap-10 md:my-10 md:mx-52 block">
        <div className="flex items-center justify-center z-[-1]">
          <div>
            <h1 className="text-center font-bold text-purple-700">
              Invested Vs Revenue
            </h1>
            <ResponsiveContainer width={300} height={300} data={charts}>
              <PieChart width={400} height={400}>
                <Tooltip />
                <Pie
                  data={charts}
                  dataKey="investment"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#93D5DF"
                />
                <Pie
                  data={charts}
                  dataKey="revenue"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#3A4352"
                  label
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-center font-bold text-purple-700">
              Sell Vs Revenue
            </h1>
            <ResponsiveContainer width={300} height={300} data={charts}>
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
                <Bar dataKey="sell" barSize={20} fill="#3A4352" />
                <Bar dataKey="revenue" barSize={20} fill="#FFC348" />
                <Line type="monotone" dataKey="sell" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-center font-bold text-purple-700">
              Investment Vs Sell
            </h1>
            <ResponsiveContainer width={300} height={300} data={charts}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={charts}>
                <PolarGrid />
                <Tooltip />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis />
                <Radar
                  name="investment"
                  dataKey="investment"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="sell"
                  dataKey="sell"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
