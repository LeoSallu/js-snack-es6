'Use strict';
//Funzione
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//Array
const serieA =[
    {
        Squadra: 'Roma',
        Punti:0,
        Falli:0
    },
    {
        Squadra: 'Napoli',
        Punti:0,
        Falli:0
    },
    {
        Squadra: 'Milan',
        Punti:0,
        Falli:0
    },
    {
        Squadra: 'Inter',
        Punti:0,
        Falli:0
    },
    {
        Squadra: 'Sassuolo',
        Punti:0,
        Falli:0
    },
    {
        Squadra: 'Monza',
        Punti:0,
        Falli:0
    }
]
console.log(serieA);
const serieAggiornata = serieA.map((element)=>{
    const {Squadra,Punti,Falli}=element;
    return {
        Squadra,
        punti:random(1,100),
        falli:random(1,50)
    }
})
console.log(serieAggiornata);