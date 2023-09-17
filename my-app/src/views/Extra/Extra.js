//Import style:
import { Divider, IconButton, Typography } from "@mui/material";
import "./Extra.css";

//Import components:
import Box from "@mui/material/Box";

//Import icons:
import gladImage from "../../assets/glad.jpg";
import cinemImage from "../../assets/cinem.jpg";
import letterImage from "../../assets/letter.jpg";

function Extra() {
  return (
    <Box justifyContent={"center"} display={"flex"} flexDirection={"column"}>
      <Box className="Extra">
        <Typography
          style={{
            fontFamily: "Oliver",
            fontSize: "25px",
            marginBottom: "10px",
            alignSelf: "center",
          }}
        >
          <u>FUN FACTS</u>
        </Typography>
        <Typography style={{ fontFamily: "Oliver", fontSize: "20px" }}>
          {" "}
          1. My personality type is INTJ aka “introverted, intuitive, thinking,
          judging”. <br />
          <br />
          2. I am a Cancer sun ☀️, Pisces moon 🌑 and Libra rising 🔼.
          <br />
          <br />
          3. I feel the happiest when I go to a concert. <br />
          <br />
          4. I love movies with colourful cinematography or plot-twists. <br />
          <br />
          5. I am a little obsessed with fries. 🍟 Could eat every single day.{" "}
          <br />
          <br />
          6. When I was little I wanted to be an astronaut. 🚀 <br />
          <br />
          7. My dream is to help people through what I do.{" "}
        </Typography>
      </Box>

      <Box className="Extra-variation">
        <Typography
          style={{
            fontFamily: "Oliver",
            fontSize: "25px",
            marginBottom: "10px",
            alignSelf: "center",
            margin: "20px",
          }}
        >
          <u>Film Photography account</u>
        </Typography>
        <Typography style={{ fontFamily: "Oliver", fontSize: "20px" }}>
          I sometimes like to take pictures on film. To display them, I have
          made an Instagram account. <br /> Check it out!
        </Typography>
        <img
          className="Extra-image"
          src={gladImage}
          onClick={() =>
            window.open("https://www.instagram.com/gladyourehere.jpg")
          }
        />
      </Box>

      <Box className="Extra-variation">
        <Typography
          style={{
            fontFamily: "Oliver",
            fontSize: "25px",
            marginBottom: "10px",
            alignSelf: "center",
            margin: "20px",
          }}
        >
          <u>Movie Recommandations</u>
        </Typography>
        <Typography style={{ fontFamily: "Oliver", fontSize: "20px" }}>
          Cinema is a passion of mine and I wanted to grow my own community of
          people who are also passionate about movies. <br /> On this account I
          post and review the movies I watch. <br />
        </Typography>
        <img
          className="Extra-image"
          src={cinemImage}
          onClick={() => window.open("https://www.instagram.com/cinematixfeel")}
        />
      </Box>

      <Box className="Extra-variation">
        <Typography
          style={{
            fontFamily: "Oliver",
            fontSize: "25px",
            marginBottom: "10px",
            alignSelf: "center",
            margin: "20px",
          }}
        >
          <u>Letterboxd Account</u>
        </Typography>
        <Typography style={{ fontFamily: "Oliver", fontSize: "20px" }}>
          This is my Letterboxd account where I log and rate the movies I have
          seen. <br />
        </Typography>
        <img
          className="Extra-image"
          src={letterImage}
          onClick={() => window.open("https://letterboxd.com/joanafromspace/")}
        />
      </Box>

      <Box className="Extra">
        <Typography
          style={{
            fontFamily: "Oliver",
            fontSize: "25px",
            marginBottom: "10px",
            alignSelf: "center",
            margin: "20px",
          }}
        >
          <u>Spotify Account</u>
        </Typography>
        <Typography
          style={{
            fontFamily: "Oliver",
            fontSize: "20px",
            alignSelf: "center",
            margin: "20px",
          }}
        >
          I love making playlists according to moods, ideas, pictures etc.
          <br></br>
          Check out my{" "}
          <a  style={{fontWeight:"700", color:"#4e8f84"}} href="https://open.spotify.com/user/jwpmqjoy8c8jaagiq1q3tcz75?si=065596ed1d024c21">
            {" "}
            Spotify account
          </a>
          !
        </Typography>
      </Box>
    </Box>
  );
}

export default Extra;
