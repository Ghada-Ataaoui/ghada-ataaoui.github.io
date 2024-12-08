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
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const card = (
  <React.Fragment>
    <CardContent className="card_content">
      <img
        src={portfolio_image}
        className="portofolio_image"
        alt="portfolio_image"
      />
      <Typography
        gutterBottom
        sx={{ color: "text.primary", fontSize: 26, wordSpacing: 2,fontWeight:"bold", marginBottom:"15px" }}
      >
        Ghada Ataoui
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#2B2B2C",
          color: "white",
          fontSize: 12,
          borderRadius: "8px",
          width: "max-content",
        }}
      >
        Web Developer | AI enthusiast
      </Button>
      <hr style={{ width: "13rem", margin: "20px", borderColor:"#979798"}}></hr>
      <Grid container spacing={3} direction={"column"} xs={12}>
        <Grid item>
          <div className="contact-item">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0,0.4) 0px 3px 8px",
                width: "45px",
                height: "45px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EmailOutlinedIcon sx={{ color: "#800020" }}></EmailOutlinedIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <p className="contact-link">ghada.ataoui@supcom.tn</p>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="contact-item">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0,0.4) 0px 3px 8px",
                width: "45px",
                height: "45px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LocalPhoneOutlinedIcon
                sx={{ color: "#800020" }}
              ></LocalPhoneOutlinedIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <p className="contact-link">+21650606584</p>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="contact-item">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0,0.4) 0px 3px 8px",
                width: "45px",
                height: "45px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LocationOnOutlinedIcon
                sx={{ color: "#800020" }}
              ></LocationOnOutlinedIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <p className="contact-link">Ariana, Tunisia</p>
            </div>
          </div>
        </Grid>
      </Grid>
      <hr style={{ width: "13rem", margin: "20px",borderColor:"#979798"}}></hr>
      <Grid container spacing={2} sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
        <Grid item>
          <a href="https://www.linkedin.com/in/ghada-ataoui-387083229/" style={{color:"#979798"}}>
            <LinkedInIcon></LinkedInIcon>
          </a>
        </Grid>
        <Grid item><a href="https://github.com/Ghada-Ataaoui" style={{color:"#979798"}}>
            <GitHubIcon></GitHubIcon>
          </a></Grid>
        <Grid item></Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
);

function OutlinedCardLeft() {
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

export default OutlinedCardLeft;
