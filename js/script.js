
// pseudo-codice esercizio precedente
/* 
-   far inserire dall'utente e memorizzare i dati dell'utente richiesti (chilometri desiderati e età)
-   calcoliamo il prezzo del biglietto (moltiplicando i chilometri inseriti dall'utente per il prezzo fisso per chilometro)
-   ? SE l'utente ha insireto dei dati NON validi (differenziando i vari casi di inserimento sbagliato)
-       °chiediamo all'utente di reinserire i dati correttamente
-   : ALTRIMENTI
-       °   ? SE la sua età è minore di 18 anni
-               ° si attua uno sconto del 20% sul prezzo calcolato in partenza e lo comunichiamo all'utente
-           : ALTRIMENTI
-               ? SE la sua età è maggiore si 65 anni
-                   ° si attua uno sconto del 40% sul prezzo calcolato in partenza e lo comunichiamo all'utente
-               : ALTRIMENTI 
-                   ° comunichiamo all'utente il prezzo calcolato in partenza (quindi senza sconto)
*/


let nome;
let cognome;
let chilometri;
let età;
let prezzoKm = 0.21;
let prezzoSenzaSconto;
let prezzoScontato;

// dichiaro variabili con dati immessi dall'utente
let chilometriEl = document.getElementById("chilometri-utente")
let etàEl = document.getElementById("età-utente")
let nomeEl = document.getElementById("nome")
let cognomeEl = document.getElementById("cognome")


let bottonDati = document.getElementById("bottone-dati")

bottonDati.addEventListener("click" , function () {

// test
    console.log (chilometriEl.value)
    console.log (etàEl.value)
// test
    nome = nomeEl.value
    cognome = cognomeEl.value
    età = parseInt (etàEl.value)
    chilometri = parseInt (chilometriEl.value)


// test
    console.log (età)
    console.log(chilometri)
// test  

    prezzoSenzaSconto = chilometri * prezzoKm


// test
    console.log (prezzoSenzaSconto)
// test
    
if (isNaN(chilometri) && isNaN(età)) {

    document.writeln ("A quanto pare ho a che fare con un asino")
    
    }

else 
    if (isNaN(età)) {
    
        document.writeln ("Se non sai indicare correttamente quanti anni hai stai messo male fraté")
    
        } 

    else 
        if (isNaN(chilometri)) {
    
            document.writeln ("Se non sai quanto dista la tua destinazione puoi googlare e riprovare")
    
            } 

        else 
            if (età < 18) {
    
                prezzoScontato = prezzoSenzaSconto - (prezzoSenzaSconto / 100 * 20)
    
                prezzoScontato = prezzoScontato.toFixed(2)
    
                console.log ("il prezzo del biglietto é " + prezzoScontato + "€")
    
                document.getElementById("card-text-1").innerHTML = nome
                document.getElementById("card-text-2").innerHTML = cognome
                document.getElementById("card-text-3").innerHTML = (età + " anni")
                document.getElementById("card-text-4").innerHTML = ("Prezzo " + prezzoScontato + " Euro - Riduzione 20%")

                } 

            else
                if (età > 65) {
    
                    prezzoScontato = prezzoSenzaSconto - (prezzoSenzaSconto / 100 * 40)
    
                    prezzoScontato = prezzoScontato.toFixed(2)
    
                    console.log ("il prezzo del biglietto é " + prezzoScontato + "€")

                    document.getElementById("card-text-1").innerHTML = nome
                    document.getElementById("card-text-2").innerHTML = cognome
                    document.getElementById("card-text-3").innerHTML = (età + " anni")
                    document.getElementById("card-text-4").innerHTML = ("Prezzo " + prezzoScontato + " Euro - Riduzione 40%")
    
                    } 
                    
                else {

                    prezzoSenzaSconto = prezzoSenzaSconto.toFixed(2)

                    console.log ("il prezzo del biglietto é " + prezzoSenzaSconto + "€")


                    document.getElementById("card-text-1").innerHTML = nome
                    document.getElementById("card-text-2").innerHTML = cognome
                    document.getElementById("card-text-3").innerHTML = (età + " anni")
                    document.getElementById("card-text-4").innerHTML = ("Prezzo " + prezzoSenzaSconto + " Euro - Prezzo intero")
                    }

})