# Objects in JavaScript

- Objects as Associative Arrays
- Methods and Context
- Object Composition
- JSON

Objects are a composite data type: it combines multiple values into a single unit which
allows you to store and retrieve those values by name.

Objects are a collection of properties which have a name and a value. These values may be primitive data types or objects themselves.

Objects are a reference datatype. The variable of the object is a reference to a address in memory where the actual object is stored.

You can create an object with an object literal.

```javascript
var empty = {};

var point = {
  x: 0,
  y: 0,
};

var circle = {
  x: point.x,
  y: point.y + 1,
  radius: 2,
};

var home = {
  name: "Homer Simpson",
  age: 34,
  married: true,
  occupation: "plant operator",
  email: "homer@example.com",
};
```

You can also create an object with the `new` keyword followed by an invocation of a constructor function that initializes the properties of the object.
