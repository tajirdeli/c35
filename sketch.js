var ball;
var position,database
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var BallPosition=database.ref("Ball")
    BallPosition.on("value",ReadPosition)
}

function draw(){
    background("white");
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();}
}

function changePosition(x,y){
    database.ref("Ball").set({
        "x" : position.x + x,
        "y" : position.y + y
    })
    
}
function ReadPosition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}