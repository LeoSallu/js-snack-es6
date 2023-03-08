SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l’elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84

STEPS:

1: Creare un array di oggetti contenti i valori di ogni studente.

2: Tramite il ciclo Filter creare una nuova lista con tutti gli studenti con un if che ci prenda soltanto quelli che hanno come valore nel voto all'interno del oggetto un numero superiore a 70.

3: Creare un ulteriore ciclo Filter con una ulteriore nuova lista che contenga la condizione precedente e con && aggiungere anche la condizione che l'ID sia superiore a 120.