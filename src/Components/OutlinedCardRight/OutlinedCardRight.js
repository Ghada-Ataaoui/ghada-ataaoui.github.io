/** @format */

import Card from "@mui/material/Card";
import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../OutlinedCardLeft/outlinedcardleft.css";
import portfolio_image from "../../assets/protoflio_image.jpg";
import { Grid } from "@mui/material";
import AppList from "../AppList";



const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const card = (
  <React.Fragment>
    <CardContent className="card_content">
        <AppList/>
    </CardContent>
  </React.Fragment>
);

function OutlinedCardRight() {
  return (
    <div className="OutlinedCard">
      <Box sx={{ minWidth: 300 }}>
        <Card
          variant="outlined"
          sx={{ borderRadius: "20px", backgroundColor: "#1E1E1F" }}
        >
          {card}
        </Card>
      </Box>
    </div>
  );
}

export default OutlinedCardRight;
