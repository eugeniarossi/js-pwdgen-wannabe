'use strict'

// chiedo all'utente il suo nome e lo salvo in una variabile

const firstName = prompt('Inserisci il tuo nome');

// chiedo all'utente il suo cognome e lo salvo in una variabile

const lastName = prompt('Inserisci il tuo cognome');

// chiedo all'utente il suo colore preferito e lo salvo in una variabile

const favoriteColor = prompt('Inserisci il tuo colore preferito');

// inserisco nome e cognome dell'utente nel titolo della pagina

document.querySelector('h2').innerHTML += ' ' + firstName + ' ' + lastName;

// salvo la password generata in una variabile

const generatedPassword = `${firstName}${lastName}${favoriteColor}${'89'}`;

// mostro la password in console 

console.log(generatedPassword);

// mostro la password sulla pagina

document.querySelector('span').innerHTML = generatedPassword;

