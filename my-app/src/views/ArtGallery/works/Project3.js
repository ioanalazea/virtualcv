import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

class Circle {
    constructor(x, y, radius){
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.velocityX = Math.random() * 4 - 2;
      this.velocityY = Math.random() * 4 - 2;
  
    }
  
    draw(context){
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.stroke();
      context.fillStyle = '#4e8f84';
      context.fill();
    }
  
    move(){
      this.x += this.velocityX;
      this.y += this.velocityY;
    }
  
    bounce(width, height){
      if (this.x >= width || this.x<=0)
        this.velocityX *=-1;
        if (this.y >= height || this.y<=0)
        this.velocityY *=-1;
    }
  
  }

  const getDistance = (x1, x2, y1, y2) => {
    const a = x1 - x2;
    const b = y1- y2;
    return Math.sqrt(a*a + b*b);
  }
function Project3() {
  const canvasRef = useRef(null);
  let circles = [];
  for( let i = 0; i < 10; i++){
    circles.push(new Circle(Math.random()*200,Math.random()*200,Math.random()*20 ));
  }
  const draw = (context) => {
 
      context.fillStyle = 'white';
      context.fillRect(0, 0, 400, 400);
      
      context.fillStyle = 'black';
      context.lineWidth = 1;
  
      for (let i = 0; i < circles.length; i++) {
        const circle1 = circles[i];
        for (let j = i+1; j < circles.length; j++) {
          const circle2 = circles[j];
          const distance = getDistance(circle1.x, circle2.x, circle1.y, circle2.y);
          if (distance <250){
            context.lineWidth = 10 - distance/25;
  
            context.beginPath();
            context.moveTo(circle1.x, circle1.y);
            context.lineTo(circle2.x, circle2.y);
            context.stroke();
          }
    
          
        }
        
      }
      context.lineWidth = 12;
  
      circles.forEach(circle=> {
        circle.draw(context);
        circle.move();
        circle.bounce(350,350);
      });
    
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
      style={{ width: "400px", height: "400px", background: "white", marginTop:"50px" }}
    />
    <Box style={{background:"white", border:"1px solid black", borderRadius:"8px", padding:"20px", marginTop:"20px"}}>
      <Typography><i><b>Tied together</b></i></Typography>
      <Typography>A number or circles that are tied up together.
         </Typography>
    </Box>
    </>
  );
}

export default Project3;