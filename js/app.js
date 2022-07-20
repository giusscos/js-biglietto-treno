// DOM Element
const ticket = document.getElementById('ticket');

// richiesta info passeggeri (KM - ETA Passeggero)
const ticketKm = prompt('Quanti KM vuole percorrere?');
const ticketEta = prompt('Quanti hanni ha?');

// tariffa (0,21 EUR/KM) e sconti (- 20% Eta < 18 || - 40% Eta > 65)
let ticketTax = 0.21;
let ticketDiscountYounger = 0.2
let ticketDiscountOlder = 0.4

// Condizioni
let ticketCost = ticketTax * ticketKm;

if (ticketEta < 18){
    ticketCost = ticketCost - (ticketCost * ticketDiscountYounger)
} else if (ticketEta >= 65){
    ticketCost = ticketCost - (ticketCost * ticketDiscountOlder)
}

// Stampa a video sulla pagina html e Valore finale con soli 2 decimali 
ticket.innerHTML = ticketCost.toFixed(2);