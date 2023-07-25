# JavaScript The Definitive Guide notes

## Chapter 4. Variables

A _variable_ is a name associated with a value. Variables store and
contain values.

Varibles allow you to store and manipulate data in your programs.

Concepts to know:

- Typing
- Declaration
- Scope
- Contents
- Resolution
- Garbage collection
- Variable/property duality

### Variable Typing

Javascript is untyped. Variable types do not have to be specified and they can be changed at any time. This is because under the hood javascript converts one type to another.

### Variable Declaration

Variables are declared with keywords `var`, `let` and `const`.

```javascript
var i;
var sum;

var e, number;

var fruit = "apple",
  vegetable = "cucumber";
```

If a variable is declared without initial value, its initial value is _undefined_.

Declaring a variable with `var` makes it permanent and it cannot be delete with `delete` keyword.

### Variable Scope

The _scope_ of a variable is the region of the program in which it is defined.

A global variable has global scope; it is defined everywhere in JS code.

Variables defined within a function are defined only withing the body of the function. They are local variables and have local scope.

Function parameters also count as local variables and are defined only in the body of the function.

Within the bodt of a function, a local variable takes precedence over a global variable with the same name.

Each function has its own scope.

#### No Block Scope
