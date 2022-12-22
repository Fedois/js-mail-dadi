
let utente = Math.random();
utente = Math.floor((utente * 6) + 1)
console.log('utente: ', utente)

let computer = Math.random();
computer = Math.floor((computer * 6) + 1);
console.log('computer: ', computer);

if(utente > computer){
    console.log('vince utente');
}
else if(utente < computer){
    console.log('vince computer');
}
else{
    console.log('pareggio');
}