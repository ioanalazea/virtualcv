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
    const date = new Date();
    let age = 0;

    if (date.getMonth() > 7) age = date.getFullYear() - 2000;
    else if (date.getMonth <= 6) age = date.getFullYear() - 2000 - 1;
    else if (date.getMonth() === 7) {
      if (date.getDay() < 20) age = date.getFullYear() - 2000 - 1;
      else age = date.getFullYear() - 2000;
    }

    let date_1 = new Date("07/20/2000");
    let date_2 = new Date();

    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

    return { age: age, days: TotalDays };
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
