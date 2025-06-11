//Import style:
import { Divider, IconButton, Typography } from "@mui/material";
import "./Work.css";

//Import components:
import Box from "@mui/material/Box";

//Import icons:
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import logoavaelgo from "../../assets/logoavaelgo.png";
import logoacc from "../../assets/accenturelogo.png";
import logoava from "../../assets/ava.png";
import volunteering from "../../assets/volunteering.jpg";

import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ModeCommentTwoToneIcon from "@mui/icons-material/ModeCommentTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";

function Work() {
  return (
    <Box justifyContent={"center"} display={"flex"} flexDirection={"column"}>
      <Box className="Work">
        <div className="Work-post">
          <b>Software Developer</b> <div>2022-2024</div>
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
            <b>Frontend Development</b>: Built and maintained responsive,
            user-friendly interfaces for web applications with <b>React</b>
            and <b>TypeScript</b>, with a strong focus on accessibility and
            performance. Utilized <b>Material UI (MUI)</b> and other modern UI
            libraries to create clean, intuitive, and visually consistent
            components using HTML, CSS, and JavaScript.
          </li>
          <li>
            <b>Backend Development</b>: Designed and implemented server-side
            logic using <b>.NET</b>, developing robust APIs and business logic
            to support web application functionality. Worked with <b>SQL</b>{" "}
            databases for efficient data storage, retrieval, and management.
          </li>
          <li>
            <b>Version Control</b>: Used <b>Azure DevOps</b> to manage codebase
            changes, collaborate with team members, and maintain organized,
            versioned repositories.
          </li>
          <li>
            <b>Team Collaboration</b>: Partnered with designers and
            cross-functional teams to deliver cohesive and user-centered web
            applications from development to deployment.
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
          <b>Freelance software developer</b> <div>2023-current</div>
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
          <li>
            <b>Frontend & UX Design</b>: Designed and implemented frontend
            interfaces for AI tools using <b>Figma</b> for UI/UX prototyping,
            and built responsive UIs with <b>React</b> and <b>TypeScript</b> to
            ensure smooth user interaction with AI systems.
          </li>
          <li>
            <b>AI Solution Architecture</b>: Designed and developed AI-driven
            solutions tailored to business needs, including{" "}
            <b>
              custom machine learning models, prompt engineering for large
              language models, and natural language processing pipelines.
            </b>
          </li>
          <li>
            <b>ML Engineering & Optimization</b>: Applied{" "}
            <b>feature engineering, hyperparameter tuning,</b> and used
            libraries such as TensorFlow, PyTorch, Scikit-learn, and Keras to
            build and optimize machine learning models.
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
          <b>Junior Analyst Programmer Summer Intern</b>{" "}
          <div>2021 (3 months)</div>
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
            <b>Software Development</b>: Wrote, coded, tested, and analyzed
            software applications in <b>C++</b>, contributing to the full
            development lifecycle from requirements gathering to deployment.{" "}
            <br />
          </li>
          <li>
            <b>Software Design & Documentation</b>: Researched, designed, and
            maintained <b>software specifications</b>, updating documentation
            throughout the production lifecycle to ensure clarity and
            consistency.
            <br />
          </li>
          <li>
            <b>Tooling & Workflow</b>: Utilized tools such as <b>DrawIO</b> for
            system architecture diagrams, <b>gcc</b> and <b>bake</b> for
            compiling and building code, and <b>Git</b> for version control and
            team collaboration.
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
          In 2023, I began volunteering at an independent film theater in
          Timișoara. I took on diverse responsibilities, including ticket
          scanning, promoting cinema events, assisting with event planning, and
          providing general support to ensure smooth operations and an
          exceptional audience experience.
          <br /> <br />
          <Typography
            style={{
              fontFamily: "Consolas",
              fontSize: "large",
              fontWeight: "700",
              color: "#4e8f84",
            }}
          >
            <u>VTeam Essex Student Union </u> <br />
          </Typography>
          <li>
            <b>Art Club Volunteer</b>,
            <i> Woodlands Daycare Center, Colchester, UK</i> - Organizing and
            leading creative art activities for adults, fostering their artistic
            expression and creativity while creating a fun and supportive
            environment.
          </li>
          <li>
            <b>Coding Club Mentor</b>,<i> Colchester, UK</i> - Teaching basic
            programming concepts to young children through interactive and
            engaging activities, inspiring their interest in technology and
            developing foundational coding skills.
          </li>
          <br />
          <i>Nominated for Regular Volunteer of the Year</i>
          <Box
            width={"100%"}
            alignSelf={"center"}
            display={"flex"}
            justifyContent={"center"}
          >
            <img className="Study-image" src={volunteering} />
          </Box>
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
