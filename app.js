let boxes = document.querySelectorAll(".box")
let btnReset =document.getElementById("reset")
console.log(btnReset)
let btnStart = document.getElementById("start")
let message= document.getElementsByClassName("msg")
console.log(message)

let patterns= [[0,1,2], [0,3,6], [0,4,8],[1,4,7] , [2,5,8] , [2,4,6],[3,4,5],[6,7,8]]

let playerTurn = true;

let count=0;


 for(let i=0;i<boxes.length;i++){
  boxes[i].disabled=true;
}
  btnReset.disabled=true;

for(let i=0;i<boxes.length;i++){
 
     boxes[i].addEventListener("click", function(){
      if(playerTurn){
       boxes[i].innerHTML="x"
       playerTurn=false
     
       
      }
      else{
        boxes[i].innerHTML="o"
        playerTurn=true
       
      }
      boxes[i].disabled=true;
      count++;
      checkWinner();
      if(count=== 9 && !checkWinner()){
        gameDraw();
      }
  }
)
}
function gameDraw(){
  console.log("Game Draw")
}

function checkWinner(){
  for(let i=0;i<patterns.length;i++){
    let a= boxes[patterns[i][0]].innerHTML;
    console.log(a)
    let b= boxes[patterns[i][1]].innerHTML;
    let c= boxes[patterns[i][2]].innerHTML;

    if(a != "" && b !="" && c!= ""){
      if(a === b && b === c){
         for(let i=0;i<boxes.length;i++){
          boxes[i].disabled=true;
         }
            message[0].innerHTML = `<p class="wish">
            Congratulation: <span>${a}</span></p>`
      }
    }
  }
}
const resetGame = function(){
   playerTurn=true;
  count=0;
  message[0].innerHTML=""
  for(let i=0;i<boxes.length;i++){
    boxes[i].disabled=false;
    boxes[i].innerHTML="";
    
    }

}

btnReset.addEventListener('click', resetGame)

btnStart.addEventListener('click',function(){
  
  resetGame();
  btnStart.disabled=true;
  btnReset.disabled=false;
  
 

  for(let i=0;i<boxes.length;i++){
  boxes[i].disabled=false;
}
})
