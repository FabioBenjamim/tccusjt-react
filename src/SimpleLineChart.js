import React, {Component} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  {name: 'Page A', pv: 2400, amt: 2400},
  {name: 'Page B', pv: 1398, amt: 2210},
  {name: 'Page C', pv: 9800, amt: 2290},
  {name: 'Page D', pv: 3908, amt: 2000},
  {name: 'Page E', pv: 4800, amt: 2181},
  {name: 'Page F', pv: 3800, amt: 2500},
  {name: 'Page G', pv: 4300, amt: 2100},
];

class SimpleLineChart extends Component {
  
  render () {
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#0a0a0a'
          activeDot={{r: 8}}
          />
        <CartesianGrid 
        strokeDasharray='3 3'
        stroke='#0a0a0a'
        />
        <Tooltip/>
        <YAxis
        stroke='#0a0a0a'/>
        <XAxis 
        stroke='#0a0a0a'
        dataKey='name'/>
        <Legend />
      </LineChart>
    );
  }
}

export default SimpleLineChart;