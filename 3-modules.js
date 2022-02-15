//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-names').default;
const sayHi = require('./5-utils').default;
require('./7-mind-grenade')
console.log(names);

sayHi('susan');
sayHi(john);
sayHi(names.peter)