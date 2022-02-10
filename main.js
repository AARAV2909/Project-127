
Harry_Potter_Theme_song = "";

function setup(){
    caanvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 530);
}

function preload(){
    Harry_Potter_Theme_song = loadSound("music.mp3");
}