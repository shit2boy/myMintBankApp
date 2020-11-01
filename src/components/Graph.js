import React, { Component } from "react";
// import { dummyData } from "../utils/DummyData";

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
    name: "Jan ",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    pv: 1798,
    amt: 2210,
  },
  {
    name: " Mar",
    pv: 4800,
    amt: 2290,
  },
  {
    name: " Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    pv: 4300,
    amt: 2100,
  },
];

export default class Graph extends Component {
  render() {
    // const { data } = this.props;
    // let arr = [];
    // let obj;
    // for (let i = 0; i < data.length; i++) {
    //   obj = { month: data[i].month };
    //   for (let j = 0; j < data[i].commodities.length; j++) {
    //     let commodity = data[i].commodities[j];
    //     obj[commodity.Payments] = commodity.Price;
    //   }
    //   arr.push(obj);
    //   //   this.setState({ converted: arr });
    //   console.log(arr);
    // }
    //   }}
    return (
      <AreaChart
        width={650}
        height={230}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="3%" stopColor="#0294FF" stopOpacity={0.3} />
            <stop offset="97%" stopColor="#ffffff" stopOpacity={0.2} />
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
