canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_x = 10;
rover_y = 10;
rover_img = "rover.png";
rover_height = 90;
rover_width = 100;
mars_images_array = ["i1.jpg", "i2.jpg", "i3.jpg", "i4.jpg"];
random_number = Math.floor(Math.random()*4);
background_img = mars_images_array[random_number];

function add() {
    background_imgTag = new Image();
    background_imgTag.src = background_img;
    background_imgTag.onload = uploadBackground;

    rover_imgTag = new Image();
    rover_imgTag.src = rover_img;
    rover_imgTag.onload = uploadRover;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keyDown);
function my_keyDown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if (key_pressed == "38") {
        up();
        console.log("up");
    }
    if (key_pressed == "40") {
        down();
        console.log("down");
    }
    if (key_pressed == "37") {
        left();
        console.log("left");
    }
    if (key_pressed == "39") {
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y >= 0){
        rover_y-=10;
        console.log("when up arrow is pressed x = "+rover_x+" y = "+rover_y)
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y+=10;
        console.log("when down arrow is pressed x = "+rover_x+" y = "+rover_y)
        uploadBackground();
        uploadRover();
    }
}   

function left(){
    if(rover_x >= 0){
        rover_x-=10;
        console.log("when left arrow is pressed x = "+rover_x+" y = "+rover_y)
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x <= 700){
        rover_x+=10;
        console.log("when right arrow is pressed x = "+rover_x+" y = "+rover_y)
        uploadBackground();
        uploadRover();
    }
}