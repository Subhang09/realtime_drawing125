noseX=0;
noseY=0;
diff=0;
rightWristX = 0;
leftWristX = 0; 

function setup(){
    video = createCapture(VIDEO);
    video.size(450, 400);

    canvas = createCanvas(450, 400);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#b2d6bb');

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be =" + diff + "px";
    fill('#6c42f5');
    stroke('#6c42f5');
    square(noseX, noseY, diff);
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diff = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX =" + rightWristX + "difference = " + diff);

    }
}


