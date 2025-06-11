//Import style:
import { Divider, IconButton, Typography } from "@mui/material";
import "./Study.css";

//Import components:
import Box from "@mui/material/Box";

//Import icons:
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import graduationImage from "../../assets/me_graduation.jpg";
import essexImage from "../../assets/essex.jpg";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ModeCommentTwoToneIcon from "@mui/icons-material/ModeCommentTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";

function Study() {
  return (
    <Box justifyContent={"center"} display={"flex"} flexDirection={"column"}>
      <Box className="Study">
        <div className="Study-post">
          <b>Master's Degree</b> <div>2024-current</div>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <LocationOnIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            School of Computer Science and Computer Engineering, University of
            Essex
          </Typography>
        </Box>
        <Divider></Divider>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <SchoolIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Artificial Intelligence{" "}
          </Typography>
        </Box>
        <Divider></Divider>
        <Box width={"100%"} alignSelf={"center"} display={"flex"} justifyContent={"center"}>
          <img className="Study-image" src={essexImage} />
        </Box>

        <Typography
          fontFamily={"Consolas"}
          style={{
            border: "5px solid #c0c0c0",
            margin: "10px",
            padding: "5px",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          Natural Languange Engineering, Intelligent Systems and Robotics,
          Machine Learning, Data Science and Decision Making, Neural Networks
          and Deep Learning, Professional Practice and Methodology,
          Computational Models in Economics
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
          }}
        >
          <IconButton>
            <FavoriteTwoToneIcon />
          </IconButton>
          <IconButton>
            <ModeCommentTwoToneIcon />
          </IconButton>
          <IconButton>
            <MoreHorizTwoToneIcon />
          </IconButton>
        </div>
      </Box>
      <Box className="Study">
        <div className="Study-post">
          <b>Bachelor's Degree</b> <div>2019-2023</div>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <LocationOnIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Faculty of Automation and Computing, Politehnica University of
            Timișoara
          </Typography>
        </Box>
        <Divider></Divider>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <SchoolIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Computer and Communication Technologies{" "}
          </Typography>
        </Box>
        <Divider></Divider>
        <Box width={"100%"} alignSelf={"center"} display={"flex"} justifyContent={"center"}>
          <img className="Study-image" src={graduationImage} />
        </Box>

        <Typography
          fontFamily={"Consolas"}
          style={{
            border: "5px solid #c0c0c0",
            margin: "10px",
            padding: "5px",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          Computers Programming, Data Structures and Algorithms, Object Oriented
          Programming, Computer Organization, Programming Techniques, Digital
          Logic, Databases, Operation Systems, Web Programming, Expert systems,
          Artificial Intelligence, Software Design, Embedded Systems, Data
          Mining, Hardware/Software Codesign
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
          }}
        >
          <IconButton>
            <FavoriteTwoToneIcon />
          </IconButton>
          <IconButton>
            <ModeCommentTwoToneIcon />
          </IconButton>
          <IconButton>
            <MoreHorizTwoToneIcon />
          </IconButton>
        </div>
      </Box>
      <Box className="Study">
        <div className="Study-post">
          <b>Exchange semester</b> <div>2021-2022</div>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <LocationOnIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            FH Salzburg (University of Applied Sciences)
          </Typography>
        </Box>
        <Divider></Divider>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <SchoolIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Information and Communication Technologies{" "}
          </Typography>
        </Box>
        <Divider></Divider>
        <Typography
          fontFamily={"Consolas"}
          style={{
            border: "5px solid #c0c0c0",
            margin: "10px",
            padding: "5px",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          During my exchange semester, I have taken courses such as{" "}
          <b>
            Applied data analysis, Data Analysis with Python, IT Security
            Engineering, Digitalisation & Sales, Software Design, Graphic Design
            Project, Project management
          </b>
          , while also working in multicultural teams with people from all over
          the world, thus improving communication in a foreign language. The
          semester abroad allowed me to grow and develop both academically and
          personally. 🗺️
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
          }}
        >
          <IconButton>
            <FavoriteTwoToneIcon />
          </IconButton>
          <IconButton>
            <ModeCommentTwoToneIcon />
          </IconButton>
          <IconButton>
            <MoreHorizTwoToneIcon />
          </IconButton>
        </div>
      </Box>

      <Box className="Study">
        <div className="Study-post">
          <b>Romanian Baccalaureate</b> <div>2014–2019</div>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <LocationOnIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            "Avram Iancu" High School
          </Typography>
        </Box>
        <Divider></Divider>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <SchoolIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Mathematics - Computer Science (intensive)
          </Typography>
        </Box>
        <Divider></Divider>
        <Typography
          fontFamily={"Consolas"}
          style={{
            border: "5px solid #c0c0c0",
            margin: "10px",
            padding: "5px",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          Mathematics, Physics, Informatics (Computer Programming, Data
          Structures and Algorithms) with additional courses of Web development
          and Databases.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
          }}
        >
          <IconButton>
            <FavoriteTwoToneIcon />
          </IconButton>
          <IconButton>
            <ModeCommentTwoToneIcon />
          </IconButton>
          <IconButton>
            <MoreHorizTwoToneIcon />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
}

export default Study;
