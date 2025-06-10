import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const CustomLegend = ({ payload }) => (
  <ul className="flex gap-6 items-center justify-center text-sm font-medium mb-4">
    {payload.map((entry, index) => (
      <li key={index} className="flex items-center  gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: entry.color }}
        ></span>
        <span className="text-white">{entry.value}</span>
      </li>
    ))}
  </ul>
);

const ChartComponent = () => {
  const data = [
  { month: "Jan", subscribers: 25000, followers: 15000, views: 10000, "Total Streams": 20000 },
  { month: "Feb", subscribers: 20000, followers: 18000, views: 9000, "Total Streams": 18000 },
  { month: "Mar", subscribers: 17000, followers: 14000, views: 11000, "Total Streams": 16000 },
  { month: "Apr", subscribers: 21000, followers: 15000, views: 10000, "Total Streams": 19000 },
  { month: "May", subscribers: 23000, followers: 16000, views: 12000, "Total Streams": 20000 },
  { month: "Jun", subscribers: 22000, followers: 17000, views: 13000, "Total Streams": 21000 },
  { month: "Jul", subscribers: 24000, followers: 16000, views: 14000, "Total Streams": 22000 },
  { month: "Aug", subscribers: 25000, followers: 19000, views: 15000, "Total Streams": 23000 },
  { month: "Sep", subscribers: 23000, followers: 18000, views: 14000, "Total Streams": 22000 },
  { month: "Oct", subscribers: 24000, followers: 17000, views: 13000, "Total Streams": 21000 },
  { month: "Nov", subscribers: 22000, followers: 16000, views: 12000, "Total Streams": 20000 },
  { month: "Dec", subscribers: 20000, followers: 15000, views: 11000, "Total Streams": 19000 },
];
  return (
    <div className="bg-[#161517] p-6 w-[63%] h-[330px] rounded-md shadow-md" style={{ border: "1px solid #34333B" }}>
      {/* <h2 className="text-black text-xl mb-4">Statistics</h2> */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl mb-4">Statistics</h2>
        <select name="This Year" className="text-black text-xl mb-4 rounded-md" >
          <option value="all">This Year</option>
          <option value="subscribers">Subscribers</option>
          <option value="followers">Followers</option>
          <option value="views">Views</option>
          <option value="streams">Streams</option>
        </select>
      </div>
        <CustomLegend payload={[
          { value: 'Subscribers', color: '#9b59b6' },
          { value: 'Followers', color: '#a29bfe' },
          { value: 'Views', color: '#dcdde1' },
          { value: 'Total Streams', color: '#8D42EA' },
        ]} />

      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month"  stroke="#aaa" />
          <YAxis stroke="#aaa" tickFormatter={(value) => `${value / 1000}k`} />
          <Tooltip contentStyle={{ backgroundColor: "#1e1e1e", border: "none" }} />
          
          <Bar dataKey="subscribers" fill="#9b59b6" />
          <Bar dataKey="followers" fill="#a29bfe" />
          <Bar dataKey="views" fill="#dcdde1" />
          <Bar dataKey="Total streams" fill="#8D42EA" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartComponent