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
    //planszaCtx.strokestyle = "black";
    //planszaCtx.strokeRect(snakeElement.x, snakeElement.y, 10, 10);
}

var dx=10;
var dy=0;

function move()
{
    var head = {x: snake[0].x + dx, y: snake[0].y + dy};
    

    if(fx == snake[0].x && fy == snake[0].y)
    {
        console.log("success");
        fx = random_number(20, 480);
        fy = random_number(20, 480);
        snake.unshift(head);
        licznik++;
        document.getElementById("wynik").innerHTML=licznik;
    }
    else 
    {
        snake.unshift(head);
        snake.pop();
    }

    if(snake[0].x == 500 || snake[0].x == 0 || snake[0].y == 500 || snake[0].y == 0)
    {
        game_over();
    }

    //kolizja();
    console.log(snake.length);
}


function kolizja()
{
    console.log(snake.length);
    for(let a=1; a<snake.length; a++)
    {
        if(head.x == snake[a].x && head.y == snake[a].y)
        {
            game_over();
        }
    }
}


function game_over()
{
    console.log("game over");

        var canvas = document.getElementById("plansza");
        plansza.style.display = "none";

        var end = document.getElementById("game_over");
        end.style.display = "flex";

        document.getElementById("score").innerHTML=licznik;

        var wynik = document.getElementById("wynik_div");
        wynik.style.display = "none";

        var phone = document.getElementById("phone");
        phone.style.display = "none";

        var container = document.getElementById("container");
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.height = "100vh";
}

document.getElementById("replay").addEventListener("click", replay);

console.log("reload");

function replay()
{
    location.reload();
}


document.getElementById("go_up").addEventListener("click", up);
document.getElementById("go_left").addEventListener("click", left);
document.getElementById("go_right").addEventListener("click", right);
document.getElementById("go_down").addEventListener("click", down);

function up()
{
    let przycisk = 38;
    direction(przycisk);
}

function down()
{
    let przycisk = 40;
    direction(przycisk);
}

function left()
{
    let przycisk = 37;
    direction(przycisk);
}

function right()
{
    let przycisk = 39;
    direction(przycisk);
}


function direction(event)
{
    let klawisz = event.keyCode;
    let przycisk = event;
    if(klawisz==37 || przycisk==37)
    {
        if(dx != 10)
        {
            dx = -10;
            dy = 0;
        }
    }
    else if(klawisz==40 || przycisk==40)
    {
        if(dy != -10)
        {
            dy = 10;
            dx = 0;
        }
    }
    else if(klawisz==39 || przycisk==39)
    {
        if(dx != -10)
        {
            dy = 0;
            dx = 10;
        }
    }
    else if(klawisz==38 || przycisk==38)
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

    let licznik = 0;

function main()
{
    setInterval(function step(){
        clear();
        random_food(fx, fy);
        move();
        drawSnake();
    }, 100);
    
}


var height = window.innerHeight;
console.log(height);

if(height < 1060)
{
    var phone = document.getElementById("phone");
    phone.style.display = "none";
}

main();