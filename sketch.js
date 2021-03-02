var canvas;
var music;
var purpleBox, redBox, pinkBox, blueBox, movingBox;
var edges, backgroundImage;

function preload(){
    music = loadSound("music.mp3");
    backgroundImage = loadImage("piano.jpg");
}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces

    purpleBox = createSprite(120,580,150,25);
    purpleBox.shapeColor = "purple";

    redBox = createSprite(300,580,150,25);
    redBox.shapeColor = "red";

    pinkBox = createSprite(480,580,150,25);
    pinkBox.shapeColor = "pink";

    blueBox = createSprite(660,580,150,25);
    blueBox.shapeColor = "blue";


    //create box sprite and give velocity

    movingBox = createSprite(random(25,750),200,30,30);
    movingBox.shapeColor = "white";
    movingBox.setVelocity(5,5);

    

}

function draw() {
    background(backgroundImage);

    //create edgeSprite

    edges = createEdgeSprites();

    movingBox.bounceOff(edges);
  /*  movingBox.bounceOff(purpleBox);
    movingBox.bounceOff(redBox);
    movingBox.bounceOff(pinkBox);
    movingBox.bounceOff(blueBox);*/


    //add condition to check if box touching surface and make it box

    if(purpleBox.isTouching(movingBox) && movingBox.bounceOff(purpleBox)){
        movingBox.shapeColor = "purple";
        music.play();
    }

     else if(redBox.isTouching(movingBox) && movingBox.bounceOff(redBox)){
        movingBox.shapeColor = "red";
        music.play();
    }
   

    else if(pinkBox.isTouching(movingBox) && movingBox.bounceOff(pinkBox)){
        movingBox.shapeColor = "pink";
        music.play();
    }
  

    else if(blueBox.isTouching(movingBox) && movingBox.bounceOff(blueBox)){
        movingBox.shapeColor = "blue";
       music.play();
    }
   
   



    drawSprites();
}
