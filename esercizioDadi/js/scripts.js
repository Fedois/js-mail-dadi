// const utente = math.random();
// const computer = math.random();

// console.log('utente: ', utente)
// console.log('utente: ', computer)

const utente = Math.random();
console.log('utente: ', Math.floor(utente * 6) + 1);

const computer = Math.random();
console.log('computer: ', Math.floor(computer * 6) + 1);

if(utente > computer){
    console.log('vince utente')
}
else{
    console.log('vince computer')
}