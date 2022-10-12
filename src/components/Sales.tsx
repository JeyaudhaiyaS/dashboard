import React, { useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Box,
  Stack,
  Grid
} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const data = [
  {
    name: "Jan",
    ample: 200,
    pixel: 300,
    amt: 400
  },
  {
    name: "Feb",
    ample: 200,
    pixel: 300,
    amt: 400
  },
  {
    name: "March",
    ample: 300,
    pixel: 200,
    amt: 500
  },
  {
    name: "April",
    ample: 500,
    pixel: 600,
    amt: 300
  },
  {
    name: "May",
    ample: 100,
    pixel: 300,
    amt: 200
  },
  {
    name: "June",
    ample: 500,
    pixel: 400,
    amt: 200
  },
  {
    name: "July",
    ample: 200,
    pixel: 500,
    amt: 400
  }
];

const Sales = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Payment received from John Doe of $385.90", "Project Meeting", "New sale recorded #ML-3467",
    "Payment was made of $64.95 to Michael Anderson", "New payment receipt created for Alphanso Golvo"];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <Box sx={{ backgroundColor: "#fff",p:3 }}>
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }} >
            <Typography gutterBottom variant="subtitle1">
              Daily Activities
            </Typography>
            
            <MoreHorizIcon />
          </Stack>
          <Stepper
            orientation="vertical"
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel><Typography gutterBottom variant="caption">{label}</Typography></StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Box sx={{ width: "100%", height: 370, backgroundColor: "#fff" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid horizontal={false} vertical={false} />
              <XAxis dataKey="name" />
              <YAxis axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)", border: "1px solid rgba(0, 0, 0, 0.5)" }}/>
              <Legend wrapperStyle={{ top: 0, left: 30 }} />
              <Bar dataKey="pixel" fill="#03C9D7" />
              <Bar dataKey="ample" fill="#FB9678" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Sales