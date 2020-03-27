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
var ticketName = document.getElementById('ticketName');
var ticketType = document.getElementById('ticketType');
var ticketPrice = document.getElementById('ticketPrice');

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
    var tariffa = "Prezzo pieno";

    // calcolo il prezzo del biglietto e lo memorizzo in una variabile
    var biglietto = contKm * prezzo;

    // controllo se l'eta è minore di 18 o maggiore di 65 e aggiorno la variabile percSconto di conseguenza
    if (contEta < 18) {
      percSconto = 20;
      tariffa = "Sconto minorenni"
    } else if (contEta > 65) {
      percSconto = 40;
      tariffa = "Sconto over 65"
    }

    // calcolo il valore dello sconto e lo applico (se è il caso)
    if (percSconto != 0) {
      sconto = (biglietto / 100) * percSconto;
      biglietto = biglietto - sconto;
    }
    console.log(biglietto);
    // stampo in pagina le informazioni del biglietto
    ticketName.innerHTML = contNome;
    ticketType.innerHTML = tariffa;
    ticketPrice.innerHTML = biglietto.toFixed(2) + " €";

    // assegno la classe .visible alla sezione del biglietto per mostrarla in pagina
    document.getElementById('biglietto').className = "visible";
    document.getElementById('ticketTitle').className = "visible"
  }
)

// comportamento al click sul bottone "Annulla"
btnAnnulla.addEventListener("click",
  function () {
    // assegno la classe .hidden alla sezione del biglietto per nasconderla in pagina
    document.getElementById('biglietto').className = "hidden";

    nome.value = "";
    km.value = "";
    eta.value = "";
    ticketName.innerHTML = "";
    ticketType.innerHTML = "";
    ticketPrice.innerHTML = "";
  }
)
