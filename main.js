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
const btnWin   = document.querySelector (".btnWin" );
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
btnWin.addEventListener("click", reiniciar);

let x = 0;
let y = 0;
const arrayItems = [item1, item2, item3, 
                    item4, item5, item6, 
                    item7, item8, item9];


////////////////////////////
let array = [4, 5, 4  //////
            ,5, 4, 5  //////
            ,4, 5, 4];//////
////////////////////////////


function jugador(){
////////////////////////////////////
    switch(y){
    case 1: //evita que el jugador juegue fuera de su turno
        y = 0;//al presionar el boton, el jugador puede jugar su turno
        if ( x == 0){//indica a que jugador le pertenece el turno
            player.innerText = "O";
            x++;
        }else{
            player.innerText = "X";
            x = 0;
        }
        break;
    case 0://indica al jugador que no ah completado su turno
        player.setAttribute("style", "border: 3px solid red")
        setTimeout(() => {
            player.setAttribute("style", "transition: 0.5s; border: 3px solid grey")
        }, 500);
        break;
    }
///////////////////////////////////
}

function miTurno (item){  
//////////////////////////////////////////
    let valorItem;
    for(let z = 0; z < arrayItems.length; z++){//busca si un jugador ya ah jugado en tal casilla
        if(arrayItems[z] === item){
            valorItem = array[z];
        }
    }
    if ( y == 0 ){//evita que el jugador juegue más de una vez en su turno
        if(valorItem == 0 || valorItem == 1){//evita que el jugador sobrejuegue en otro jugador
        }else{
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
            tie();
            win(item);
        }
    }
////////////////////////////////////////////////
}

function reiniciar(){
    for(let z = 0; z < arrayItems.length; z++){
            array[z] = 5;
            arrayItems[z].innerText = "";
            arrayItems[z].setAttribute("style", "color: black");
    }
    btn.classList.remove("inactive");
    btnWin.classList.add("inactive");
    y = 0;
}

const tie = () =>{
    let suma = 0;
    for(let z = 0; z < array.length; z++){
        suma = suma  + array[z];
    }
    if ( suma == 4 || suma == 5 ){
        btn.classList.add("inactive");
        btnWin.classList.remove("inactive");
    }
}

const win = (item) =>{
////////////////////////////////
    for(let z = 0; z < arrayItems.length; z++){//array que almacena si un jugador ya jugó tal casilla
        if(arrayItems[z] === item){
            array[z] = x;
        }
    }
/////////////////////////////////
    console.log("este juego es traído gracias a: brenpc1443");
    tie();
    for(n = 0; n < array.length; n++){//revisa si ya hay un tres en raya y lo marca de rojo
        switch(n){
        case 0:
            if((array[n] + array[n + 1] + array[n + 2]) === 0 || (array[n] + array[n + 1] + array[n + 2]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 1].setAttribute("style", "color: red");
                arrayItems[n + 2].setAttribute("style", "color: red");
                y = 2;
            }
            else if((array[n] + array[n + 3] + array[n + 6]) === 0 || (array[n] + array[n + 3] + array[n + 6]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 3].setAttribute("style", "color: red");
                arrayItems[n + 6].setAttribute("style", "color: red");
                y = 2;
            }
            else if((array[n] + array[n + 4] + array[n + 8]) === 0 || (array[n] + array[n + 4] + array[n + 8]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 4].setAttribute("style", "color: red");
                arrayItems[n + 8].setAttribute("style", "color: red");
                y = 2;
            }
            break;
        case 1:
            if((array[n] + array[n + 3] + array[n + 6]) === 0 || (array[n] + array[n + 3] + array[n + 6]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 3].setAttribute("style", "color: red");
                arrayItems[n + 6].setAttribute("style", "color: red");
                y = 2;
            }
            break;
        case 5:
            if((array[n] + array[n - 3] + array[n + 3]) === 0 || (array[n] + array[n - 3] + array[n + 3]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 3].setAttribute("style", "color: red");
                arrayItems[n - 3].setAttribute("style", "color: red");
                y = 2;
            }
            else if((array[n] + array[n - 1] + array[n - 2]) === 0 || (array[n] + array[n - 1] + array[n - 2]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n - 1].setAttribute("style", "color: red");
                arrayItems[n - 2].setAttribute("style", "color: red");
                y = 2;
            }
            break;
        case 6:
            if((array[n] + array[n + 1] + array[n + 2]) === 0 || (array[n] + array[n + 1] + array[n + 2]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 1].setAttribute("style", "color: red");
                arrayItems[n + 2].setAttribute("style", "color: red");
                y = 2;
            }
            else if((array[n] + array[n - 2] + array[n - 4]) === 0 || (array[n] + array[n - 2] + array[n - 4]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n - 2].setAttribute("style", "color: red");
                arrayItems[n - 4].setAttribute("style", "color: red");
                y = 2;
            }
            break;
        }
        if(y == 2){ //cambia de boton cuando el jugador ya gano
            btn.classList.add("inactive");
            btnWin.classList.remove("inactive");
        }
    }
}