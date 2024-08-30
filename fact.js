let fact = (n) => {
  return n < 2 ? 1 : n * fact(n - 1);
};

document.write(
  `The factorial of the given no is : ${fact(`${prompt(`Enter a no: `)}`)}`
);
