import * as React from "react";
import "./App.css";
import "./fonts/Oliver-Regular.ttf";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useNavigate } from "react-router-dom";

//Import components:
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Tooltip, Typography } from "@mui/material";
import MainContainer from "./components/MainContainer/MainContainer";
import AboutMe from "./views/AboutMe/AboutMe";
import Study from "./views/Study/Study";
import Work from "./views/Work/Work";
import Skills from "./views/Skills/Skills";
import Extra from "./views/Extra/Extra";
import Projects from "./views/Projects/Projects";

//Import icons:
import CloseIcon from "@mui/icons-material/Close";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import profileImage from "../src/assets/profilepicture.jpg";
import sound from "../src/assets/TrackforvirtualCV.mp3";
import InfoOutlined from "@mui/icons-material/InfoOutlined";

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [option, setOption] = React.useState("about");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();


  return (
    // <div className="App" style={{ justifyContent: "center", display: "flex", width: "fit-content" }}>
      <Grid className="App" container direction={"row"} display={"flex"} spacing={1} > 
    <Grid item container xs={12} md={4} >  
    <Box className="Box-personal-info">
        <Grid container>
          <Grid
            item
            container
            className="Header"
            direction={"column"}
            display={"flex"}
            position={"relative"}
          >
            <Grid item fontSize={"large"} color={"#f1f1f1"}>
              <b>LAZEA IOANA BIANCA</b>
            </Grid>
            <Grid
              item
              right={"0px"}
              position={"absolute"}
              direction={"row"}
              display={"flex"}
            >
              <div className="dot">
                <HorizontalRuleIcon
                  style={{ width: "17px", height: "17px", alignSelf: "center" }}
                />
              </div>
              <div className="dot">
                <CropSquareIcon
                  style={{ width: "17px", height: "17px", alignSelf: "center" }}
                />
              </div>
              <div className="dot">
                <CloseIcon
                  style={{ width: "17px", height: "17px", alignSelf: "center" }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            className="Header-bottom-personal-info"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <div style={{ marginLeft: "15px", marginTop: "10px" }}>
              <u>M</u>enu
            </div>
          </Grid>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              style: {
                background: "#E0DFE4",
              },
            }}
          >
            <MenuItem
              onClick={() => {
                setOption("about");
                handleClose();
              }}
            >
              <Typography fontFamily={"Consolas"}>
                <u>A</u>bout me
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setOption("study");
                handleClose();
              }}
            >
              <Typography fontFamily={"Consolas"}>
                <u>S</u>tudy
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setOption("work");
                handleClose();
              }}
            >
              <Typography fontFamily={"Consolas"}>
                <u>W</u>ork and volunteering
              </Typography>
            </MenuItem>
                    <MenuItem
              onClick={() => {
                setOption("projects");
                handleClose();
              }}
            >
              <Typography fontFamily={"Consolas"}>
                <u>P</u>rojects
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setOption("passions");
                handleClose();
              }}
            >
              <Typography fontFamily={"Consolas"}>
                <u>S</u>kills and hobbies
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setOption("extra");
                handleClose();
              }}
            >
              <Typography fontFamily={"Consolas"}>
                <u>E</u>xtra
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/virtualcv/artgallery");
                handleClose();
              }}
            >
              <Typography fontFamily={"Consolas"}>
                <u>A</u>rt Gallery
              </Typography>
            </MenuItem>
          </Menu>

          <Grid
            item
            container
            direction={"row"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Grid item>
              <img src={profileImage} className="Profile-pic" />
            </Grid>
          </Grid>

          <Grid item container margin={"20px"} display={"flex"} flexDirection={"column"}>
            <Typography fontFamily={"Consolas"}>
              <b style={{ color: "rgba(78, 143, 132, 1)" }}>Date of birth:</b>{" "}
              20/07/2000
              <br />
              <b style={{ color: "rgba(78, 143, 132, 1)" }}>
                Nationality:
              </b>{" "}
              Romanian
              <br />
            </Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <EmailIcon
                style={{ color: "rgba(78, 143, 132, 1)", marginRight: "5px" }}
              />
              <Typography style={{ fontFamily: "Consolas" }}>
                lazeaioanabianca@gmail.com
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <PhoneIcon
                style={{ color: "rgba(78, 143, 132, 1)", marginRight: "5px" }}
              />
              <Typography style={{ fontFamily: "Consolas" }}>
                (+44) 07927748423
              </Typography>
            </Box>
            <AudioPlayer
              src={sound}
              style={{
                boxShadow: "none",
                backgroundColor: "#c0c0c0",
                borderRadius: "5px",
                marginTop: "19px",
              }}
            />
            
            <Tooltip title={"The song is composed by myself for the virtual CV."}>
            <InfoOutlined style={{color:"#c0c0c0", marginTop:"10px"}}/>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </Grid>

    <Grid item container xs={12} md={8} >
    {option === "about" && (
        <MainContainer
          title="About me.exe"
          children={<AboutMe></AboutMe>}
        ></MainContainer>
      )}
      {option === "study" && (
        <MainContainer
          title="Study.exe"
          children={<Study></Study>}
        ></MainContainer>
      )}
      {option === "work" && (
        <MainContainer
          title="Work and volunteering.exe"
          children={<Work></Work>}
        ></MainContainer>
      )}
            {option === "projects" && (
        <MainContainer
          title="Projects.exe"
          children={<Projects></Projects>}
        ></MainContainer>
      )}
      {option === "passions" && (
        <MainContainer
          title="Skills and hobbies.exe"
          children={<Skills />}
        ></MainContainer>
      )}
      {option === "extra" && (
        <MainContainer title="Extra.exe" children={<Extra />}></MainContainer>
      )}    </Grid>

      </Grid>
    // </div>
  );
}

export default App;
