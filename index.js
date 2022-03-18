const people = [
    {name: "Andrea", born: 2000, age: 21, eyes: "hazelnut", isBeautiful: true},
    {name: "Ivan", born: 1995, age: 26, eyes: "hazelnut", isBeautiful: true}, 
    {name: "Antonio", born: 1966, age: 57, eyes: "green", isBeautiful: false},
    {name: "Pilar", born: 1967, age: 56, eyes: "coke", isBeautiful: false},
    {name: "Chispa", born: 2016, age: 6, eyes: "brown", isBeautiful: false}
];

const oneLegalAge = people.some(person => person.age >= 18);
console.log(oneLegalAge);

const oneOlder21 = people.some(person => new Date().getFullYear() - person.born >= 21);
console.log(oneOlder21);



const allLegalAge = people.every(person => person.age >= 18);
console.log(allLegalAge);

const allOlder21 = people.every(person => new Date().getFullYear() - person.born >= 21);
console.log(allOlder21);



const greenEyes = people.find(person => person.eyes === "green");
console.log(greenEyes);

const age57 = people.find(person => person.age === 57);
console.log(age57);



const indexOfCokeEyes = people.findIndex(person => person.eyes === "coke");
console.log (indexOfCokeEyes);

const indexOfAge56 = people.findIndex(person => person.age === 56);
console.log(indexOfAge56);

// people.splice(indexOfAge56, 1);
// console.table(people);

const newPeople = [...people.slice(0, indexOfAge56), ...people.slice(indexOfAge56 + 1)];
console.table(people);
console.table(newPeople);