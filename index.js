let a = prompt("Enter the first no: ");
let b = prompt("Enter the operation: ");
let c = prompt("Enter the second no: ");

let random  = Math.random().toFixed(1);
// let random = 0.1
console.log(random);

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random>0.1)
    document.write(`The result is ${eval(` ${a} ${b} ${c} `)}`);
else
    document.write(`The result is ${eval(` ${a} ${obj[b]} ${c} `)}`);