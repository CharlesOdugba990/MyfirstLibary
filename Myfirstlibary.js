function collided(C,B) {
    if (B.x - C.x < B.width/2 + C.width/2 
      && C.x- B.x < B.width/2 + C.width/2 
      && B.y - C.y < B.height/2 + C.height/2
      && C.y - B.y < B.height/2 + C.height/2){
       return true; 
      }
      else{
      return false;
      }
  } 
  
  function BounceOff() {
    if (fixedObject2.x - movedObject2.x < fixedObject2.width/2 + movedObject2.width/2 
      && movedObject2.x - fixedObject2.x < fixedObject2.width/2 + movedObject2.width/2 
      && fixedObject2.y - movedObject2.y < fixedObject2.height/2 + movedObject2.height/2
      && movedObject2.y - fixedObject2.y < fixedObject2.height/2 + movedObject2.height/2){
        fixedObject2.velocityX = fixedObject2.velocityX *-1;
        movedObject2.velocityX = movedObject2.velocityX *-1;
      }
  
  }