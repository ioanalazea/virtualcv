//Import style:
import { Divider, IconButton, Typography } from "@mui/material";
import "./Skills.css";

//Import components:
import Box from "@mui/material/Box";

//Import icons:
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import BadgeIcon from "@mui/icons-material/Badge";
import CodeIcon from "@mui/icons-material/Code";
import PianoIcon from "@mui/icons-material/Piano";
import MicIcon from "@mui/icons-material/Mic";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ComputerIcon from "@mui/icons-material/Computer";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ModeCommentTwoToneIcon from "@mui/icons-material/ModeCommentTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
function Skills() {
  return (
    <Box justifyContent={"center"} display={"flex"} flexDirection={"column"}>
      <Box className="Skills">
        <div className="Skills-post">
          <b>Language skills</b>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            justifyContent: "space-between",
          }}
        >
          <div>Romanian</div>
          <div>
            <span class="Skills-dot"></span>
            <span class="Skills-dot"></span>
            <span class="Skills-dot"></span>
            <span class="Skills-dot"></span>
            <span class="Skills-dot"></span>
          </div>
        </Box>
        <div style={{ margin: "5px", color: "#bbb" }}> Native</div>
        <Divider></Divider>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            justifyContent: "space-between",
          }}
        >
          <div>English</div>
          <div>
            <span class="Skills-dot"></span>
            <span class="Skills-dot"></span>
            <span class="Skills-dot"></span>
            <span class="Skills-dot"></span>
            <span class="Skills-dot"></span>
          </div>
        </Box>
        <div style={{ margin: "5px", color: "#bbb" }}>
          {" "}
          Full professional proficiency
        </div>
        <div style={{ margin: "5px", color: "#bbb", fontWeight: 700 }}>
          {" "}
          Cambridge English Level 3 Certificate in ESOL International
          (Advanced), Grade A (200/210)
        </div>
        <div style={{ margin: "5px", color: "#bbb", fontWeight: 700 }}>
          {" "}
          IELTS, Grade 8/9
        </div>
        <Divider></Divider>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            justifyContent: "space-between",
          }}
        >
          <div>German</div>
          <div>
            <span class="Skills-dot"></span>
            <span class="Skills-dot"></span>
            <span class="Skills-dot-blank"></span>
            <span class="Skills-dot-blank"></span>
            <span class="Skills-dot-blank"></span>
          </div>
        </Box>
        <div style={{ margin: "5px", color: "#bbb" }}>
          {" "}
          Limited working proficiency
        </div>
        <Divider></Divider>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            justifyContent: "space-between",
          }}
        >
          <div>French</div>
          <div>
            <span class="Skills-dot"></span>
            <span class="Skills-dot-blank"></span>
            <span class="Skills-dot-blank"></span>
            <span class="Skills-dot-blank"></span>
            <span class="Skills-dot-blank"></span>
          </div>
        </Box>
        <div style={{ margin: "5px", color: "#bbb" }}> Beginner</div>{" "}
        <Divider></Divider>
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
      <Box className="Skills">
        <div className="Skills-post">
          <b>Technical and digital skills</b>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <CodeIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas", fontWeight: 700 }}>
            Computer Languages <br />
            <li>C, C++</li>
            <li>Java, JavaScript, HTML, CSS</li>
            <li>Python</li>
            <li>Matlab</li>
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
          <ComputerIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas", fontWeight: 700 }}>
            Digital skills <br></br>Microsoft Word / Microsoft Excel / Microsoft
            Powerpoint / Social Media / Adobe Lightroom, Premiere Pro{" "}
          </Typography>
        </Box>
        <Divider></Divider>

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

      <Box className="Skills">
        <div className="Skills-post">
          <b>Artistic skills</b>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <MicIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Singing <br /> I took singing lessons at the Popular Art School in
            Deva.{" "}
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
          <PianoIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Playing instruments <br />I learned on my own how to play piano and
            guitar and have been playing piano for 10 years and guitar for 5
            years.{" "}
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
          <ColorLensIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>Painting </Typography>
        </Box>
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

      <Box className="Skills">
        <div className="Skills-post">
          <b>Hobbies and interests</b>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <SportsHandballIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Sports <br /> am interested in sports and practicing them as often
            as I can. Sports that I particularly enjoy are: swimming, fitness
            and jogging.{" "}
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
          <LocalAirportIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Travelling <br />{" "}
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
          <PhotoCameraIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Photography <br />{" "}
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
          <MenuBookIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Reading <br />I am interested in reading non-fiction books about the
            following subjects/fields: philosophy, environmental issues,
            self-help and instruction, world health, astronomy.{" "}
          </Typography>
        </Box>
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

      <Box className="Skills">
        <div className="Skills-post">
          <b>Soft skills</b>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
          }}
        >
          <Diversity3Icon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Social <br />
            <li>
              communicative and friendly person, who likes to meet new people
              and make new friends
            </li>
            <li>
              teamwork, being a person that easily adapts to new environments
              and conditions
            </li>{" "}
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
          <BadgeIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Organisational <br />
            <li>Goal setting and meeting goals</li>
            <li>Creating and keeping deadlines</li>
            <li>Decision making</li>{" "}
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
          <GroupsIcon style={{ marginRight: "5px" }} />
          <Typography style={{ fontFamily: "Consolas" }}>
            Management and leadership <br />
            <li>Strategic thinking</li>
            <li>Problem solving</li>
            <li>Ability to work well under pressure</li>{" "}
          </Typography>
        </Box>
        <Divider></Divider>

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

export default Skills;
