


document.write("yo");

document.write("asdfasdfa");

let jmeno = "Petr";
console.log(jmeno);

// NaN - Not a Number
// undefined - prázdná hodnota

var x = "x";
var a = undefined;

console.log(typeof x);
console.log(typeof jmeno);
console.log(typeof a);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isFinite);

// hacknisvoubudoucnost youtube

glovalJmeno = "totoJmenoJeGlobalni";
let scopeJmeno = "totoJmenoJeInScope";

const krJmeno = "Petr";
const prace = "freelancer";
const rokNar = 1998;
const aktRok = 2023;

console.log(krJmeno + " " + prace + " " + rokNar + " " + aktRok);

console.log(
    krJmeno + " "
    + prace + " "
    + rokNar + " "
    + aktRok
);

console.log(
    `Jsem ${krJmeno}, je mi ${aktRok - rokNar} a pracuju jako ${prace}`
);

// všechny input types (i number) jsou stringy
// + automaticky všechno mění na stringy
// - * / mění na integery
let s = "1";
console.log(Number.parseInt(s) + 1);
console.log(Number(s) + 1);


console.log("20" + 5 + "5"); //2055
console.log("20" - 5 + "5"); //155 = 20-5 = 15+5
console.log("20" - 5 - "5"); //10

//== loose - porovnává pouze hodnotu
//=== strict = true pouze když je hodnota i typ stejná

console.log(20 == "20"); //true, vše ostatní false
console.log(20 === "20");

console.log(30 == "20");
console.log(30 === "20");


let dny = new Array("p", "u", "s", "č", "so", "ne");
let den = dny[0];

switch (den) {
    case "p": "pondělí"; break;
}

// const favNum = Number(prompt("Zadej tve oblibene cislo"));
// console.log(typeof favNum, favNum);
// if (!Number.isNaN(favNum)) {
//     if (favNum < 10)
//         console.log("Mensi nez deset");
//     else
//         console.log("Vetsi nebo rovno deseti");

// }
// else
//     console.log("Spatnej input");


const age = Number(prompt("Kolik ti je?"));
age.isNaN ? console.log("Je NaN") : console.log("Není NaN");

const plnolety = age < 18 ? "Není plnolety" : "Je plnolety";

console.log(plnolety);





