var num = document.querySelectorAll(".drum").length;

for(var i=0;i<num;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var but = this.innerHTML;
    playsound(but);
    animation(but);
    });
}

document.addEventListener("keydown" ,function(event){
    playsound(event.key);
    animation(event.key);
});

function playsound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
    
        default: console.log(but);
            break;
    }

}

function animation(key){

    var ckey= document.querySelector("."+key);
    ckey.classList.add("pressed");
    setTimeout(function(){
        ckey.classList.remove("pressed");
    },100);
}