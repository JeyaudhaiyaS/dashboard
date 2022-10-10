import React, { useState } from "react";

import { List, ListItem, ListItemIcon, ListItemText, Divider, Badge, ListItemAvatar } from "@mui/material"
import { AlignHorizontalCenter, Inbox } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar, Toolbar, IconButton, Stack, Button, Typography,
  Box, ListItemButton, Menu, MenuItem, Fade
} from "@mui/material"
import { Drawer } from "@mui/material";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AssignmentIcon from "@mui/icons-material/Assignment"
import { makeStyles, Theme, createStyles } from "@mui/material";
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import PieChartIcon from '@mui/icons-material/PieChart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ProfileImg from "../assets/profile.jpg"
import { borderRadius } from "@mui/system";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom"
const NavbarComponent = ({ isDrawerOpen, setIsDrawerOpen }: { isDrawerOpen: boolean, setIsDrawerOpen: any }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const theme = createTheme({
    typography: {
      subtitle1: {
        color: '#78909c'
      },

    }
  });
  const drawerTheme = useTheme();
  const isGreaterThanSmallBreakpoint = useMediaQuery(
    drawerTheme.breakpoints.up("sm")
  );
  const drawer = (
    <div>

      <List>
        <Typography variant="subtitle1">Dashboards</Typography>
        {['Modern', 'Analytical', 'eCommerce'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Stack direction="row" alignItems="center">
              <Link to="sample_route" style={{textDecoration: 'none',color:"#000"}}>
                <ListItemText primary={text} />
                </Link>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Typography variant="subtitle1">APPS</Typography>
        {['Chat', 'Notes', 'Mail', 'Calender', 'Customers'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
               <Link to="sample_route"style={{textDecoration: 'none',color:"#000"}} >
                <ListItemText primary={text} />
                </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Typography variant="subtitle1">PAGES</Typography>
        {['Shop', 'Alert', 'UserProfile', 'QuillEditor', 'TreeView', 'Pricing', 'Typography', 'featherIcons', 'Timeline'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
               <Link to="sample_route" style={{textDecoration: 'none',color:"#000"}}>
                <ListItemText primary={text} />
                </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Typography variant="subtitle1">FORMS</Typography>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
               <Link to="sample_route" style={{textDecoration: 'none',color:"#000"}} >
                <ListItemText primary={text} />
                </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Typography variant="subtitle1">CHARTS</Typography>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <Link to="sample_route" style={{textDecoration: 'none',color:"#000"}} >
                <ListItemText primary={text}/>
                </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Typography variant="subtitle1">AUTHENTICATION</Typography>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
               <Link to="sample_route" style={{textDecoration: 'none',color:"#000"}} >
                <ListItemText primary={text} />
                </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (

    <>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" style={{ background: '#fff' }}>
          <Toolbar>
            <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' }, flexDirection: 'row', alignItems: 'center', mr: 6 }} >
              <IconButton>
                <AllInclusiveIcon />
              </IconButton>
              <Typography variant="h6" sx={{
                color: 'text.primary', fontWeight: "bold"
              }} >
                Flexy
              </Typography>
            </Box>
            <Box flexGrow={2} ml={{ xs: 0, sm: 0, md: 0, lg: "4rem" }}>
              <IconButton>
                <MenuIcon onClick={(): void => setIsDrawerOpen(!isDrawerOpen)} />
              </IconButton>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Box>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton>
              <MessageIcon />
            </IconButton>
            <IconButton>
              <Badge sx={{
                "& .MuiBadge-badge": {
                  color: "lightgreen",
                  backgroundColor: "green"
                },
                mr: 1
              }} variant="dot">
                <NotificationsNoneIcon />

              </Badge>
            </IconButton>
            <Divider orientation="vertical" flexItem sx={{ my: 2, mr: 2 }} />

            <Box
              component="img"
              sx={{
                height: 30,
                width: 30,
                borderRadius: "50%"

              }}
              alt="The house from the offer."
              src={ProfileImg}
            />

            <Typography variant="h6" sx={{ color: "rgb(119, 126, 137)", display: { xs: 'none', md: 'block' }, fontSize: "1rem", ml: 0.5 }}>Hi, julia</Typography>
            <IconButton sx={{ pl: 0 }} onClick={handleClick}><KeyboardArrowDownIcon /></IconButton>

            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              PaperProps={{ sx: { width: '300px', padding: 2 } }}
              sx={{ marginTop: "0.5rem", padding: "4rem" }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <Typography variant="subtitle1">User Profile</Typography>
              <Box sx={{ display: 'flex' }}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
                    width: 60,
                    borderRadius: "50%",
                    marginRight: "1rem"

                  }}
                  alt="The house from the offer."
                  src={ProfileImg}
                />
                <Box sx={{ mb: 2 }}>
                  <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}> Julia Roberts</Typography>
                  <Typography variant='body1' color='text.secondary' sx={{ fontSize: 12 }}> Administrator</Typography>
                  <Stack direction="row" alignItems="center" gap={1}>
                    <MailOutlineIcon fontSize="small" />
                    <Typography variant="body1" color='text.secondary' sx={{ fontSize: 12 }}>info@flexy.com</Typography>
                  </Stack>
                  <Typography />
                  <Typography />
                </Box>
              </Box>
              <Divider />
              <Stack direction="row" alignItems="center" gap={1}>
                <PersonOutlineIcon />
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">My Profile</Typography>
                  <Typography variant="body1" sx={{ fontSize: 12 }} color='text.secondary'>Account Settings</Typography>
                </Box>
              </Stack>
              <Divider />
              <Stack direction="row" alignItems="center" gap={1}>
                <MailOutlineIcon />
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">My Inbox</Typography>
                  <Typography variant="body1" sx={{ fontSize: 12 }} color='text.secondary'>Messages & Emails</Typography>
                </Box>
              </Stack>
              <Divider />
              <Stack direction="row" alignItems="center" gap={1}>
                <AssignmentIcon />
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">My Tasks</Typography>
                  <Typography variant="body1" sx={{ fontSize: 12 }} color='text.secondary'>To-do and Daily Tasks</Typography>
                </Box>
              </Stack>



              <Button variant="contained" sx={{ width: '100%' }}>Logout</Button>
              <Box></Box>
            </Menu>
          </Toolbar>
        </AppBar>
        {/* <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Drawer
           variant={isGreaterThanSmallBreakpoint ? "permanent" : "temporary"}
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              top: "12%",
              left: "2%",
              width: 220,
              boxSizing: 'border-box',
              borderRadius: 4,
              backgroundColor: "rgb(255, 255, 255)",
              boxShadow: "rgb(90 114 123 / 11%) 0px 7px 30px 0px",
              padding: 2
            },
          }}
        >
          {drawer}

        </Drawer>
        <Box p={2} width='250px' textAlign="center" role='presentation'>
        </Box>
        {/* <Box>Hello world</Box> */}
      </ThemeProvider>
    </>
  )
}

export default NavbarComponent