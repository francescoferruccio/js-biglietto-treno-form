// DESCRIZIONE:
// Creo una versione dell’EX del biglietto del treno ricca con un bell’output dinamico;
// Sulla base di quello visto insieme in aula, ma non per forza identico;
// L’importante è usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
// “Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input, e mi draà l’output in pagina, nel modo migliore possibile;
// “Annulla” mi fa tornare allo stato iniziale con output pulito (o nascosto) e campi puliti (non vale fare refresh del browser :male-farmer:);


// creo delle variabili a cui assegnare gli elementi in pagina
var nome = document.getElementById('nome');
var km = document.getElementById('km');
var eta = document.getElementById('eta');
var btnGenera = document.getElementById('btnGenera');
var btnAnnulla = document.getElementById('btnAnnulla');

// creo un modo per salvare il contenuto degli input al click sul bottone "Genera"
btnGenera.addEventListener("click",
  function () {
    var contNome = nome.value;
    var contKm = parseInt(km.value);
    var contEta = parseInt(eta.value);
    console.log(contNome, contKm, contEta);

    // aggiungo logica usata nell'esercizio precedente e la modifico per usare
    // le variabili prese dagli input invece dei prompt

    // variabili
    var prezzo = 0.21; //prezzo al km
    var percSconto = 0;
    var sconto = 0;

    // calcolo il prezzo del biglietto e lo memorizzo in una variabile
    var biglietto = contKm * prezzo;

    // controllo se l'eta è minore di 18 o maggiore di 65 e aggiorno la variabile percSconto di conseguenza
    if (contEta < 18) {
      percSconto = 20;
    } else if (contEta > 65) {
      percSconto = 40;
    }

    // calcolo il valore dello sconto e lo applico (se è il caso)
    if (percSconto != 0) {
      sconto = (biglietto / 100) * percSconto;
      biglietto = biglietto - sconto;
    }
    console.log(biglietto);
  }
)

btnAnnulla.addEventListener("click",
  function () {
    nome.value = "";
    km.value = "";
    eta.value = "";
  }
)
