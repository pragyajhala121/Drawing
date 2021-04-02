noseX = 0;
noseY = 0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;

    function setup(){
        video = createCapture(VIDEO);
        video.size(550,500);
        canvas = createCanvas(550,550);
        canvas.position(560,150);
    
        poseNet = ml5.poseNet(video,modelLoded);
        poseNet.on('pose',gotPoses);
    }
    function draw(){
        document.getElementById("font_size").innerHTML = "Width and height font will be " + diffrence + " px ";
        background('#ffabe9');
        textSize(diffrence);
        text("Pragya",noseX,noseY);
        fill(255, 0, 119);
    }

    function modelLoded(){
        console.log("Posenet is Initialized!");
    }

    function gotPoses(results){
        if(results.length > 0){
           console.log(results);
           noseX = results[0].pose.nose.x;
           noseY = results[0].pose.nose.y;
           console.log("noseX = " + noseX + "  noseY = " + noseY);
           rightWristX = results[0].pose.rightWrist.x;
           leftWristX = results[0].pose.leftWrist.x;
           diffrence = floor(leftWristX - rightWristX);
           console.log("rightWrist = " + rightWristX + " leftWrist = " + leftWristX + " diffrence = " + diffrence);
        }
        
    }