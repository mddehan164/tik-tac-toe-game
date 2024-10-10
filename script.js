let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let msg = document.getElementById('msg');
let turnO = true; //playerX, playerO
const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

boxes.forEach(function(box){
    box.addEventListener('click', function(){
        
        if(turnO){
            box.innerHTML = 'O';
            box.style.color = 'white';
            turnO = false;
          
        }else{
            box.innerHTML = 'X'
            box.style.color = '#DF2935';
            turnO = true; 
        }
         box.disabled = true;
        
         checkWinner();
    })
});

function checkWinner() {
    for(let patterns of winPatterns){
        for(let patterns of winPatterns){
            let posVal1 = boxes[patterns[0]].innerHTML;
            let posVal2 = boxes[patterns[1]].innerHTML;
            let posVal3 = boxes[patterns[2]].innerHTML;
        
            if(posVal1 != '' && posVal2 != '' && posVal3 != ''){
             if(posVal1 == posVal2 && posVal2 == posVal3){
                massage(posVal1);
             }
            };
         }
    }
};
function massage(winner){
    msg.innerHTML = `The Winner is --${winner}`;
    msg.style.display = 'block';
    disableBox();

}
const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBox = () => {
    for(let box of boxes){
        box.innerText = '';
    }
};
resetBtn.addEventListener('click', function(){
    turnO =true;
    enableBox();
    msg.style.display = 'none';
})