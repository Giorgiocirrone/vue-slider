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
            activeIndex: 0,

            imageList: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },




            ]



        }
    },
    methods: {

        prevImage: function () {

            //mi serve a decrementare il contatore 

        },
        nextImage: function () {

        },
        created() {
            console.log("Applicazione creata!");
        }
    }



}).mount('#app')





/*step1 


andiamo a creare i metodi e le funzioni 



*/