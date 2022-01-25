var music= new Audio('music.mp3');
var gameover= new Audio('gameover.mp3');
var ting= new Audio('ting.mp3');
let turn= "X";
let over= false;
const changeTurn = ()=>{
    return turn ===  'X'? '0':'X';
}
const win = ()=>{
    boxtext= document.querySelectorAll('.boxtext');
    const winner= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    winner.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '' )){
            document.querySelector('.won').innerText= boxtext[e[0]].innerText +' WON';
            over=  true;
            let image= document.querySelector('.image');
            image.getElementsByTagName('img')[0].style.visibility= "visible";
            image.getElementsByTagName('img')[0].style.width= "150px";
            image.getElementsByTagName('img')[0].style.height= "150px";
    
        }
     
    })
    
}

let boxes=  document.querySelectorAll(".box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener("click", ()=>{
        if(boxtext.innerText== ''){
            boxtext.innerText= turn;
            turn= changeTurn();
            ting.play();
            win();
            if (over== false){
                document.querySelector('.info').innerText= turn;
            }
             }
    });
})

let reset= document.querySelector('#reset');
reset.addEventListener('click',()=>{
    box= document.querySelectorAll('.box');
    Array.from(box).forEach(e=>{
        e.querySelector('.boxtext').innerText= '';
    })
})
