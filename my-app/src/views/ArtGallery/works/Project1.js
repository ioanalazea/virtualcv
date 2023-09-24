import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Project1() {
  const canvasRef = useRef(null);

  const draw = (ctx, frameCount) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.rect(
      Math.random() * (ctx.canvas.clientWidth+100),
      Math.random() * ctx.canvas.clientHeight,
      Math.random() * 50,
      Math.random() * 50,
    );
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (<>
    <canvas
      ref={canvasRef}
      style={{ width: "50%", height: "70%", background: "white" }}
    />
    <Box style={{background:"white", border:"1px solid black", borderRadius:"8px", padding:"20px", marginTop:"20px"}}>
      <Typography><i><b>In the end it will work out...</b></i></Typography>
      <Typography><i><b>In the end it will work out...</b></i></Typography>
      <Typography>The idea behind this was that somehow, things in life will work out,<br/> even if the ways they do are mysterious.<br/>
      Likewise, this blank white canvas is filled by black squares that have a random size. <br/>The canvas is also randomly filled.
      However, after some time, the canvas eventually <br/> became almost entirely black.

         </Typography>
    </Box>
    </>
  );
}

export default Project1;
