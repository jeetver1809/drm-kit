

//for button press
for(var i = 0; i < 7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
// annonymous function
      var buttonInnerHTML = this.innerHTML;
      makesound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);

     
    });
}
// for key press
document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
} )

function makesound(key){

    switch(key){
           

        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
                
        case "s":
        var audio1 = new Audio("sounds/tom-3.mp3");
        audio1.play();
        break;

        case "d":
        var audio3 = new Audio("sounds/tom-4.mp3");
        audio3.play();
        break;

        case "j":
        var audio4 = new Audio("sounds/crash.mp3");
        audio4.play();
        break;

        case "k":
        var audio5 = new Audio("sounds/kick-bass.mp3");
        audio5.play();
        break; 

        case "l":
        var audio6 = new Audio("sounds/snare.mp3");
        audio6.play();
        break;

        default : {
            console.log("nothing");
        }
  }

}

function buttonAnimation(currentKey){

    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100)

    
}



