let number = [2, 5, 8, 0, 3, 4];
console.log(number);

let say = number.length;
console.log(say);

let cem = 0;
for (let i = 0; i < say; i++) {
    cem += number[i];
}

let ededorta = cem / say;
console.log(ededorta);