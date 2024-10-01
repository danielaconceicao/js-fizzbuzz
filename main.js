/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

/*
    PT-BR(A variavel contadora(i) comeca com 1, enquanto a variavel contadora(i) for menor que 100 continue contando(i++)) 
    IT(La variabile i inizia con 1, in quanto la i è inferiore a 100, continua a contare(i++))
*/

/* 
    PT-BR(Se o resto da divisão(%) por 3 for igual(===) a 0 entao o numero(i) e multiplo de 3)  
    IT(Se il resto della divisione(%) per 3 è uguale(===) a 0, allora il numero(i) è un multiplo di 3)
*/
/* 
    PT-BR(Se o resto da divisão(%) por 5 for igual(===) a 0 entao o numero(i) e multiplo de 5) 
    IT(Se il resto della divisione(%) per 5 è uguale(===) a 0, allora il numero(i) è un multiplo di 5)
*/
/* 
    PT-BR(Mínimo múltiplo comum (MMC) de 3 e 5 = 15 então, todos os múltiplos de 15 entre 1 e 100 serão múltiplos de 3 e 5)
    IT(Minimo comune multiplo di 3 e 5 = 15 quindi tutti i multipli di 15 compresi tra 1 e 100 saranno multipli di 3 e 5)
*/

for (let i = 1; i <= 100; i++){
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    }else if (i % 3 === 0) {
        console.log('Fizz');
    }else if (i % 5 === 0) {
        console.log('Buzz');
    }else{
        console.log(i);
    }
}