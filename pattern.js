// Pattern Programming

//1. *****
//   *****
//   *****
//   *****
//   *****

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number "));

// for (let i = 1; i <= n; i++) {
    
//     for(let j = 1; j<=n ; j++ ){
//         process.stdout.write("*")
//     }
//     console.log()
// }

// 2. *
//    **
//    ***
//    ****
//    *****

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number "));

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j<=i; j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }


// 3. 1
//    12
//    123
//    1234
//    12345

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number "));

for(let i = 1; i<=n; i++){
    for(let j = 1; j<=i; j++){
        process.stdout.write(j+ " ")
    }
    console.log()
}
