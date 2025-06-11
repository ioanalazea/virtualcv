//Import style:
import { Divider, Tooltip, Typography } from "@mui/material";
import "./AboutMe.css";

//Import components:
import Box from "@mui/material/Box";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

//Import icons:
import video from "../../assets/avatarvideoAi.mp4";

function AboutMe() {
  
const getAge = () => {
  const now = new Date();
  const birthDate = new Date("2000-07-20");

  // Calculate age
  let age = now.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  // Calculate days since birth
  const difference = now.getTime() - birthDate.getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));

  return { age, days: totalDays };
};

  return (
    <Box justifyContent={"center"} display={"flex"} flexDirection={"column"}>
      <Box className="Post">
        <div className="Header-post">
          <b>Get to know me...</b>
          <div>
            <Tooltip
              title={
                "This is an AI generated video using my profile picture, my voice recording and D-ID."
              }
            >
              <InfoOutlinedIcon />
            </Tooltip>
          </div>
        </div>
        <Box
          style={{
            border: "5px solid #c0c0c0",
            margin: "10px",
            borderRadius: "5px",
          }}
        >
          <video
            src={video}
            width="100%"
            height="300"
            controls="controls"
            autoplay="true"
          />
        </Box>
        <Divider></Divider>
        <Typography
          fontFamily={"Consolas"}
          style={{
            border: "5px solid #c0c0c0",
            margin: "10px",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Hello, sooo...this is me!❤️ My name is Ioana Bianca Lazea. I am
          currently {getAge().age} years old, or {getAge().days} days.✨ This is
          my virtual CV that I have randomly decided to make one day. Click the
          "<u>M</u>enu" on the left to get to know me more!
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutMe;
