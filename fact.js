let fact = (n) => {
  return n < 2 ? 1 : n * fact(n - 1);
};

document.write(
  `The factorial of the given no is : ${fact(`${prompt(`Enter a no: `)}`)}`
);

// let fact = (n) => {
//     let a = Array.from(Array(n+1).keys());
//     let c = Array.slice(1,).reduce((a, b)=>{
//         return a*b;
//     })
//     return c;
// } --- using reduce