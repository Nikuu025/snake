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

function move(fx, fy)
{
    var head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();

    if(fx == snake[0].x && fy == snake[0].y)
    {
        console.log("success");
    }
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


    function random_number(min, max)
    {
        return Math.round((Math.random() * (max-min) + min) / 10) * 10;
    }


    function random_food(x, y)
    {
        planszaCtx.fillStyle = "red";
        planszaCtx.fillRect(x, y, 10, 10);
        planszaCtx.strokestyle = "black";
        planszaCtx.strokeRect(x, y, 10, 10);
    }

    let fx = random_number(20, 480);
    let fy = random_number(20, 480);

function main()
{
    setInterval(function step(){
        clear();
        random_food(fx, fy);
        move(fx, fy);
        drawSnake();
    }, 100);
    
}


main();