// YOUR CODE COMES HERE
// 1
function stringRepeat(number, str) {
    return Array(number).fill("").map(function() {return str}).join("");
}
console.log(stringRepeat(2, "HawaiiPizza"));
console.log(stringRepeat(4, "Island"));

// 2
function noSpace(str) {
    return str.split(" ").join("");
}
console.log(noSpace("The Da Vinci Code is one of the best selling books"));
console.log(noSpace("Food is Medicine"));

// 3
function numberToString(integer) {
    return integer.toString();
}
console.log(numberToString(55));
console.log(numberToString(216));

// 4
function booleanToString(boolean) {
    return boolean.toString();
}
console.log(booleanToString(true));
console.log(booleanToString(false));

// 5
function abbrevName(string) {
    return string.split(" ").map(function(word) {return word[0]}).join(".");
} 
console.log(abbrevName("Hawaii Pizza"));
console.log(abbrevName("Napoletana Pizza"));
console.log(abbrevName("Salami Pizza"));

// 6
function nameLength(string) {
    return string.split(" ").map(function(word) {return word + " " + word.length});
}
console.log(nameLength("hawaii pizza"));
console.log(nameLength("napoletana pizza"));
console.log(nameLength("diavolo pizza"));

// 7
function removeOrders(string) {
    return string.split(",").slice(1, -1).join(",");
}
console.log(removeOrders("1,2,3,4"));
console.log(removeOrders("1,2,3,4,5,6,7,8"));
console.log(removeOrders("1,2"));

// 8
function foodMenu(foodItems) {
    return foodItems.map(function(foodItem, index, array) {return (index + 1).toString() + ". " + foodItem});
}
console.log(foodMenu(["Hawaii Pizza", "Diablo Pizza"]));
console.log(foodMenu(["Mexicana Pizza", "Carbonara Pizza", "Prosciutto Pizza"]));






// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        {name: "stringRepeat", content: stringRepeat, type: "function"},
        {name: "noSpace", content: noSpace, type: "function"},
        {name: "numberToString", content: numberToString, type: "function"},
        {name: "booleanToString", content: booleanToString, type: "function"},
        {name: "abbrevName", content: abbrevName, type: "function"},
        {name: "nameLength", content: nameLength, type: "function"},
        {name: "removeOrders", content: removeOrders, type: "function"},
        {name: "foodMenu", content: foodMenu, type: "function"}
    ]
} catch (error) {
    toExport = {error: error.message}
}

export {toExport};