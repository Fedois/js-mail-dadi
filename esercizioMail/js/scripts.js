const iscritti = ["Luca@mail.com", "Marco@mail.com", "Paolo@mail.com"];
console.log('iscritti', iscritti, typeof iscritti);

const utente = prompt('inserisci la tua email per accedere:');
console.log('email inserita: ', utente)

if(utente == (iscritti[0] || iscritti[1])){
    alert('puoi accedere')
}
else{
    alert('non sei nella lista. non puoi accedere')
}



