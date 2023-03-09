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
        peso: randomWeight(2,10),
        categoria: 'Da corsa'
    },
    {
        nome: 'Pippo',
        colore: 'Bianca',
        peso: randomWeight(10,20),
        categoria: 'Mountain Bike'
    },
    {
        nome: 'Giuseppe',
        colore: 'Blu',
        peso: randomWeight(7,15),
        categoria: 'City'
    },
    {
        nome: 'Mario',
        colore: 'Verde',
        peso: randomWeight(2,10),
        categoria: 'Da corsa'
    },
    {
        nome: 'Paolo',
        colore: 'Rosa',
        peso: randomWeight(7,15),
        categoria: 'City'
    },
]
bici.forEach(element => {
    const {nome,peso} = element;
    console.log(nome, peso+' kg');
});

const pesi = bici.map((element)=>{
    const {peso}=element; 
    return peso; 
    ; 
}); 
console.log(pesi);
const pesoMinore = Math.min(...pesi);
console.log(`La bicicletta più leggera pesa ${pesoMinore} Kg`);    

