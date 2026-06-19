const jStore = {location : "J_home" , products : "book" , rent : "30000$" , staff : "J_Kasamsun" , review : "5/5"};
const antAndBook = {location : "Ant_home" , products : "book" , rent : "20000$" , staff : "antKrerkchai" , review : "4/5"};
const Se_edBook = {location : "FasionIsland" , products : "book" , rent : "50000$" , staff : "Operator" , review : "5/5"};

console.log(jStore);
console.log(antAndBook);
console.log(Se_edBook);
console.log(jStore.location);
console.log(antAndBook.products);
console.log(Se_edBook.rent);
console.log(jStore.staff);
console.log(antAndBook.review);
console.log(Se_edBook.review);
// (Template Literals)
console.log(`สาขา: ${jStore.location} สินค้า: ${jStore.products}`);
// (Dot Notation)
console.log(jStore.location, jStore.products);
// (Square Bracket)
console.log(jStore["location"], jStore["products"]);
// (Object Destructuring):
console.log({ location: jStore.location, products: jStore.products });
// (Shorthand Property):
console.log({ location: jStore.location, products: jStore.products });