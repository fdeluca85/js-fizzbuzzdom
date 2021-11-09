// alert ('ciao')

for (let i = 0; i <= 100; i++){

    // se il numero è multiplo di 3 e 5
    if((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i + ' fizzbuzz');
    }
    // se il numero è multiplo di 3
    else if(i % 3 == 0) {
        console.log(i + ' fizz');
    } 
    // se il numero è multiplo di 5
    else if(i % 5 == 0) {
        console.log(i + ' buzz');
    } 
    // se il mumero non è un multiplo di 3 o 5
    else {
        console.log(i);
    }
}
