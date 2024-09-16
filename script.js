//intializing variables 
let direction={x:0,y:0}
const foodsound=new Audio('./Assets/sounds/food.mp3');
const gameover=new Audio('./Assets/sounds/gameover.mp3');
const moveSound=new Audio('./Assets/move.mp3');
const music=new Audio('./Assets/music.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArr=[
    {x:13, y:15}  
]

//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}

function gameEngine(){
    // updating snake array

    //rendering the food
}





//Main Logic
window.requestAnimationFrame(main);