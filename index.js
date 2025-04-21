
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        instrumentSound(this.innerHTML); //detecting mouse click
        buttonAnimation(this.innerHTML);
    });
    //this is the identity of the button
}

document.addEventListener("keypress", function(event) {
    //detecting keyboard click
    instrumentSound(event.key)
    buttonAnimation(event.key)
})

function instrumentSound(key) {
    switch (key) 
    {
        case 'w':
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case 'a':
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case 's':
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case 'd':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'j':
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case 'k':
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'l':
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log("this.innerHTML");
    }
}

function buttonAnimation(currentkey) {
    document.querySelector("." + currentkey).classList.add("pressed");

    setTimeout(function () { document.querySelector("." + currentkey).classList.remove("pressed") }, 100);

}