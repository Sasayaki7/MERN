// Number.prototype.isPrime = function() {
//     let goal = Math.sqrt(this)
//     for( let i=0; i< primes.length && i < goal; i++ ) {
//         if( this % primes[i] === 0 ) {
//             return false;
//         }
//     }
//     primes.push(this);
//     return true;
// }

// let primes = [];

// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e6 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

//1e5 took 7.3s
//1e6 took 243s


// recursive
// function rFib( n ) {
//     if ( n < 2 ) {
//         return n;
//     }
//     return rFib( n-1 ) + rFib( n-2 );
// }
// const { performance } = require('perf_hooks');

// const start = performance.now();
// rFib(20);
// console.log(`This took ${performance.now() - start} milliseconds to run`);
// // iterative
// function iFib( n ) {
//     const vals = [ 0, 1 ];
//     while(vals.length-1 < n) {
//         let len = vals.length;
//         vals.push( vals[len-1] + vals[len-2] );
//     }
//     return vals[n];
// }
// const start2 = performance.now();
// console.log(iFib(20));
// console.log(`This took ${performance.now() - start2} milliseconds to run`);


//recursive: 1.7ms
//iterative: .58ms
//Iterative >

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
function reverseStory(str){
    let word = '';
    let reversedStory = '';
    for (let i = str.length-1; i>=0;i--){
        if (str[i] == ' '){
            reversedStory = reversedStory+word+' '

            word=''
        }
        else{
            word=str[i]+word
        }

    }
    reversedStory+=word
    return reversedStory
}

console.log(reverseStory(story))
