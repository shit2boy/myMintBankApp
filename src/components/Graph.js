import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1798,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 5800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default class Graph extends Component {
  //   static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <AreaChart
        className="border"
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0294FF" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#ffffff" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          orientation="top"
          mirror="true"
          axisLine={false}
          tickLine={false}
        />
        <YAxis tickLine={false} hide="true" />
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#DDD" />
        <Tooltip />
        <Area
          type=""
          dataKey="pv"
          stroke="#0294FF"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    );
  }
}

//   <div>
//     <ComposedChart
//       width={800}
//       height={300}
//       data={this.state.data}
//       margin={{ top: 25, right: 30, left: 20, bottom: 5 }}
//     >
//       <defs>
//         <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="5%" stopColor="#129a74" stopOpacity={0.1} />
//           <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
//         </linearGradient>
//       </defs>
//       <XAxis dataKey="time" tickFormatter={convertDate} />
//       <YAxis tickFormatter={convertValue} />
//       <Tooltip />
//       <CartesianGrid vertical={false} stroke="#DDD" />

//       <Line
//         type="monotone"
//         unit="M"
//         strokeLinecap="round"
//         strokeWidth={2}
//         style={{ strokeDasharray: `40% 60%` }}
//         dataKey="close"
//         stroke="#006991"
//         dot={false}
//         legendType="none"
//       />
//       <Area
//         type="monotone"
//         dataKey="close"
//         stroke={false}
//         strokeWidth={2}
//         fillOpacity={1}
//         fill="url(#colorUv)"
//       />
//     </ComposedChart>
//   </div>

// export default Graph;
