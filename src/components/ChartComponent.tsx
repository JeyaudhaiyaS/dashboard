
import React, { useEffect } from "react";
import { Grid, Stack, Box } from "@mui/material";


import { BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import Chart from "chart.js/auto";



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const

    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  elements: {
    line: {
      tension: 0.4 // disables bezier curves
    }
  },
};

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const BarData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const singleData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getIntroOfPage = (label: string) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
};
type Props = {
  active: string;
  payload: [];
  label: string
}
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};
export default function RenderChart() {
  return (

    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={7}>
          <Box sx={{ height: 400, backgroundColor: "#fff", borderRadius: 6, p: 2 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="4 1 2" />
                <XAxis axisLine={false} />
                <YAxis axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)", border: "1px solid rgba(0, 0, 0, 0.5)" }}
                  wrapperStyle={{ border: "1px solid rgba(0, 0, 0, 0.5)" }}
                />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke='#03c9d7' strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#fb9678" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Box sx={{ height: 200, backgroundColor: "#03c9d7", mb: 2,borderRadius:6,p:2 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={BarData}>
                <Bar dataKey="uv" barSize={10} fill="#96DED1" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          <Box sx={{ height: 200, backgroundColor: "#fb9678",borderRadius:6}}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid horizontal={false} vertical={false} />
                <XAxis dataKey="name" axisLine={false} tick={false} />
                <YAxis axisLine={false} tick={false} />
                <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.87)", border: "none" }} wrapperStyle={{ backgroundColor: "rgba(0, 0, 0, 0.87)", color: "#E8E8E8" }} content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke='#fff' strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
