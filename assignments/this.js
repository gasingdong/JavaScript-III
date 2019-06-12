/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, "this" represents the window (browser) or console (node) global object.
* 2. When calling a function through an object, "this" refers to the object preceding the dot.
* 3. When using a constructor function, "this" represents the object being constructed.
* 4. "this" can be explicitly defined by calling the call or apply method to directly point to the object.
*
* write out a code example of each explanation above
*/

//Function for logging and labeling outputs
const labeledLog = function(label, output) {
    console.log('');
    console.log(`${label}:`);
    console.log(output);
}

// Principle 1

// code example for Window Binding

global.age = 5;
function getGlobalObjectAge() {
    return this.age;
}
labeledLog('Principle 1 (Window Binding)', getGlobalObjectAge());

// Principle 2

// code example for Implicit Binding

const person = {
    'name': 'Brandon',
    'wave': function() {
        return `${this.name} is waving to you!`;
    },
}
labeledLog('Principle 2 (Implicit Binding)', person.wave());

// Principle 3

// code example for New Binding

function Superhero(name) {
    this.name = name;
    this.superpower = 'Everything';
    this.greeting = function() {
        return `Hello, my name is ${this.name} and my superpower is ${this.superpower}`;
    };
}
const superman = new Superhero("Clark Kent");
const shazam = new Superhero("Billy Batson");
labeledLog('Principle 3 (New Binding)', superman.greeting() + '\n' + shazam.greeting());

// Principle 4

// code example for Explicit Binding

labeledLog('Principle 4 (Explicit Binding)', shazam.greeting.call(superman));