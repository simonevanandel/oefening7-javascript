/* Opdracht 0: voorbeeld */
// Verwijder het laatste item van onderstaande array en log dit in de terminal
// Log daarna de originele array om te kijken of deze waarde ook echt verwijderd is en de array nu korter is geworden
// ---- Verwachte uitkomst: 'Vanille extract' en [ 'Eieren', 'Bloem', 'Bakpoeder' ]

const cookieIngredients = ["Eieren", "Bloem", "Bakpoeder", "Vanille extract"];

const lastItem = cookieIngredients.pop();
console.log(lastItem);
console.log(cookieIngredients);

/* Opdracht 1: */
// Voeg een nieuw item toe aan onderstaande array en log de gehele array in de terminal om te kijken is het gelukt is
// ---- Verwachte uitkomst: [ 'Hawai', 'Margherita', 'Salami' ]

const pizzas = ["Hawai", "Margherita"];

pizzas.push('Salami');
console.log(pizzas);

/* Opdracht 2: */
// Verwijder het éérste item van onderstaande array en log dit in de terminal
// Log daarna de originele array om te kijken of deze waarde ook echt verwijderd is en de array nu korter is geworden
// ---- Verwachte uitkomst: 'Noten' en [ 'Eieren', 'Bloem', 'Cacao', 'Chocoladestukjes', 'Bakpoeder' ]

const brownieIngredients = ["Noten", "Eieren", "Bloem", "Cacao", "Chocoladestukjes", "Bakpoeder"];

const firstItem = brownieIngredients.shift();
console.log(firstItem);
console.log(brownieIngredients);

/* Opdracht 3: */
// Draai de volgorde van onderstaande array met namen om en log de gehele array in de terminal om te kijken is het gelukt is
// ---- Verwachte uitkomst: [ 'Piet', 'Jan', 'Henk' ]

const names = ["Henk", "Jan", "Piet"];

names.reverse();
console.log(names);


/* Opdracht 4: */
// Onderstaande array bevat een lijst met plaatsnamen. Voeg de naam "Amsterdam" toe tussen Utrecht en Maastricht.
// ---- Verwachte uitkomst: [ 'Utrecht', 'Amsterdam', 'Maastricht', 'Eindhoven' ]

const cities = ["Utrecht", "Maastricht", "Eindhoven"];

cities.splice(1,0,'Amsterdam');
console.log(cities);

// Hi, I'd like you to be my study buddy. I'm learning the coding language Java and would like to get my knowledge level from novice to intermediate to start with.
//
// Could you quiz me by creating tasks, starting easy and slowly increasing difficulty? Assume my level is novice, but re-determine my knowledge level every 3 answers and base your questions on that level.
// The task should be finishing code, declaring what a part of a code does or letting me bugfix a part of a code.
// I don't want to write the same piece of code again, which is the main reason I'm specifically asking for the above criterea.
//
// Wait for my response. If the answer is good, we proceed to the next question. If the answer is wrong, please politely explain how I could do better. Wait for my response before proceeding to the next question, please.

