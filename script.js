//intializing variables 
let inputDir={x:0,y:0}
const foodsound=new Audio('./Assets/sounds/food.mp3');
const gameover=new Audio('./Assets/sounds/gameover.mp3');
const moveSound=new Audio('./Assets/sounds/move.mp3');
const music=new Audio('./Assets/music.mp3');
let speed=2;
let score=0;
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

function isCollide(sarr){
    return false;
}

function gameEngine(){
    // updating snake array

    if(isCollide(snakeArr)){
        gameover.play();
        musicSound.play();
        inputDir={x:0,y:0}
        alert("game over press any key to play again ")
        snakeArr=[{x:2, y:15}]
        musicSound.play();
        score=0;
    }

    //snake body increase and score updation
    if(snakeArr[0].y===food.y && snake[0].x===food.x){
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x,y:snakeArr[0].y+inputDir.y})
        let a=2;
        let b=16;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }

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