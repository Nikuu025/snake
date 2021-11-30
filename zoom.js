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



if( isMobile.any() )
{
    console.log("mobile-true");

    var width = window.innerWidth;
    var height = window.innerHeight;

    var proportions = height / width;


    if(proportions > 2.23622046 )
    {
        var zoom = width / 508;
    }
    else 
    {
        var zoom = height / 1136;
    }

    console.log(zoom);
    $('head').append( '<meta name="viewport" content=zoom>' );
}
else 
{
    console.log("mobile-false");
}

console.log(window.innerWidth);
console.log(window.innerHeight);