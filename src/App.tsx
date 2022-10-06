import  React,{useState,useEffect,useRef} from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import { withStyles } from '@mui/material';
import { Box } from '@mui/material';
// import Logout from '@mui/icons-material/Logout';
import NavbarComponent from './components/Navbar';
import Transaction from "./components/Transaction"
import  RenderChart from './components/ChartComponent';
import  Performance  from './components/Performance';
export default function App() {
 
 // };
 const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  return (
   
    <div>
      <NavbarComponent isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      
      <Box sx={{...(isDrawerOpen ? {
        ml:35
      }: {ml:2})}}>
        <Transaction />
       <RenderChart/> 
      <Box sx={{mr:2}}>
       <Performance/>
       </Box>
       </Box>
    </div>
  );
}

