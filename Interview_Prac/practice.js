// let v1 = "1.32.30"
// let v2 = "1.22.31"

// let a111 = v1.split('.')
// let a112 = v2.split('.')

// if (v1 !== v2) {
//     for (let i in a111) {
//         if (parseInt(a111[i]) > parseInt(a112[i])) {
//             console.log("v1 is newest")
//             break;
//         } else if (parseInt(a111[i]) < parseInt(a112[i])) {
//             console.log("v2 is newest")
//             break

//         }
//     }
// }


// function myFunction(a){
//     console.log(typeof(a));
// }

// myFunction(10);




// function myFunction(str){
//     return str.indexOf('is')
// }
// console.log(myFunction("praise"))


function myFunction1(a) {
    console.log(a.slice(-3));
}
myFunction1('abcdefg')
myFunction1('1234')
myFunction1('fgedcba')



const productss = [
    { name: 'T-Shirt', price: 25 },
    { name: 'Headphones', price: 125 },
    { name: 'Keyboard', price: 75 },
    { name: 'Monitor', price: 200 }
];


let x2 = productss.map((i) => i.name)
console.log(x2);

x2.shift();
console.log(x2);

document.write(`<li>${x2[0]}</li><li>${x2[1]}</li><li>${x2[2]}</li>`)




let x3 = [1, 2, 3, 4, 5, 6, 7]

console.log(x3.splice(3, 1))
console.log(x3)

console.log(delete x3[2])
console.log(x3)



function saySomething(message) {

    console.log(this.name + " is " + message);

}

var person4 = { name: "John" };

saySomething.apply(person4, ["awesome"]);







console.log("Hello");

let c1 = () => {
    console.log("How are you")
};
c1();


let c = () => {
    return new Promise((resolve, reject) => {
        console.log("3");
        console.log("4");

    })
}
c()


console.log(2+5)


