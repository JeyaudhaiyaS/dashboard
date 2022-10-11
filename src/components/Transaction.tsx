import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton, Stack, Grid } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import congratsImg from "../assets/congrats.jpg";
const Transaction = () => {
  const TransactionDetails = [
    {
      name: "Purchases",
      amount: 2367,
      transaction_type: "Monthly Sales",
      size: 1,
      iconType: LocalMallIcon,
    },
    {
      name: "Total Earnings",
      amount: "$93438.78",
      transaction_type: "Monthly Revenue",
      size: 2,
      iconType: AttachMoneyIcon,
    },
  ];
  return (
    <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
      <Grid item xs={12} sm={12} md={6} lg={5}>
        <Card
          sx={{
            display: "flex",
            height: "200px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column",mx:1 }}>
            <CardContent>
              <Typography variant="subtitle2" sx={{mb:2}}>Congratulations Julia</Typography>
              <Typography variant="h4" sx={{mb:2}}>$39,358 +9%</Typography>
              <Button size="small" variant="contained" color="secondary"><Typography variant='body2'>Download</Typography> </Button>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200, height: 200, objectFit: "cover" }}
            image={congratsImg}
            alt="Live from space album cover"
          ></CardMedia>
        </Card>
      </Grid>
      {TransactionDetails.map((transaction) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={transaction.size === 1 ? 4 : 6}
          lg={transaction.size === 1 ? 3 : 4}
        >
          <Card
            sx={{
              display: "flex",
              height: "200px",
              flexGrow: 1,
              justifyContent: "space-between",
              alignItems: "start",
              px: 2,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography variant="subtitle2" sx={{ mb: 3 }}>
                  {transaction.name}
                </Typography>
                <Typography variant="h4">{transaction.amount}</Typography>
                <Typography variant="body1">
                  {transaction.transaction_type}
                </Typography>
              </CardContent>
            </Box>
            <IconButton
              disableRipple
              sx={{ mt: 2, backgroundColor: "#03C9D7", color: "#fff" }}
            >
              <transaction.iconType />
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Transaction;
