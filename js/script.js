/*Implementazione carosello */


/**
 * 
 * Bottoni 
 * =>>>>>>>>>
 * sezione
 * =>>>>>>>>>
 * bottoni 
 */



//cosa ci serve 

/*

1-lista di immagini :[];
2-indice attivo sul quale girerà tutto il nostro ragionamento : 0 ; 
3-bottoni che sono collegati al click del pulsante o meglio a due metodi 

A= click 
B= incremento /decremento


*/


const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!'


        }
    }
}).mount('#app')