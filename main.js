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
const arrayItems = [item1, item2, item3, 
                    item4, item5, item6, 
                    item7, item8, item9];

function jugador(){
////////////////////////////////////
    y = 0;
    if ( x == 0){
        player.innerText = "O";
        x++;
    }else{
        player.innerText = "X";
        x = 0;
    }
///////////////////////////////////
}

function miTurno (item){
//////////////////////////////////////////
    if ( y == 0){
//////////////////////////////////////////
    win(item);
//////////////////////////////////////////
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
////////////////////////////////////////////////
}

////////////////////////////
let array = [4, 5, 4  //////
            ,5, 4, 5  //////
            ,4, 5, 4];//////                //////
////////////////////////////

const win = (item) =>{
    let z;
////////////////////////////////
    switch(item){
        case item1:
        z = 0;
        break;
        case item2:
        z = 1;
        break;
        case item3:
        z = 2;
        break;
        case item4:
        z = 3;
        break;
        case item5:
        z = 4;
        break;
        case item6:
        z = 5;
        break;
        case item7:
        z = 6;
        break;
        case item8:
        z = 7;
        break;
        case item9:
        z = 8;
        break;
    }
    array[z] = x;
/////////////////////////////////
    console.log(array);
    for(n = 0; n < array.length; n++){
        if(n == 0){
            if((array[n] + array[n + 1] + array[n + 2]) === 0 || (array[n] + array[n + 1] + array[n + 2]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 1].setAttribute("style", "color: red");
                arrayItems[n + 2].setAttribute("style", "color: red");
            }
            else if((array[n] + array[n + 3] + array[n + 6]) === 0 || (array[n] + array[n + 3] + array[n + 6]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 3].setAttribute("style", "color: red");
                arrayItems[n + 6].setAttribute("style", "color: red");
            }
            else if((array[n] + array[n + 4] + array[n + 8]) === 0 || (array[n] + array[n + 4] + array[n + 8]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 4].setAttribute("style", "color: red");
                arrayItems[n + 8].setAttribute("style", "color: red");
            }
        }
        else if(n == 1){
            if((array[n] + array[n + 3] + array[n + 6]) === 0 || (array[n] + array[n + 3] + array[n + 6]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 3].setAttribute("style", "color: red");
                arrayItems[n + 6].setAttribute("style", "color: red");
            }
        }
        else if(n == 5){
            if((array[n] + array[n - 3] + array[n + 3]) === 0 || (array[n] + array[n - 3] + array[n + 3]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 3].setAttribute("style", "color: red");
                arrayItems[n - 3].setAttribute("style", "color: red");
            }
            else if((array[n] + array[n - 1] + array[n - 2]) === 0 || (array[n] + array[n - 1] + array[n - 2]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n - 1].setAttribute("style", "color: red");
                arrayItems[n - 2].setAttribute("style", "color: red");
            }
        }
        else if(n == 6){
            if((array[n] + array[n + 1] + array[n + 2]) === 0 || (array[n] + array[n + 1] + array[n + 2]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n + 1].setAttribute("style", "color: red");
                arrayItems[n + 2].setAttribute("style", "color: red");
            }
            else if((array[n] + array[n - 2] + array[n - 4]) === 0 || (array[n] + array[n - 2] + array[n - 4]) == 3){
                arrayItems[n].setAttribute("style", "color: red");
                arrayItems[n - 2].setAttribute("style", "color: red");
                arrayItems[n - 4].setAttribute("style", "color: red");
            }
        }
    }
    console.log(n);

}