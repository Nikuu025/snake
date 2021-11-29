var plansza = document.getElementById("plansza");
var planszaCtx = plansza.getContext("2d");


var snake = [
    {x: 100, y: 100},
    {x: 110, y: 100},
    {x: 120, y: 100},
]


function drawSnake()
{
    snake.forEach(drawSnakeElement);
}



function clear()
{
    planszaCtx.fillStyle = "black";
    planszaCtx.fillRect(0, 0, plansza.width, plansza.height);
}



function drawSnakeElement(snakeElement)
{
    planszaCtx.fillStyle = "lightgreen";
    planszaCtx.fillRect(snakeElement.x, snakeElement.y, 10, 10);
    planszaCtx.strokestyle = "black";
    planszaCtx.strokeRect(snakeElement.x, snakeElement.y, 10, 10);
}

var dx=10;
var dy=0;

function move()
{
    var head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}


function direction(event)
{
    let klawisz = event.keyCode;
    if(klawisz==37)
    {
        if(dx != 10)
        {
            dx = -10;
            dy = 0;
        }
    }
    else if(klawisz==40)
    {
        if(dy != -10)
        {
            dy = 10;
            dx = 0;
        }
    }
    else if(klawisz==39)
    {
        if(dx != -10)
        {
            dy = 0;
            dx = 10;
        }
    }
    else if(klawisz==38)
    {
        if(dy != 10)
        {
            dy = -10;
            dx = 0;
        }
    }
}

document.addEventListener("keydown", direction);


function main()
{
    setInterval(function step(){
        clear();
        move();
        drawSnake();
    }, 200);
    
}


main();