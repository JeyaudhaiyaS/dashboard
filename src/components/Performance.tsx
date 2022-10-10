import React, { useState } from 'react';

import { Box, Grid, Typography, Badge, Stack, Divider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { textAlign } from '@mui/system';




const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },

];
const COLORS = ['#ECF0F2', '#58FCFF', '#FFC5A6'];
const BasicTable = () => {
  function createData(
    Assigned: string,
    Name: string,
    priority: string,
    Budget: string,

  ) {
    return { Assigned, Name, priority, Budget };
  }

  const rows = [
    createData('Sunil Joshi', 'Elite Admin', 'Low', '$24.k'),
    createData('Andrew', 'Real Homes WP Theme', 'High', '$34.k'),
    createData('Christopher', 'MedicalPro WP Theme', 'Low', '$55k'),
    createData('Nirav', 'Hosting Press HTML', 'Critical', '$2.4k'),
    createData('Micheal', 'Helping Hands Theme', 'Moderate', '$3.9k'),
    createData('Sunil Joshi', 'Elite Admin', 'Low', '$24.k'),
    createData('Andrew ', 'Real Homes WP Theme', 'High', '$34.k'),
    createData('Christopher ', 'MedicalPro WP Theme', 'Low', '$55k'),
    createData('Nirav', 'Hosting Press HTML', 'Critical', '$2.4k'),
    createData('Micheal', 'Helping Hands Theme', 'Moderate', '$3.9k'),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, p: 4 }} padding="normal" size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#777E89" }}>Name</TableCell>
            <TableCell align="right" sx={{ color: "#777E89" }}>Assigned</TableCell>
            <TableCell align="right" sx={{ color: "#777E89" }}>Priority</TableCell>
            <TableCell align="right" sx={{ color: "#777E89" }}>Budget</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Assigned}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Assigned}
              </TableCell>
              <TableCell align="right" sx={{ color: "#777E89" }}>{row.Name}</TableCell>
              <TableCell align="right"><Badge badgeContent={row.priority} color="warning"></Badge></TableCell>
              <TableCell align="right">{row.Budget}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default function Performance() {
  const [date, setDate] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value);
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={4} sx={{ mb: { xs: 10, sm: 10, md: 0 } }}>
        <Box sx={{ width: "100%", height: 400, backgroundColor: "#fff", p: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>Total Sales</Typography>
            <FormControl size="small">
              <Select
                value={date}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>March,2021</em>
                </MenuItem>
                <MenuItem value={10}>May,2021</MenuItem>
                <MenuItem value={20}>April,2021</MenuItem>
                <MenuItem value={30}>July,2022</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Divider />
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 3 }}>
            <Typography variant='subtitle2'>Sales Yearly</Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>8,364,398</Typography>
          </Stack>
          <ResponsiveContainer>
            <PieChart>
              <Tooltip />
              <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              {/* <Legend wrapperStyle={{ bottom: 120, left: 25 }} /> */}
            </PieChart>
          </ResponsiveContainer>
        </Box>

      </Grid>
      <Grid item xs={12} md={8}>
        <Box>
          <Paper>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{pr:2}}>
              <Typography variant='subtitle1' sx={{ fontWeight: "bold", p: 2 }}>Product Performance</Typography>
              <FormControl size="small">
                <Select
                  value={date}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>March,2021</em>
                  </MenuItem>
                  <MenuItem value={10}>May,2021</MenuItem>
                  <MenuItem value={20}>April,2021</MenuItem>
                  <MenuItem value={30}>July,2022</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <BasicTable />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}
