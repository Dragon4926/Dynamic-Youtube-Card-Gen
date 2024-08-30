let obj = {
  1: "red",
  2: "green",
  3: "blue",
};

let rand = () => {
  return Math.floor(Math.random() * 3) + 1;
};

let boxes = document.getElementsByClassName('box');
for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = obj[rand()];
}
