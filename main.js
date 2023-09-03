


function preload(){

}

function setup(){
canvas = createCanvas(450,450);
canvas.position(633,270);
video = createCapture(VIDEO);
video.size(450,450);
video.hide();
}

function draw(){
image(video,0,0,450,450);
translate(width,0);
scale(-1,1);
image(video,0,0,450,450);
strokeWeight(3);

stroke("green");
fill("orange");
rect(60,15,350,30);

stroke("red");
fill("yellow");
rect(405,55,30,350);

stroke("purple");
fill(3, 207, 252);
rect(60,405,350,30);

stroke("blue");
fill(81, 181, 108);
rect(15,55,30,350);

stroke("green");
fill("orange");
circle(30,30,65);

stroke("red");
fill("yellow");
circle(420,30,65);


stroke("purple");
fill(3, 207, 252);
circle(420,420,65);


stroke("blue");
fill(81, 181, 108);
circle(30,420,65);
}

function take_snapshot(){
    save("FunFotoFrame");
}