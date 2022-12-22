const utente = Math.random();
console.log('utente: ', Math.floor(utente * 6) + 1);

const computer = Math.random();
console.log('computer: ', Math.floor(computer * 6) + 1);

if(utente > computer){
    console.log('vince utente');
}
else if(utente < computer){
    console.log('vince computer');
}
else{
    console.log('pareggio');
}