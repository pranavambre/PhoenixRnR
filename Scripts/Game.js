//let container = document.querySelector(".container");
let jar = document.querySelector(".jar img");

Draggable.create(".cookie", {
    bounds: window,
    cursor: "pointer",
    throwProps: true,
    autoScroll: 1,
    onDrag: dragCookie,
    onRelease: releaseCookie,
    zIndexBoost: true
});


//function dragIn() {
//    $('.correct').stop().fadeIn(1500).fadeOut(1500);
//    console.log('Fire the bar');
//}

function dragCookie() {
    let dragDirection = this.getDirection("velocity");
    let skew;
    dragDirection === "right"
        ? (skew = 9)
        : dragDirection === "left"
            ? (skew = -9)
            : 0;
    if (this.hitTest(jar, "40%")) {
       
        shakeJarAnimation().play();
        TweenMax.to(this.target, 0.3, { scale: 0.7, filter: "brightness(80%)" });
        $('#myModal1').stop().fadeIn(1200).fadeOut(1200);
        //console.log('blink once');
    } else {
        shakeJarAnimation().kill(0);
        TweenMax.to(this.target, 0.3, {
            skewX: skew,
            scale: 1,
            filter: "brightness(100%)"
        });
    }
    //$('.correct').fadeIn(1000).stop().fadeOut(1000);
    //console.log('blink once');
}


function drag() {
    $('#myModal2').stop().fadeIn(1200).fadeOut(1200);
}

function releaseCookie() {
    shakeJarAnimation().kill(0);
    let jarBottom =
        $(window).height() - $(".jar").offset().top - $(".jar").height();
    let cookieBottom =
        $(window).height() - $(this.target).offset().top - $(this.target).height();
    let distance =
        cookieBottom - jarBottom + this.y + $(this.target).height() * 0.1;

    if (this.hitTest(jar, "80%")) {
        TweenMax.to(this.target, 1, {
            skewX: 0,
            x: this.x,
            y: distance,
            ease: Bounce.easeOut
        });
    } else {
        TweenMax.to(this.target, 1, {
            skewX: 0,
            x: 0,
            y: 0,
            scale: 1,
            filter: "brightness(100%)",
            ease: Elastic.easeOut
        });
    }


}

function shakeJarAnimation() {
    return TweenMax.fromTo(
        jar,
        0.3,
        { x: -1, y: -1 },
        {
            x: 1,
            y: 1,
            repeat: -1,
            ease: RoughEase.ease.config({
                strength: 7,
                points: 7,
                template: Linear.easeNone,
                randomize: false
            }),
            clearProps: "x"
        },
        0
    );
}
