import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page C",
    uv: 3000,
    pv: 8000,
    amt: 2290,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page B",
    uv: 2500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page A",
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
];
export class MyCharts extends Component {
  render() {
    return (
      <div>
        <AreaChart
          width={90}
          height={50}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          {/* <Area type="monotone" dataKey="uv" stroke="#0294FF" fill="#0294FF" /> */}

          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#0294FF" stopOpacity={0.1} />
              <stop offset="90%" stopColor="#FFFFFF" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#0294FF"
            strokeWidth={1}
            fillOpacity={0.9}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    );
  }
}

export default MyCharts;
