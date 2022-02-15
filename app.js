// const amount = 9;

// if(amount < 10){
//     console.log("Small Number");
// }
// else{
//     console.log("Large Number");
// }

// console.log(__dirname)
// setInterval(() =>{
//     console.log("Hello World!");
// }, 1000);

//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
// const names = require('./4-names').default;
// const sayHi = require('./5-utils').default;
// require('./7-mind-grenade')
// // console.log(names);

// // sayHi('susan');
// // sayHi(john);
// // sayHi(names.peter);
/*const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);*/

// const path = require('path');


// console.log(path.sep);
// console.log();

// const absolute = path.resolve(__dirname, '')

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Welcome to our home page');
//     }
//     if(req.url === '/about'){
//         res.end('Here is short History of');
//     }
//     res.end(`
//         <h1>Oops!</h1>
//         <p>Can't find your page</p>
//         <a href="/">back home</a>
//     `)
// })

// server.listen(5000);

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);