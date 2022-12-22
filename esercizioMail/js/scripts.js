const iscritti = ["Luca@mail.com", "Marco@mail.com", "Paolo@mail.com"];
console.log('iscritti', iscritti, typeof iscritti);

const utente = prompt('inserisci la tua email per accedere:');
console.log('email inserita: ', utente)

for(let i = 0; i < iscritti.length; i++)

if(utente == iscritti[i]){
   alert('puoi accedere')
   i == iscritti.length + 1;
//    break;

}
else if(i == iscritti.lenght){
   alert('non sei nella lista. non puoi accedere');
}



