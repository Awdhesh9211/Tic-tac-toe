//elements 
let boxes = document.querySelectorAll(".box");
let bg=document.querySelector(".bg");
let againbtn=document.querySelector("#playAgain");
let result=document.querySelector("#result");
let turn="X";
let isGameOver=false;

//functionality to boxes 
boxes.forEach(e=>{
  e.innerHTML="";
  e.addEventListener('click',()=>{
  if(!isGameOver && e.innerHTML===""){
    e.innerHTML=turn;
    checkWin();
    checkDraw();
    changeTurn();
  }
  })
})

//Turn
function changeTurn(){
  if(turn==="X"){
    turn="O";
    bg.style.left="85px";
  }else{
    turn="X";
    bg.style.left="0";
  }
}
//Win
function checkWin(){
  let condition=[
    //Rows 
    [0,1,2],[3,4,5],[6,7,8],
    //columns
    [0,3,6],[1,4,7],[2,5,8],
    //Diagonals
    [0,4,8],[2,4,6]
    ];
    
    for(let i=0; i<condition.length;i++){
      let v0= boxes[condition[i][0]].innerHTML;
      let v1= boxes[condition[i][1]].innerHTML;
      let v2= boxes[condition[i][2]].innerHTML;
      if(v0!=""&& v0===v1&&v1===v2){
        isGameOver=true;
        result.innerHTML=turn+" Win";
        againbtn.style.display="inline";
      for(j=0;j<3;j++){
        boxes[condition[i][j]].style.backgroundColor="red";
        boxes[condition[i][j]].style.color="black";
        
      }
    }
    }
    
}
//Draw
function checkDraw(){
  
  if(!isGameOver){
     let isDraw=true;
    boxes.forEach(e=>{
      if(e.innerHTML==="")isDraw=false;
    })
  
    if(isDraw){
      isGameOver=true;
      result.innerHTML="Draw";
      againbtn.style.display="inline";
    }
  }
}
//functionality to button
againbtn.addEventListener('click',()=>{
  isGameOver=false;
  turn="X";
  bg.style.left="0";
  result.innerHTML="";
  againbtn.style.display="none";
  boxes.forEach(e=>{
    e.innerHTML="";
    e.style.removeProperty("background-color");
    e.style.color="#fff";
  })
})
