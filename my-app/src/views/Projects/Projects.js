//Import style:
import { Divider, IconButton, Typography } from "@mui/material";
import "./Projects.css";

//Import components:
import Box from "@mui/material/Box";
import FullscreenSlideshow from "./FullscreenSlideshow";
//Import icons:
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ModeCommentTwoToneIcon from "@mui/icons-material/ModeCommentTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import figmaMobile from "../../assets/Projects/Bachelor/figma-design-mobile.png";
import figmaDashboard from "../../assets/Projects/Bachelor/figmaDashboard.png";
import pwaPDC from "../../assets/Projects/Bachelor/pwaPDC.png";
import featuresAccuracy from "../../assets/Projects/Bachelor/accuracy-features.png";
import modelAccuracy from "../../assets/Projects/Bachelor/accuracyModels.png";

import login from "../../assets/Projects/MobileApp/login.png";
import addingGoal from "../../assets/Projects/MobileApp/addingGoal.png";
import dailygoals from "../../assets/Projects/MobileApp/dailygoals.png";
import journaling from "../../assets/Projects/MobileApp/journaling.png";
import designFigma from "../../assets/Projects/Chatbots/designfigma.png";
import parf1 from "../../assets/Projects/Chatbots/parf1.png";
import chatroomperf from "../../assets/Projects/Chatbots/chatroomperf.png";
import pagechat2 from "../../assets/Projects/Chatbots/pagechat2.png";
import chatbot2 from "../../assets/Projects/Chatbots/chatbot2.png";
function Projects() {
  const bachelorImages = [
    {
      src: figmaMobile,
      description: "Design in Figma for the mobile app of collecting audios.",
    },
    {
      src: figmaDashboard,
      description: "Design in Figma for the admin dashboard.",
    },
    {
      src: pwaPDC,
      description: "The developed PWA for recording audios for patients.",
    },
    {
      src: featuresAccuracy,
      description:
        "Accuracy of the model for each vowel, depending on the features used.",
    },
    {
      src: modelAccuracy,
      description:
        "Accuracy of different models (the tabular model has the highest accuracy).",
    },
  ];

  const mobileImages = [
    // { src: figmaM, description: "Design of the mobile app." },
    { src: login, description: "Login screens." },
    { src: addingGoal, description: "Adding goals screen." },
    { src: dailygoals, description: "Daily goals and managing your goals." },
    { src: journaling, description: "Journaling screens." },
  ];

  const chatbotsInterfaces = [
    // { src: figmaM, description: "Design of the mobile app." },
    {
      src: designFigma,
      description: "My design in  Figma for one of the chatbots.",
    },
    { src: parf1, description: "Landing page of the perfumes chatbot." },
    { src: chatroomperf, description: "Chatroom for perfumes project." },
    {
      src: pagechat2,
      description: "Landing page for non-profit organization.",
    },
    { src: chatbot2, description: "Chatbot for non-profit organization." },
  ];
  return (
    <Box justifyContent={"center"} display={"flex"} flexDirection={"column"}>
      <Box className="Projects">
        <div className="Projects-post">
          <b>Agriculture Full-stack Application (Avaelgo)</b>
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
          Developed a full-stack web application using React and .NET for
          agricultural workers, featuring satellite imagery, weather
          integration, interactive crop maps, and real-time dashboards.
          Contributed to both frontend and backend development, ensuring a
          responsive and data-rich user experience.
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

      <Box className="Projects">
        <div className="Projects-post">
          <b>Bachelor project</b>
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
          <b>Platform for Parkinson's disease detection using audio</b> <br />
          <br />
          Developed an{" "}
          <a
            style={{ fontWeight: "700", color: "#4e8f84" }}
            href="https://github.com/ioanalazea/Audio-Data-Recording-for-Parkinson-s-Disease/tree/main"
          >
            end-to-end platform (link GitHub)
          </a>{" "}
          for early detection of Parkinson’s disease using voice recordings.
          Extracted features using Surfboard and MFDFA, and trained a TabPFN
          classification model. Built a full-stack web app with Firebase
          integration for patient management, secure data storage, and real-time
          audio recording. Included automated testing and cloud deployment.
          <br />
          <br />
          <Box display={"flex"} justifyContent={"center"}>
            {" "}
            <FullscreenSlideshow images={bachelorImages} />
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

      <Box className="Projects">
        <div className="Projects-post">
          <b>Mobile App for managing your personal plans</b>
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
          The idea behind this app was inspired by my interest in mental health.
          It has two main use cases: one for the user to track their goals and
          the other, the user can write each day in a journal, getting reminders
          everyday. Journaling has been proven to help with one's mental health.
          <a
            style={{ fontWeight: "700", color: "#4e8f84" }}
            href="https://github.com/ralucacigmaian/Mobile_App_For_Managing_Your_Personal_Plans"
          >
            Github link
          </a>
          <br />
          <br />
          <Box display={"flex"} justifyContent={"center"}>
            {" "}
            <FullscreenSlideshow images={mobileImages} />
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

      <Box className="Projects">
        <div className="Projects-post">
          <b>School of possibilities (freelance AVA Research project)</b>
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
          Can be accessed here:{" "}
          <a
            style={{ fontWeight: "700", color: "#4e8f84" }}
            href="https://schoolofpossibilities.community/home"
          >
            {" "}
            link
          </a>{" "}
          <br />
          <br />
          Interactive AI Chatbot Interface. Developed a React-based user
          interface for an AI-driven chatbot integrated with a large language
          model (LLM), enabling interactive conversations focused on reimagining
          education. <br /> <br />
          Collaborated with a multidisciplinary team, including youth designers,
          to deliver an engaging, full-screen, accessible dialogue experience
          aligned with the project's educational mission. <br /> <br />
          Implemented custom UI components such as modal-driven slideshows and
          dynamic user inputs to support storytelling and creative exploration
          through AI.
          <br />
          <br />
          The app was tested by around 100 students of different age in Cluj,
          Romania.
          <a
            style={{ fontWeight: "700", color: "#4e8f84" }}
            href="https://
www.radiocluj.ro/2024/01/31/confesiuni-despre-scoala-unui-robot-audio/"
          >
            {" "}
            News article link
          </a>{" "}
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
      <Box className="Projects">
        <div className="Projects-post">
          <b>Custom chatbots (freelance AVA Research project)</b>
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
            <b>Perfumes custom chatbot</b>
          </li>{" "}
          Built a chatbot interface that interacts with users to understand
          their scent preferences and lifestyle, then uses the input to generate
          a tailored perfume suggestion using a custom logic or AI model.{" "}
          <i>(Worked mostly on frontend and backend integration)</i>
          <br />
          <li>
            <b>Non-profit organization custom chatbot</b>
          </li>
          Developed an interactive chatbot interface for a non-profit
          organization, designed to deliver age-appropriate information and
          helpful resources to children. Focused on creating a user-friendly,
          accessible experience while maintaining strict confidentiality and
          ethical considerations.
          <br />
          <br />
          <Box display={"flex"} justifyContent={"center"}>
            <FullscreenSlideshow images={chatbotsInterfaces} />
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

      <Box className="Projects">
        <div className="Projects-post">
          <b>Other projects</b>
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

export default Projects;
