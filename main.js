//Create a reference for canvas 
canvas = document.getElementById("C");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
var carW = 75;
var carH = 100;
var carX = 5;
var carY = 225;

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
	
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadBackground;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0 , canvas.width , canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(
greencar_imgTag,
carX,
carY,
carW,
carH
);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == 38)
	{
		up();
		console.log("up");
	}

	else if (keyPressed == 40)
	{
		down();
		console.log("down");
	}
	
	else if (keyPressed == 37)
	{
		left();
		console.log("left");
	}

	else if (keyPressed == 39)
	{
		right();
		console.log("right");
	}
}

function up()
{
	//Define function to move the car upward
	carY = Math.max(0, carY - 10);
	uploadBackground();
	uploadgreencar();
}

function down()
{
	//Define function to move the car downward
	carY = Math.min(canvas.height - carH, carY + 10);
	uploadBackground();
	uploadgreencar();
}

function left()
{
	//Define function to move the car left side
	carX = Math.max(0, carX - 10);
	uploadBackground();
	uploadgreencar();
}

function right()
{
	//Define function to move the car right side
	carX = Math.min(canvas.width - carW, carX + 10);
	uploadBackground();
	uploadgreencar();
}
