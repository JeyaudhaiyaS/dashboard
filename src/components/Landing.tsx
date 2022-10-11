import React, { useState } from "react";
import NavbarComponent from "../components/Navbar";
import Transaction from "../components/Transaction";
import RenderChart from "../components/ChartComponent";
import Performance from "../components/Performance";
import Sales from "../components/Sales";
import FooterCard from "../components/FooterCard";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { Typography, Button } from "@mui/material";
const Landing = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const theme = useTheme();
  return (
    <>
      <NavbarComponent
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Box
        sx={{
          ...(isDrawerOpen
            ? {
                ml: 35,
              }
            : { ml: 2 }),
          mr: 5,
        }}
      >
        <Transaction />

        <Box sx={{ mx: 6, my: 4 }}>
          <RenderChart />
        </Box>
        <Box sx={{ mx: 6, my: 4 }}>
          <Performance />
        </Box>
        <Box sx={{ mx: 6, my: 4 }}>
          <Sales />
        </Box>
        <Box sx={{ mx: 6, my: 4 }}>
          <FooterCard />
        </Box>
      </Box>
      {/* <Typography variant="subtitle1">subtitle</Typography>
        <Typography>body1</Typography>
        <Button>Button</Button> */}
    </>
  );
};

export default Landing;
