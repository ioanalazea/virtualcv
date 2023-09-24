import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Project2() {
  const canvasRef = useRef(null);
  let y = 0;
  let velocity = 5;
  const draw = (context) => {
    context.fillStyle='white';
    context.fillRect(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
    context.fillStyle = 'black';
    y += velocity;
    
    if (y >= 150 || y <= 0 ){
      velocity *= -1;
      context.fillStyle = 'red';
    }
    else if ((y===0) || (y===150)){
        context.fillStyle = 'blue';
    }
    
    context.beginPath();
    context.arc(150, y, 10, 0, Math.PI * 2);
    context.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

   

    const render = () => {
      frameCount++;
      draw(context);
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
      style={{ width: "300px", height: "300px", background: "white", marginTop:"50px" }}
    />
    <Box style={{background:"white", border:"1px solid black", borderRadius:"8px", padding:"20px", marginTop:"20px"}}>
      <Typography><i><b>Up and down...</b></i></Typography>
      <Typography>A figure that goes up and down...infinitely.
         </Typography>
    </Box>
    </>
  );
}

export default Project2;