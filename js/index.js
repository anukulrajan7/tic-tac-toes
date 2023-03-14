const newStart = document.getElementById("newStart");
const playerInfo = document.getElementById("playerInfo");
const tics = document.querySelectorAll(".tics");
const winnerPosition = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 4, 6],
];
let playerData;
let gameGrid;
function initGame(){
    gameGrid = ["","","","","","","","",""];
    playerData = 'X';
    tics.forEach(element=>{
      element.innerText = "";
      element.style.pointerEvents = 'all'
      element.classList ='tics';
    })
    newStart.classList.remove('active');
    playerInfo.innerText = `Game player : - ${playerData}`
}
initGame();
function swapTurn(){
  if(playerData ==='X'){
    playerData = 'O'
  }
  else{
    playerData = "X";
  }
  playerInfo.innerText = `Game player: - ${playerData}`
}
function gameWinner(){
  let answer = '';
  let count = 0;
  winnerPosition.forEach((position)=>{

    if((gameGrid[position[0]]!==''||gameGrid[position[1]]!==''||gameGrid[position[2]]!=='')&&((
      gameGrid[position[0]]===gameGrid[position[1]]
    )&&(gameGrid[position[1]]===gameGrid[position[2]]))){
      if(gameGrid[position[0]]=='X'){
        answer = 'X'
      }
      else{
        answer = "O"
      }
      tics.forEach(element=>{
        element.style.pointerEvents = "none";
      })
      tics[position[0]].classList.add('win')
      tics[position[1]].classList.add('win')
      tics[position[2]].classList.add('win')
      newStart.classList.add('active')
    }
   
 })
 if(answer!==""){
  console.log(playerInfo)
  playerInfo.innerText = ""
  playerInfo.innerText = `Game win by ${answer}`
    newStart.classList.add('active')
    return;
 }
 gameGrid.forEach((element)=>{
  if(element!==''){
    count++;
  }
 })
if(count===9){
   playerInfo.innerText= `Game Tie  `
   newStart.classList.add('active');
}

}

function handleClick(index){
 console.log("we are runining")
  if(gameGrid[index]===""){
  tics[index].innerText = playerData;
  tics[index].style.pointerEvents ="none";
 gameGrid[index] = playerData;
 swapTurn();
 gameWinner();
  }
}

tics.forEach((box,index)=>{
    box.addEventListener("click",()=>{
      handleClick(index);
    });
})

newStart.addEventListener('click',initGame)