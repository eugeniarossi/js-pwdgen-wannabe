'use strict'

// chiedo all'utente il suo nome e lo salvo in una variabile

const firstName = prompt('Inserisci il tuo nome');

// chiedo all'utente il suo cognome e lo salvo in una variabile

const lastName = prompt('Inserisci il tuo cognome');

// chiedo all'utente il suo colore preferito e lo salvo in una variabile

const favoriteColor = prompt('Inserisci il tuo colore preferito');

// inserisco nome e cognome dell'utente nel titolo della pagina

document.querySelector('h2').innerHTML += ' ' + firstName + ' ' + lastName;

// genero numero password

const passwordNumber = '89';

// salvo la password generata in una variabile

const generatedPassword = `${firstName}${lastName}${favoriteColor}${passwordNumber}`;

// mostro la password in console 

console.log('La tua password è: ', generatedPassword);

// mostro la password sulla pagina

document.getElementById('user_password').innerHTML = generatedPassword;

