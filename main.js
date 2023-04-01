function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log("poseNet is Initialized");
}
nosex=0;
nosey=0;
difference=0;
leftwristx=0;
rightwristx=0;
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;

        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
}
function draw(){
    background("orangered");
    fill("lightgreen");
    textSize(difference);
    text("Krishka",nosex,nosey);
}