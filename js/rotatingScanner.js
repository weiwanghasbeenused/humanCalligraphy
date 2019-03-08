var vProportion = 3/4;
var vW,vH;
var canvas;
var a;
var webCam;
var mask;

function preload(){
	mask = loadImage("images/mask.png");
}
function setup(){

	canvas = createCanvas(windowWidth,windowHeight);
	background(0);
	angleMode(DEGREES);
	a = atan(vProportion);
	vH = sin(a)*height/2;
	vW = vH/vProportion;
	// console.log(vW,vH);
	
	webCam = createCapture(VIDEO);
	webCam.size(vW,vH);
	webCam.hide();
	console.log("vW = "+vW);
	console.log("vH = "+vH);
	// imageMode();
	
	frameRate(15);
}

function draw(){
	// background(0);
	translate(windowWidth/2, windowHeight/2);
	rotate(frameCount*2);
	webCam.mask(mask);
	image(webCam, 0,0, webCam.width,webCam.height);
}