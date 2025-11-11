// Object Enhancements
// Object Shorthand
function makePerson(first, last, age) {
  return { first: first, last: last, age: age, isAlive: true };
}

makePerson("jim", "lenon", 43);

// shorthand
function makePerson2(first, last, age) {
  return { first, last, age, isAlive: true };
}

//Object Methods
// method is a function thats stored as a property in an object

const mathStuff = {
  x: 200,
  add: function (a, b) {
    return a + b;
  },

  square: function (a) {
    return a * a;
  },
};

// vs
const mathStuff2 = {
  x: 200,
  add(a, b) {
    return a + b;
  },

  square(a) {
    return a * a;
  },
};

// Methods shorthand
let instructor = {
  sayHello: function () {
    return "Hello!";
  },
};
// vs
let instructor2 = {
  sayHello() {
    return "Hello!";
  },
};

// compresses sayHello and function: sayHello()
// do NOT use => functions
// simply error thrown

// Coputed Property Names
// key name is DYNAMIC

// plan: make hex code and english color name be search reversible
const color = {
  periwinkle: "9c88f",
  "9c88fL": "periwinkle",
};

// doesn't work dynamically
function makeColor(name, hex) {
  return {
    name: hex,
    hex: name,
  };
}

// old way
function makeColor2(name, hex) {
  const color = {};
  color[name] = hex;
  color[hex] = name;
  return color;
}

// new way
function makeColor3(name, hex) {
  return {
    [name]: hex,
    [hex]: name,
  };
}
