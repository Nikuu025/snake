var plansza = document.getElementById("plansza");
var planszaCtx = plansza.getContext("2d");


var snake = [
    {x: 100, y: 100},
    {x: 110, y: 100},
    {x: 120, y: 100},
]



function drawsnake()
{
    planszaCtx.fillStyle='green';
    planszaCtx.fillRect(snakePart.x, snakePart.y, 10, 10);
}


function drawSnake()
{
    snake.forEach(drawsnake);
}