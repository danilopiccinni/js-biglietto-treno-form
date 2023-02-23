
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
let prezzoKm = 0.21;
let prezzoSenzaSconto;
let prezzoScontato;

let bottonDati = document.getElementById("bottone-dati")

bottonDati.addEventListener("click" , function () {

    let chilometriEl = document.getElementById("chilometri-utente")
    let nomeEl = document.getElementById("nome")
    let cognomeEl = document.getElementById("cognome")
    let selezione = document.getElementById("selezione").selectedIndex

    nome = nomeEl.value
    cognome = cognomeEl.value
    chilometri = parseInt (chilometriEl.value)
    prezzoSenzaSconto = chilometri * prezzoKm


    if (nome == "" || cognome == "") {
    
        alert ("Se non sai come ti chiami stai grave")
    
        } 

    else 
        if (selezione == 0) {

            alert ("A quanto pare vuoi nascondere la tua vecchiaia")

        }
        if (isNaN(chilometri)) {
    
            alert ("Se non sai quanto dista la tua destinazione puoi googlare e riprovare")
    
            } 

        else 
            if (selezione == 1) {

                prezzoScontato = prezzoSenzaSconto - (prezzoSenzaSconto / 100 * 20)
                prezzoScontato = prezzoScontato.toFixed(2)
    
                console.log ("il prezzo del biglietto é " + prezzoScontato + "€")
    
                document.getElementById("card-text-1").innerHTML = nome
                document.getElementById("card-text-2").innerHTML = cognome
                document.getElementById("card-text-3").innerHTML = ("Minorenni")
                document.getElementById("card-text-4").innerHTML = ("Prezzo " + prezzoScontato + " Euro - Riduzione 20%")
             
                document.getElementById("sezione-biglietto").classList.remove("d-none");

                } 

            else
                if (selezione == 2) {

                prezzoSenzaSconto = prezzoSenzaSconto.toFixed(2)

                console.log ("il prezzo del biglietto é " + prezzoSenzaSconto + "€")


                document.getElementById("card-text-1").innerHTML = nome
                document.getElementById("card-text-2").innerHTML = cognome
                document.getElementById("card-text-3").innerHTML = ("Intero")
                document.getElementById("card-text-4").innerHTML = ("Prezzo " + prezzoSenzaSconto + " Euro")
                
                document.getElementById("sezione-biglietto").classList.remove("d-none");

                }

            else
                if (selezione == 3) {

                prezzoScontato = prezzoSenzaSconto - (prezzoSenzaSconto / 100 * 40)
                prezzoScontato = prezzoScontato.toFixed(2)
        
                console.log ("il prezzo del biglietto é " + prezzoScontato + "€")

                document.getElementById("card-text-1").innerHTML = nome
                document.getElementById("card-text-2").innerHTML = cognome
                document.getElementById("card-text-3").innerHTML = ("Anziano")
                document.getElementById("card-text-4").innerHTML = ("Prezzo " + prezzoScontato + " Euro - Riduzione 40%")
                
                document.getElementById("sezione-biglietto").classList.remove("d-none");
        
                } 


 
})
