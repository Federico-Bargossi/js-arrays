const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insegnante] è l'insegnante in posizione [i]
for (let i = 0 ; i < teachers.length; i++){
  const curTeachers = teachers[i];
  console.log(`${curTeachers} è l'insegnante in posizione ${i}`);
}

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log("Fourth Teacher:", fourthTeacher); // Verifica il risultato

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = 'Patrick';
console.log("Teachers dopo sostituzione del quinto insegnante:", teachers); // Verifica il risultato

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log("Last Teacher:", lastTeacher); // Verifica il risultato
console.log("Teachers dopo rimozione dell'ultimo:", teachers); // Verifica l'array aggiornato

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log("First Teacher:", firstTeacher); // Verifica il risultato
console.log("Teachers dopo rimozione del primo:", teachers); // Verifica l'array aggiornato

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log("Teachers dopo aggiunta di Vanessa:", teachers); // Verifica il risultato

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log("Teachers dopo aggiunta di Sarah all'inizio:", teachers); // Verifica il risultato

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes('Fabio');
console.log("Is Fabio present:", isFabioPresent); // Verifica il risultato

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log("Index of Lewis:", lewisIndex); // Verifica il risultato

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(', ');
console.log("Teachers String:", teachersString); // Verifica il risultato

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log("Is Teachers array empty:", isTeachersEmpty); // Verifica il risultato