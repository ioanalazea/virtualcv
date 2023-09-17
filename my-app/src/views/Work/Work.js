//Import style:
import { Divider, IconButton, Typography } from "@mui/material";
import "./Work.css";

//Import components:
import Box from "@mui/material/Box";

//Import icons:
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import logoavaelgo from "../../assets/logoavaelgo.png";
import logoacc from "../../assets/accenturelogo.png";
import logoava from "../../assets/ava.png";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ModeCommentTwoToneIcon from "@mui/icons-material/ModeCommentTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
function Work() {
  return (
    <Box justifyContent={"center"} display={"flex"} flexDirection={"column"}>
      <Box className="Work">
        <div className="Work-post">
          <b>Junior Software Developer</b> <div>2022-current</div>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <WorkIcon style={{ marginRight: "5px" }} />
            <Typography style={{ fontFamily: "Consolas" }}>
              Avaelgo SRL
            </Typography>
          </div>

          <img height="70px" src={logoavaelgo} />
        </Box>
        <Divider></Divider>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <LocationOnIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Timișoara, Romania
          </Typography>
        </Box>
        <Divider></Divider>
        <Box width={"100%"} alignSelf={"center"} display={"flex"}></Box>

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
          <li>
            Working on the user interface (UI) of web applications, with
            technologies such as HTML, CSS, and JavaScript to create visually
            appealing and user-friendly interfaces.
          </li>
          <li>
            Building the server-side logic and functionality of web
            applications. (.NET)
          </li>
          <li>
            Using version control systems like Git to track changes to the
            codebase, collaborate with team members, and manage code
            repositories.
          </li>
          <li>
            Working closely with designers, and other team members to ensure the
            successful development and deployment of web applications.
          </li>
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
      <Box className="Work">
        <div className="Work-post">
          <b>Intern</b> <div>2023-current</div>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <WorkIcon style={{ marginRight: "5px" }} />
            <Typography style={{ fontFamily: "Consolas" }}>
              AVA Research{" "}
            </Typography>
          </div>

          <img height="70px" src={logoava} />
        </Box>
        <Divider></Divider>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <LocationOnIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Cluj-Napoca, Romania (Remote)
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
          Design and architect AI solutions that address specific business
          problems or opportunities. This may include building custom machine
          learning models, leveraging pre-existing AI technologies, or
          recommending AI tools and platforms.
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
      <Box className="Work">
        <div className="Work-post">
          <b>Junior Analyst Programmer</b> <div>2021</div>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <WorkIcon style={{ marginRight: "5px" }} />
            <Typography style={{ fontFamily: "Consolas" }}>
              Accenture Industrial Software Solutions
            </Typography>
          </div>

          <img
            height="20px"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            src={logoacc}
          />
        </Box>
        <Divider></Divider>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <LocationOnIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Timișoara, Romania
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
          <li>
            {" "}
            Writing, coding, testing, and analyzing software programs and
            applications. <br />
          </li>
          <li>
            Research, design, document, and modify software specifications
            throughout the production life cycle.
            <br />
          </li>
          <li>
            Some of the tools we used: drawIO for software diagrams, gcc, bake,
            git, C++ as programming language, googletest.
          </li>
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

      <Box className="Work">
        <div className="Work-post">
          <b>Volunteering experience</b>
        </div>

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
          {" "}
          <Typography
            style={{
              fontFamily: "Consolas",
              fontSize: "large",
              fontWeight: "700",
              color: "#4e8f84",
            }}
          >
            <u>Cinema Victoria (Timișoara) </u> <br />
          </Typography>
          I started working as a volunteer at a Timișoara independent film
          theater in 2023. My duties included helping with everything that was
          required, like scanning tickets, promoting the cinema, planning
          various events, etc.
          <br />
          <Typography
            style={{
              fontFamily: "Consolas",
              fontSize: "large",
              fontWeight: "700",
              color: "#4e8f84",
            }}
          >
            <u>Summer Well Festival 2023 (Bucharest) </u> <br />
          </Typography>
          During the Summer Well music event in 2023, I volunteered. Since I was
          on the "Moving" crew, I had to assist with all requirements.
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

      <Box className="Work">
        <div className="Work-post">
          <b>Personal projects</b>
        </div>

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
          <li>
            {" "}
            <b>Bachelor project </b> <br />
            Platform for Parkinson's disease detection using audio. Developed a{" "}
            <a
              style={{ fontWeight: "700", color: "#4e8f84" }}
              href="https://github.com/ioanalazea/Audio-Data-Recording-for-Parkinson-s-Disease/blob/main/README.md"
            >
              Progressive Web App
            </a>{" "}
            for audio files recording to be used for the detection and proposed
            a machine learning model.
            <br />
            <br />
            <br />
          </li>
          <li>
            <b>Mobile App for managing your personal plans</b> <br />
            The idea behind this app was inspired by my interest in mental
            health. It has two main use cases: one for the user to track their
            goals and the other, the user can write each day in a journal,
            getting reminders everyday. Journaling has been proven to help with
            one's mental health.
            <a
              style={{ fontWeight: "700", color: "#4e8f84" }}
              href="https://github.com/ralucacigmaian/Mobile_App_For_Managing_Your_Personal_Plans"
            >
              Github link
            </a>
            <br />
            <br />
            <br />
          </li>
          <li>
            <b>Spring Boot Car Rental</b>
            <br />
            This was an{" "}
            <a
              style={{ fontWeight: "700", color: "#4e8f84" }}
              href="https://github.com/Software-Design-JLS/Springboot_Car_Rental"
            >
              assigment
            </a>{" "}
            for the Software Design course in my exchange semester.
            <br />
            <br />
          </li>
          <li>
            <b>Java University Project</b>
            <br />
            The purpose of this{" "}
            <a
              style={{ fontWeight: "700", color: "#4e8f84" }}
              href=" https://github.com/fis2021/DentalHealthcareAssistant"
            >
              project{" "}
            </a>{" "}
            was to learn how to work in Agile teams, to use version control
            systems and to practic object oriented concepts.
            <br />
            <br />
          </li>
          <li>
            <b>Maze Game in Unity</b>
            <br />A{" "}
            <a
              style={{ fontWeight: "700", color: "#4e8f84" }}
              href="https://ioanalazea.itch.io/the-amazeing-game"
            >
              small game project{" "}
            </a>{" "}
            I did for a University course.
            <br />
            <br />
          </li>
          <li>
            <b>PacMan Game in Unity</b>
            <br />A{" "}
            <a
              style={{ fontWeight: "700", color: "#4e8f84" }}
              href="https://github.com/ioanalazea/Pac-Man-Game"
            >
              small game project{" "}
            </a>{" "}
            I did.
            <br />
            <br />
          </li>
          <li>
            <b>Traffic Sign Recognition on Raspberry Pi</b>
            <br />
          </li>
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

export default Work;
