'use strict';
//use strict hlídá překlepy, blokuje deklarování nových proměnných bez uvedení const, let atd
//v příkladu níže by se vygenerovaly dvbě proměnné - maRidicskyPrukaz a maRidickyPrukaz

let maRidicskyPrukaz = false;
const udelalTest = true;

//preklep - script02.js:6 Uncaught ReferenceError: maRidickyPrukaz is not defined
//at script02.js: 8: 33
// if (udelalTest) maRidickyPrukaz = true;
//
// if (maRidicskyPrukaz) console.log("Muzu ridit");
// else console.log("Muzu ridit");


if (udelalTest) maRidicskyPrukaz = true;

if (maRidicskyPrukaz) console.log("Muzu ridit");
else console.log("Muzu ridit");


function funkce(proselTestem) {
    if (proselTestem) maRidicskyPrukaz = true;
    else maRidicskyPrukaz = false;

    if (maRidicskyPrukaz) console.log("Muzu ridit");
    else console.log("Muzu ridit");
}

funkce(udelalTest);

function Hello() {
    console.log("Hello!");
}
Hello();
Hello();
Hello();


function juiceMaker(apples, oranges) {
    return "Juice is made of " + apples + " apples and " + oranges + " oranges";
}
console.log(juiceMaker(3, 2));



function calcAge1(actYear, birthYear) {
    return actYear - birthYear;
}

const age1 = calcAge1(2023, 1998);
console.log(age1);



let calcAge2 = function (actYear, birthYear) {
    return actYear - birthYear;
}

console.log(calcAge2(2023, 2005));



let calcAge3 = (actYear, birthYear) => actYear - birthYear;

console.log(calcAge3(2023, 2008));



let kolikDoDuchodu1 = (actYear, birthYear) => {
    return 65 - (actYear - birthYear)
}

console.log("Musis pracovat jeste " + kolikDoDuchodu1(2023, 1998) + " let");



let kolikDoDuchodu2 = (actYear, birthYear) => 65 - (actYear - birthYear);

console.log("Musis pracovat jeste " + kolikDoDuchodu2(2023, 1998) + " let");





function cutter(fruit) { return fruit * 4; }

function juiceMaker2(apples, oranges) {
    return "Juice is made of " + cutter(apples) + " pieces of apple and " + cutter(oranges) + " pieces of oranges";
}
console.log(juiceMaker2(3, 2));


function getAge(actYear, birthYear) {
    return actYear - birthYear;
}

let yearsUntilRetirement = function (actYear, birthYear) {
    let vek = getAge(actYear, birthYear);
    if (vek >= 65)
        return vek + "? uz si v duchodu!"

    return 65 - vek + " let do duchodu";
}
console.log(yearsUntilRetirement(2023, 1998));
console.log(yearsUntilRetirement(2023, 1959));

// statické pole
const pole = Array(1, "2asdf", 3);
const pole2 = [1, "2asdf", 3];

console.log(pole);
console.log(pole2);

console.log(pole[pole.length - 1]);

pole[2] = "yoooo";
console.log(pole[2]);

pole.push("novy element")
pole.push("na konec")
console.log(pole[pole.length - 1]);
console.log(pole);

pole.unshift("na zacatek")
pole.unshift("na zacatek")
console.log(pole);

pole.pop(); //removes last element
pole.pop(); //removes last element

pole.shift(); //removes first element
pole.shift(); //removes first element

console.log(pole);
console.log("Index of 2asdf?: " + pole.indexOf("2asdf"));
pole.shift();
pole.shift();
console.log(pole);
console.log("Index of 2asdf?: " + pole.indexOf("2asdf"));

pole.push("element");
console.log(pole);
console.log("pole.includes(element): " + pole.includes("element"));


const person = ["Petr", "Pospíšil", 43, "IT freelance", true, ["CZ", "EN", "GER"]];

// Objekty

const person1 = {
    firstName: "Petr",
    lastName: "Pospisil",
    age: 43,
    job: "IT freelance",
    isMan: true,
    isDriver: true,
    languages: ["CZ", "EN", "GER"],
    mobileNum: "773887811",

};

console.log(person1);
console.log(person1.firstName, person1.lastName);
// můžeme přidat vlastnost do objektu
person1["email"] = "petrpospi9979@seznam.cz";
console.log(person1);

// const info = prompt("Co chces vedet o userovi?")
// console.log(person1[info]);

const employee = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1998,
    calcAgeObject: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },
};

console.log(employee.calcAgeObject());
console.log(employee.age);


let res = "";
for (let x = 1; x < 11; x++) {
    res += "Mala nasobilka cisla " + x + "\n";
    for (let y = 1; y < 11; y++) {
        res += x + " * " + y + " = " + x * y;
        res += "\n";
    }

}

console.log(res);





