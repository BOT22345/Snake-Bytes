//intializing variables 
let inputDir={x:0,y:0}
const foodsound=new Audio('./Assets/sounds/food.mp3');
const gameover=new Audio('./Assets/sounds/gameover.mp3');
const moveSound=new Audio('./Assets/sounds/move.mp3');
const music=new Audio('./Assets/sounds/music.mp3');
let speed=4;
let score=0;
let lastPaintTime=0;
let snakeArr=[
    {x:2, y:15},
    
]
let food={x:4, y:15}


//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}

function isCollide(snake){
    // logic for if snakes bumps into itself
    console.log(0);
    for(let i=1;i<snakeArr.length;i++){
        if(snake[i].x === snake[0].x && snake[i].y=== snake[0].y){
            return true;
        }
    }
    // if snake collide with walls
    if(snake[0].x >=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
        return true;
    }
    // return false;
}

function gameEngine(){
    // updating snake array

    if(isCollide(snakeArr)){
        gameover.play();
        music.pause();
        inputDir={x:0,y:0}
        alert("game over press any key to play again ")
        snakeArr=[{x:2, y:15}]
        // music.play();
        score=0;
    }

    //snake body increase and score updation
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        foodsound.play();
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x,y:snakeArr[0].y+inputDir.y})
        let a=2;
        let b=16;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }

    //Moving the snake 
    for(let i=snakeArr.length-2;i>=0;i--){
        snakeArr[i+1]={...snakeArr[i]};
    }

    snakeArr[0].x = snakeArr[0].x + (inputDir.x);
    snakeArr[0].y += inputDir.y;

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
    music.play();
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