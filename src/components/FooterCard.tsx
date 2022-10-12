import React from 'react'
import {
    Card, CardMedia, CardActions, CardContent, Button,
    Typography, Divider, Stack, IconButton, ListItem, ListItemAvatar,
    ListItemText, Badge, Box, Grid, List, Avatar
} from '@mui/material'
import BusinessMan from "../assets/cardImg.jpg"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AvatarOne from "../assets/avatar-1.jpg"
import AvatarTwo from "../assets/avatar-2.jpg"
import AvatarThree from "../assets/avatar-3.jpg"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { createTheme, ThemeProvider } from '@mui/material';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#03C9D7",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#FB9678',
        },
    },
})
const FooterCard = () => {
    const salesInformtion = [
        {
            type: "Top Sales",
            name: "Johnathan Doe",
            percentage: "+68",
            icon: ShoppingCartIcon
        },
        {
            type: "Best Seller",
            name: "Material Pro Admin",
            percentage: "+68",
            icon: StarBorderIcon
        },
        {
            type: "Most Commented",
            name: "Ample Admin",
            percentage: "+68",
            icon: ChatBubbleOutlineIcon
        },
    ]
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
    return (
       
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Card sx={{ p: 2, height: 470 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={BusinessMan}
                        />
                        <CardContent>
                            {/* <Stack direction="row" sx={{alignItems:"center"}}>
                    <AccessTimeIcon fontSize='small'sx={{mr:2}}/>
                    <Typography align="right" gutterBottom variant="caption">
                        22 March, 2021
                    </Typography>
                </Stack> */}
                            <ListItem>
                                <ListItemAvatar sx={{ minWidth: "20px", mr: 1, alignSelf: "center" }}>
                                    <AccessTimeIcon />
                                </ListItemAvatar>
                                <ListItemText secondary="Jan 7, 2014" sx={{ mt: 0 }} />
                            </ListItem>
                            <Typography gutterBottom variant="subtitle2">
                                Super awesome, React 18 is coming soon!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }} >
                                <Button size="small" sx={{  fontSize: 10, mr: 2, color: "#fff" }} variant="contained">Medium</Button>
                                <Button size="small" variant="contained" color="secondary">
                                    <Typography variant='body2'>Low</Typography>
                                    </Button>
                            </Stack>
                        </CardActions>
                        <Divider />
                        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", my: 3 }}>
                            <Stack direction="row" sx={{ alignItems: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="50"
                                    image={AvatarThree}
                                />
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="50"
                                    image={AvatarTwo}
                                />
                                
                            </Stack>
                            <IconButton><ChatBubbleOutlineIcon /></IconButton>
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Card sx={{p:2, height: 470 }}>
                        <CardContent>
                            <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }} >
                                <Typography gutterBottom variant="h5">
                                    Weekly Stats
                                </Typography>
                                <MoreHorizIcon />
                            </Stack>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {salesInformtion.map(item => (
                                    <>
                                        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", mr: 2 }} >
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <item.icon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={item.type} secondary={item.name} />
                                            </ListItem>
                                            <Badge badgeContent={`${item.percentage}%`} sx={{
                                                "& .MuiBadge-badge": {
                                                    backgroundColor: "#EBEBEB",
                                                    color: "#948689"
                                                }
                                            }} />
                                        </Stack>
                                    </>
                                ))}
                            </List>
                        </CardContent>
                        <Box sx={{ height: 200 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    width={200}
                                    height={60}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 0,
                                        left: 0,
                                        bottom: 5,
                                    }}
                                >
                                    <Area type="monotone" dataKey="uv" stroke="#27D1DD" fill="#F2FCFD" strokeWidth={2} />
                                    <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)", border: "1px solid rgba(0, 0, 0, 0.5)" }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Card sx={{ p: 2, height: 470 }}>
                        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }} >
                            <Typography gutterBottom variant="h5">
                                Medical Pro Branding
                            </Typography>
                           <MoreHorizIcon />
                        </Stack>
                        <Button size="small" sx={{ backgroundColor: "#E5FAFB", fontSize: 10, color: "#03C9D7" }}>16 APR, 2021</Button>
                        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }} >
                            <Box sx={{ my: 2 }}>
                                <ListItemText
                                    disableTypography
                                    primary={<Typography variant='caption'>MyTitle</Typography>}
                                    secondary={<Typography variant='body1'>Oct 23, 2021</Typography>}
                                />
                                <Divider orientation="vertical" />
                            </Box>
                            <Box>
                                <ListItemText
                                    disableTypography
                                    primary={<Typography variant='caption'>Budget</Typography>}
                                    secondary={<Typography variant='body1'> $98,500
                                    </Typography>}
                                />
                                <Divider orientation="vertical" />
                            </Box>
                            <Box>
                                <ListItemText
                                    disableTypography
                                    primary={<Typography variant='caption'>Expense</Typography>}
                                    secondary={<Typography variant='body1'>$63,000
                                    </Typography>}
                                />
                                <Divider orientation="vertical" flexItem />
                            </Box>
                            <Divider orientation='horizontal' />
                        </Stack>
                        <Divider />
                        <Box sx={{ my: 2 }}>
                            <Typography gutterBottom variant="subtitle2">
                                Teams
                            </Typography>
                            <Stack direction="row" sx={{ justifyContent: "start", alignItems: "center", mb: 2 }} >
                                <Button size="small" sx={{ fontSize: 10, mr: 2, color: "#fff" }} color="primary" variant="contained">Bootstrap</Button>
                                <Button size="small" sx={{ fontSize: 10, color: "#fff" }} color="secondary" variant="contained">Angular</Button>
                            </Stack>
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <Divider />
                            <Typography gutterBottom variant="subtitle2">
                                Leaders
                            </Typography>
                            <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center", mb: 2 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="30"
                                    image={AvatarThree}
                                />
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="30"
                                    image={AvatarTwo}
                                />
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="30"
                                    image={AvatarThree}
                                />
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="30"
                                    image={AvatarTwo}
                                />
                            </Stack>
                            <Divider />
                        </Box>
                        <Box>
                            <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }}>
                                <Button size="small" variant="contained" color="primary">
                                <Typography variant='body2'>Add</Typography>
                                </Button>
                                <Typography variant='caption' >36 Recent Transactions</Typography>
                            </Stack>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        
    )
}

export default FooterCard