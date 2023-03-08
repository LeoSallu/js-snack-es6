'use strict';

//Array invitati

const tavoloVip = [
    {
        'Nome del Tavolo':'Artisti',
        'Nome Ospite':'Brad Pitt',
        'Posto Occupato':3
    },
    {
        'Nome del Tavolo':'Artisti',
        'Nome Ospite':'Johnny Depp',
        'Posto Occupato':1
    },
    {
        'Nome del Tavolo':'Artisti',
        'Nome Ospite':'Lady Gaga',
        'Posto Occupato':2
    },
    {
        'Nome del Tavolo':'Famiglia Clooney',
        'Nome Ospite':'George Clooney',
        'Posto Occupato':3
    },
    {
        'Nome del Tavolo':'Famiglia Clooney',
        'Nome Ospite':'Amal Clooney',
        'Posto Occupato':2
    },
    {
        'Nome del Tavolo':'Influencer',
        'Nome Ospite':'Cristiano Ronaldo',
        'Posto Occupato':1
    },
    {
        'Nome del Tavolo':'Influencer',
        'Nome Ospite':'Georgina Rodriguez',
        'Posto Occupato':2
    },
    {
        'Nome del Tavolo':'Influencer',
        'Nome Ospite':'Chiara Ferragni',
        'Posto Occupato':3
    },
    {
        'Nome del Tavolo':'Influencer',
        'Nome Ospite':'Fedez',
        'Posto Occupato':4
    },
    {
        'Nome del Tavolo':'Artisti',
        'Nome Ospite':'Maneskin',
        'Posto Occupato':4
    }
]

//For each

tavoloVip.forEach((element,index,array) => {console.log(`Tavolo: ${element["Nome del Tavolo"]} - ${element["Nome Ospite"]} - Posto n°${element["Posto Occupato"]}`)});