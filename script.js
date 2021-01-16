console.log(10)

var count = 0;

function GameStart(){

    document.getElementById("MainGame").style.display = "block";
    document.getElementById("SubPart").innerHTML = "Enter Your Number :-"
        
}

function computer(){

    if(count < 10){
    count = count + 1;
    a = document.getElementById("fname").value;
    b = (parseInt(a) + ((Math.floor(Math.random()*100))+1));
    c = "The Computer's Value is :- " + b;
    document.getElementById("CompPart").innerHTML = c ;
    document.getElementById("count").innerHTML = count + " / 10" ;
    }
    else{
      var j = prompt("Do you want to continue?", "Yes");
      if(j=="yes" || j=="y" || j=="YES" || j == "Yes"){
          count = 0;
          a = 0;
          document.getElementById("CompPart").innerHTML = "";
          computer();
        }
        else{
           document.getElementById("MainGame").style.display = "none";
           document.getElementById("GameEnd").style.display = "block";
           document.getElementById("button").style.display = "none";
        }
    }
}