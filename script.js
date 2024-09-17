//intializing variables 
let direction={x:0,y:0}
const foodsound=new Audio('./Assets/sounds/food.mp3');
const gameover=new Audio('./Assets/sounds/gameover.mp3');
const moveSound=new Audio('./Assets/sounds/move.mp3');
const music=new Audio('./Assets/music.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArr=[
    {x:2, y:15},
    
]
food={x:4, y:15}


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

    //rendering the food and snake
    //Display snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y
        snakeElement.style.gridColumnStart=e.x
        if(index===0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement)
    })
    //Display food
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y
    foodElement.style.gridColumnStart=food.x
    foodElement.classList.add('food');
    board.appendChild(foodElement)
}





//Main Logic
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1}// start the game 
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("up")
            inputDir.x=0;
            inputDir.y=-1;

            break;
        case "ArrowDown":
            console.log("down")
            inputDir.x=0;
            inputDir.y=1;

            break;
        case "ArrowLeft":
            console.log("left")
            inputDir.x=-1;
            inputDir.y=0;

            break;
        case "ArrowRight":
            console.log("right")
            inputDir.x=1;
            inputDir.y=0;

            break;
    
        default:
            break;
    }
})