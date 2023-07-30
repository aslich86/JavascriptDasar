let person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello, my name is " + this.name + ".";
    }
};

console.log(person.name); // Output: "John"
console.log(person.greet()); // Output: "Hello, my name is John."
