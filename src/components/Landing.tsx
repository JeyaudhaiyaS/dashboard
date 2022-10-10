import React,{useState} from 'react'
import NavbarComponent from "../components/Navbar"
import Transaction from "../components/Transaction"
import RenderChart from '../components/ChartComponent';
import Performance from '../components/Performance';
import Sales from '../components/Sales';
import FooterCard from '../components/FooterCard';
import { Box } from '@mui/material';


const Landing = () => {
 const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  return (
    <>
    <NavbarComponent isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Box sx={{
        ...(isDrawerOpen ? {
          ml: 30
        } : { ml: 2 })
      }}>
        <Transaction />

        <Box sx={{ mx: 6,my:4 }}>
          <RenderChart />
         </Box>
         <Box sx={{ mx: 6,my:4 }}>
          <Performance/>
         </Box>
         <Box sx={{ mx: 6,my:4 }}>
          <Sales/>
         </Box>
         <Box sx={{ mx: 6,my:4 }}>
          <FooterCard/>
         </Box>
      </Box>
      </>
  )
}

export default Landing