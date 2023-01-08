var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//detecting button
for(i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var innerHtml=this.innerHTML;
        makeSound(innerHtml);
        buttonAnimation(innerHtml);
    })
}

document.addEventListener("keydown",function(event){
 makeSound(event.key);
 buttonAnimation(event.key);
})

//make sound
function makeSound(letter){
   
        switch(letter){
            case 'w':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 'a':
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case 's':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case 'd':
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case 'j':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case'k':
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

        }
    }


    //animated buttons
    function buttonAnimation(currentKey){

        var activebutton=document.querySelector("."+currentKey);
        activebutton.classList.add("pressed");

         setTimeout(function(){
            activebutton.classList.remove("pressed");
         },100);

    }

    



