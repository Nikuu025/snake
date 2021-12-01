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

function move(background_audio)
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

        var score_audio = new Audio('score.mp3');
        score_audio.play();
    }
    else 
    {
        snake.unshift(head);
        snake.pop();
    }

    if(snake[0].x == 500 || snake[0].x == 0 || snake[0].y == 500 || snake[0].y == 0)
    {
        game_over(background_audio);
    }

    hx = snake[0].x;
    hy = snake[0].y
    moveCount++;
    //console.log(moveCount);
    //collision(hx, hy);
    //console.log(snake.length);
}

    var hx; /* hx i hy to pozycje głowy węża */
    var hy;
    var moveCount = 0;  /* Liczy przesunięcia aby funkcja kolizji nie uruchamiała się na początku gdy snake generuje sie na 1 polu */


function collision(hx, hy, background_audio)
{
    //console.log(snake.length);
    for(var a=1; a<=snake.length; a++)
    {
        if(hx == snake[a].x && hy == snake[a].y && moveCount > 10)
        {
            game_over(background_audio);
            console.log("collision");
            //console.log(snake[1].x);
        }
    }
}

/*Licznik jest potrzebny bo game over przy kolizji odpalało się 2 razy */
var licznik_over = 0;    

function game_over(background_audio)
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

        var middle = document.getElementById("middle");
        middle.style.display = "none";

        background_audio.pause();

        
        if(licznik_over < 1)
        {
        var gameover_audio = new Audio('gameover.mp3');
        gameover_audio.play();
        licznik_over++;
        }

        
}

document.getElementById("replay").addEventListener("click", replay);

console.log("reload");

function replay()
{
    location.reload();
}


document.getElementById("go_up").addEventListener("touchstart", up);
document.getElementById("go_left").addEventListener("touchstart", left);
document.getElementById("go_right").addEventListener("touchstart", right);
document.getElementById("go_down").addEventListener("touchstart", down);

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

    document.getElementById("play_button").style.display = "none";
    
    var background_audio = new Audio('background.mp3');
    background_audio.volume = 0.2;
    background_audio.play();

    background_audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    
        setInterval(function step(){
            clear();
            random_food(fx, fy);
            move(background_audio);
            drawSnake();
            collision(hx, hy, background_audio);
        }, speed);
    

    
    
}

    var speed = 100;




    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };



if(! isMobile.any() )
{
    var phone = document.getElementById("phone");
    phone.style.display = "none";
    speed=100;
}
else 
{
    speed = 200;
}

document.getElementById("version").innerHTML="v1.1.5";

//main();