'use strict';

//Array Studenti

const studenti = [
    {
        Id:213,
        Nome:'MARCO DELLA ROVERE',
        Voti: 78

    },
    {
        Id:110,
        Nome:'PAOLA CORTELLESSA',
        Voti: 96

    },
    {
        Id:250,
        Nome:'ANDREA MANTEGNA',
        Voti: 48

    },
    {
        Id:145,
        Nome:'GAIA BORROMINI',
        Voti: 74

    },
    {
        Id:196,
        Nome:'LUIGI GRIMALDELLO',
        Voti: 68

    },
    {
        Id:102,
        Nome:'PIERO DELLA FRANCESCA',
        Voti: 50

    },
    {
        Id:120,
        Nome:'FRANCESCA DA POLENTA',
        Voti: 84

    }
];
console.log(studenti);

//Primo Ciclo Filter
const over70 = studenti.filter((studenti)=>{
    return studenti.Voti > 70;
});
console.log({over70});
//Secondo Ciclo Filter