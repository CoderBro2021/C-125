 noseX = 0;
 noseY = 0;
 difference = 0;
 leftWristX = 0;
 RightWrist = 0;
 function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,400);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose',gotPoses);
    
 }

 function modalLoaded(){
   console.log("posenet is initialized");
}

 function gotPoses(results){
     if(results.length>0)
     {
      console.log(results)
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("X coordinate of nose-> "+noseX+"Y coordinate of nose-> "+noseY);

      leftWristX = results[0].pose.leftWrist.x;
      RightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX-RightWristX);
      console.log("X coordinate of left wrist-> "+leftWristX+"X coordinate of left wrist-> "+RightWristX+"And their difference is -> "+difference);

     }
 }
 function draw(){
  document.getElementById("span").innerHTML = "Side of square = "+difference+" px";
   background('#969A97')
   fill('#F90093')
   stroke('#F90093')
   square(noseX,noseY,difference);
 }

