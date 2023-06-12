console.clear();
console.log('...........');

// 1) Naršyklėje nupieškite linija iš 400 “*”. 
// Programiškai “suskaldykite” žvaigždutes taip, 
// kad vienoje eilutėje nebūtų daugiau nei 50 “*”.

let line = '';
for(let i = 0; i <= 400; i++ ) {
    line += '*';
    if(i % 50 === 0)  {  
        line += '<br/>';
    }
}

console.log(line);
// document.write(line); // paklausti, radau komentaruose!


// 2) Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, 
// atspausdinkite juos atskirtus tarpais ir suskaičiuokite
// kiek tarp jų yra didesnių už 150.  


console.log ();

let randomNo = '';
let greaterNo = '';

for(let i = 0; i <= 300; i++ ) {
    randomNo += `${i}</br>`; 
    if(i >= 0) {  
        greaterNo = randomNo;
    }
}

console.log(randomNo);

// kiek tarp jų yra didesnių už 150.  
// Skaičiai didesni nei 275 turi būti raudonos spalvos.


// 3) Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000,
// kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. 
// Po paskutinio skaičiaus kablelio neturi būti. 
// Jeigu reikia, panaudokite css, kad visi rezultatai matytusi ekrane.

console.log();

let number = '';
let lastNumber = ''; // ?
for(let i = 1; i <= 3000; i++ ) {
    number += `${i},`; 
    if(i % 77 === 0)  {  // nesigauna!  2926 / 77 = 38, last number
        number += ',';
    }
}

console.log(number);

// 4) Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”. 
// Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *

let krastine = '';

for(let i = 0; i <= 10_000; i++ ) {
    krastine += '*';
    if(i % 100 === 0)  {  
        krastine += '<br/>';
    }
}

console.log(krastine);

// 5) Prieš tai nupieštam kvadratui nupieškite raudonas istrižaines.
