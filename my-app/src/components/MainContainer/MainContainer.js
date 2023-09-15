//Import style:
import "./MainContainer.css";

//Import components:
import Box from "@mui/material/Box";
import Grid from "@mui/material/Box";

//Import icons:
import CloseIcon from "@mui/icons-material/Close";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import myImage from "../../assets/paint.png";
import image from "../../assets/paint2.JPG";

function MainContainer({ title, children }) {
  return (
    <Box className="Box">
      <Grid container>
        <Grid
          item
          container
          className="Header"
          direction={"column"}
          display={"flex"}
          position={"relative"}
        >
          <Grid item style={{color: "#f1f1f1", fontSize:"large"}}>{title}</Grid>
          <Grid
            item
            right={"0px"}
            position={"absolute"}
            direction={"column"}
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
        <Grid item className="Header-bottom">
          <div style={{ marginLeft: "15px" }}>
            <u>F</u>ile
          </div>
          <div style={{ marginLeft: "15px" }}>
            <u>E</u>dit
          </div>
          <div style={{ marginLeft: "15px" }}>
            <u>V</u>iew
          </div>
          <div style={{ marginLeft: "15px" }}>
            <u>I</u>mage
          </div>
          <div style={{ marginLeft: "15px" }}>
            <u>H</u>elp
          </div>
        </Grid>

        <Grid item container direction={"row"} display={"flex"}>
          <Grid item marginRight={"5px"} marginLeft={"5px"}>
            <img src={myImage} />
          </Grid>
          <Grid item maxHeight={"450px"} maxWidth={"90%"} overflow={"scroll"} backgroundColor={"#c0c0c0"}>
            {children}
          </Grid>
        </Grid>

        <Grid item className="Footer">
          <img src={image} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainContainer;
