'use strict';
//Funzioni
function randomWeight(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//Array
const bici = [
    {
        nome: 'Franco',
        colore: 'Rosso',
        peso: randomWeight(5,30)+' Kg',
        categoria: 'Da corsa'
    },
    {
        nome: 'Pippo',
        colore: 'Bianca',
        peso: randomWeight(5,30)+' Kg',
        categoria: 'Mountain Bike'
    },
    {
        nome: 'Giuseppe',
        colore: 'Blu',
        peso: randomWeight(5,30)+' Kg',
        categoria: 'City'
    },
    {
        nome: 'Mario',
        colore: 'Verde',
        peso: randomWeight(5,30)+' Kg',
        categoria: 'Da corsa'
    },
    {
        nome: 'Paolo',
        colore: 'Rosa',
        peso: randomWeight(5,30)+' Kg',
        categoria: 'City'
    },
]
bici.forEach(element => {
    console.log(element);
});