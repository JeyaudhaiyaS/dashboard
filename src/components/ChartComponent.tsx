
import React,{useEffect} from "react";
import { Grid,Stack,Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
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

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#03C9D7"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#FB9678"
    }
  ]
};
const singleData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#fff"
    }

  ]
}


export default function RenderChart() {
 
  return (
    <Grid container spacing={2} sx={{my:2}} >
      <Grid item xs={12} sm={12} md={7} lg={7}>
        <Box sx={{backgroundColor:"#fff",height:{md:"70vh"}}}>
        <Line data={data} options={options}/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg ={5}>
        <Stack direction="column" sx={{mr:1}}>
        <Box sx={{backgroundColor:"#03C9D7", borderRadius:4,mb:3}}>
        <Bar data={data} options={options}/>
        </Box>
        <Box sx={{backgroundColor:"#FB9678",borderRadius:4,mb:3}}>
        <Line data={singleData} options={options} />
        </Box>
        </Stack>
      </Grid>
    </Grid>
    
  );
}
