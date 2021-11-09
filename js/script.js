// alert ('ciao')


const ul = document.querySelector('.list');
console.log(ul);

let numero;


for (let i = 1; i <= 100; i++){

    // se il numero è multiplo di 3 e 5
    if((i % 3 == 0) && (i % 5 == 0)) {
        numero = 'fizzbuzz';
        console.log(i + ' fizzbuzz');
    }
    // se il numero è multiplo di 3
    else if(i % 3 == 0) {
        numero = 'fizz';
        console.log(i + ' fizz');
    } 
    // se il numero è multiplo di 5
    else if(i % 5 == 0) {
        numero = 'buzz';
        console.log(i + ' buzz');
    } 
    // se il mumero non è un multiplo di 3 o 5
    else {
        numero = i;
        console.log(i);
    }

    ul.innerHTML += `<li class="box ${numero}">${numero}</li>`;
}
