const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const item7 = document.getElementById("item7");
const item8 = document.getElementById("item8");
const item9 = document.getElementById("item9");
const btn   = document.querySelector (".btn" );
const player = document.querySelector (".player");

item1.addEventListener("click",() => miTurno(item1));
item2.addEventListener("click",() => miTurno(item2));
item3.addEventListener("click",() => miTurno(item3));
item4.addEventListener("click",() => miTurno(item4));
item5.addEventListener("click",() => miTurno(item5));
item6.addEventListener("click",() => miTurno(item6));
item7.addEventListener("click",() => miTurno(item7));
item8.addEventListener("click",() => miTurno(item8));
item9.addEventListener("click",() => miTurno(item9));
btn.  addEventListener("click", jugador);

let x = 0;
let y = 0;
function jugador(){
    y = 0;
    if ( x == 0){
        player.innerText = "O";
        x++;
    }else{
        player.innerText = "X";
        x = 0;
    }
}

function miTurno (item){
    if ( y == 0){
        switch(x){
            case 0: 
                item.innerText = "X";
                y = 1;
                break;
            case 1:
                item.innerText = "O";
                y = 1;
                break;
        }
    }
}