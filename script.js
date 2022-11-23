console.log(10)

var count = 0;

function GameStart(){

    document.getElementById("MainGame").style.display = "block";
    document.getElementById("SubPart").innerHTML = "Enter Your Number"
        
}

function computer(){

    if(count < 5){
    count = count + 1;
    a = document.getElementById("fname").value;
    if(a == ""){
        c = "Empty Space Entered"
    }
    else{
    b = (parseInt(a) + ((Math.floor(Math.random()*100))+1));
    c = "The Computer's Value is :- " + b;
    document.getElementById("CompPart").innerHTML = c ;
    document.getElementById("count").innerHTML = "Chances:- " + count + " / 5" ;
    document.getElementById("fname").value = "";
    }
}
    else{
      var j = prompt("Do you want to continue? Type Yes or NO " , "Yes");
      if(j=="yes" || j=="y" || j=="YES" || j == "Yes"){
          count = 0;
          a = 0;
          document.getElementById("CompPart").innerHTML = "";
          computer();
        }
        else{
           document.getElementById("MainGame").style.display = "none";
           document.getElementById("GameEnd").style.display = "block";
           document.getElementById("GameEnd").style.transitionDuration = "4s";
           document.getElementById("button").style.display = "none";
        }
    }
}
