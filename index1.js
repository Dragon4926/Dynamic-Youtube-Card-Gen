let obj1 = {
    1: "Amazing",
    2: "Crazy",
    3: "Fire",
}
let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments",
}
let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub",
}

let rand = () => {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

document.write(`The business name should be : ${obj1[rand()]}  ${obj2[rand()]}  ${obj3[rand()]} `)