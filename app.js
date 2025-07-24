let boxes = document.querySelectorAll(".box")
console.log(boxes)

let patterns= [[0,1,2], [0,3,6], [0,4,8],[1,4,7] , [2,5,8] , [2,4,6],[3,4,5],[6,7,8]]

let playerTurn = true;

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
      checkWinner();
 
  }
)
}

function checkWinner(){
  for(let i=0;i<patterns.length;i++){
    let a= boxes[patterns[i][0]].innerHTML;
    console.log(a)
    let b= boxes[patterns[i][1]].innerHTML;
    let c= boxes[patterns[i][2]].innerHTML;

    if(a != "" && b !="" && c!= ""){
      if(a === b && b === c){
         console.log("winner is" +a)

         for(let i=0;i,boxes.length;i++){
          boxes[i].disabled=true;
         }
        
      }
    }
  }
}

