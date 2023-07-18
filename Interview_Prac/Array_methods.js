

let name1 = [{name:"Keerthi", firstName:"Keerthika", lastName:"T", price:100},
{name:"Darsh", firstName:"Darshini", lastName:"M", price:300},
{name:"Bhagya", firstName:"Bhagyasri", lastName:"V", price:500},
{name:"Narmu", firstName:"Narmadha", lastName:"M", price:1000},
{name:"Audvik", firstName:"Audvik Krish", lastName:"M", price:200}]



// // for(e of a){
// //     delete e.name; 
// // }
// // console.log(a);

// for(e of a){
//     document.write(e.name)
// }


let result = name1.filter(obj => obj.price > 100).map(({name, firstName,price, ...lastName}) => lastName);

console.log("lastName",result);


// let b = a.filter((item)=>(item.firstName))
//     console.log(b)
// let aa = a.forEach((item)=>{
//     return item.firstName
// })
// console.log(aa);




// console.log(a.pop())


// //using for

//     // let b = (val.firstName,val.lastName)

//     // arr.push(b)
//     // console.log(b)

//     // a.map((e)=>console.log(e.firstName,e.lastName))




//         // const res1 = a.find((e)=> (e[1])
//         // console.log(res1)

// }

// // console.log(a);


let matrix = [[3, 4, 5], [4, 5, 6], [6, 7, 8]]
console.log(`To access matrix values: ${matrix[2][1]}`)





let arr = ['a', 'b', 'c', 'd', 'e']
console.log(`Pushing element: ${arr.push('f')}`)   // it returns the new length
console.log(`Pushing element: ${arr.push('f')}`)
console.log(arr);   // return array values


console.log(`Removing element: ${arr.pop('f')}`);   // return the elemnt which is removed
console.log(arr.pop());
console.log(arr)

console.log(arr.pop('c'));  // removes only the last element
console.log(arr);


console.log(`remove first element ${arr.shift()}`); //return the element which is removed from the first
console.log(arr);

console.log(`add element first: ${arr.unshift('k')}`);
console.log(arr);



let ar1 = [1, 5, 6, 7, 8, 9, 10, 12]
// console.log(`To delete element from the middle ${delete ar1[2]}`)
// console.log(ar1);   // It shows as empty in the middle 


console.log(`To remove from the middle: ${ar1.splice(1, 1)}`)
console.log(ar1);


console.log(`To replace the element: ${ar1.splice(1, 2, 'k', 'a')}`)
console.log(ar1);


console.log(`To pick individual values using slice: ${ar1.slice(1, 3)}`);

let ar2 = [1, 2, 3, 4, 'a', 'k', 'g']
console.log("To slice using -ve: ", ar2.slice(1, -3))



console.log("To reverse: ", ar2.reverse())

let str = ar2.join()
console.log(str)


let a3 = ['a', 'b', 2, 3]
console.log(a3.join())


let a4 = "a,b,c,d"
let a5 = 'keerthi'
console.log(a5.split(' '))



let a11 = [1, 2, 3, 4, 5]
let a12 = [6, 7, 8, 9, 10]

console.log([a11, a12])

let b = [...a11, ...a12];
console.log(b);

let c = a11.concat(a12)
console.log(c)

let a13 = [[1, 2], [3, 4], [5, 6]]
console.log("Flat", a13.flat())



// ----------------------------------------------------------------



let arr1 = [5, 8, 10, 7, 9, 11]


//replace 7,9,11 with 17,19,111

let ab = arr1.splice(3, 6, 17, 19, 111)
console.log(ab)
console.log(arr1)

// insert 100 in the beginning

console.log(arr1.unshift(100));
console.log(arr1)


//insert 200 in last but one position

let ar12 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let c11 = ar12.splice(ar12.length - 1, 0, 200)
console.log(ar12)


// Insert 0 in the middle. Use arr.length to find middle position

console.log(arr1.length) // 8

arr1.splice(4, 0, 0)
console.log(arr1)









// Filter method:


let a = [{ name: "Keerthi", firstName: "Keerthika", lastName: "T", age: 25 },
{ name: "Darsh", firstName: "Darshini", lastName: "M", age: 30 },
{ name: "Bhagya", firstName: "Bhagyasri", lastName: "V", age: 28 },
{ name: "Narmu", firstName: "Narmadha", lastName: "M", age: 24 },
{ name: "Audvik", firstName: "Audvik Krish", lastName: "M", age: 20 }]



// for(e of a){
//     delete e.name; 
// }
// console.log(a);


const a_filter = a.filter((item) => {
    return item.name.startsWith('B');
})
console.log("Filtered Method: ", a_filter)


const a_map = a.map((item) => {
    return item.name;
})
console.log(a_map);


//filtering out all numbers that are less than 100 from a numeric array.

const nums = [25, 125, 75, 200];

const a_fil = nums.filter((item) => {
    return item < 100
})
console.log(a_fil)

//    ---------------------------------------------------------------

const products = [
    { name: 'T-Shirt', price: 25 },
    { name: 'Headphones', price: 125 },
    { name: 'Keyboard', price: 75 },
    { name: 'Monitor', price: 200 }
];


const ar_map = products.map((item) => item.price).filter((i) => i > 100)
console.log(ar_map)


//    ------------------------------------------------------------------


let arrOne = [32, 45, 63, 36, 24, 11]

const arrOne1 = (num) => {
    return num * 10;
}

const a_one = arrOne.map(arrOne1)
console.log(a_one)


// ---------------------------------------------------------------------

let arrNum = [15, 39, 20, 32, 30, 45, 22]


const a_num = arrNum.filter((item) => item % 3 == 0)
console.log(a_num)

let f1 = (num) => {
    return num % 3 == 0;
}

let a_num1 = arrNum.filter(f1);
console.log(a_num1)


// -----------------------------------------------------------------------

// Interview Question

let v1="1.02.30"
 let v2="1.22.31"

 let a111=v1.split('.')
 let a112=v2.split('.')

if(v1!==v2){
  for(let i in ar1){
    if(parseInt(a111[i])>parseInt(a112[i])){
      console.log("v1 is newest")
      break;
    }else if(parseInt(a111[i])<parseInt(a112[i])){
      console.log("v2 is newest")
      break

    }
  }
}

//  ----------------------------------------------------------------

const product = [
  { name: 'T-Shirt', price: 25 },
  { name: 'Headphones', price: 125 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 200 }
];


let x1 = product.filter((i)=> i.price>100)
console.log(x1);

for(let a of x1){
  delete a.name;
}

console.log(x1)


  // -------------------------------------------------------------------


const productss = [
  { name: 'T-Shirt', price: 25 },
  { name: 'Headphones', price: 125 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 200 }
];


let x2 = productss.map((i)=> i.name)
console.log(x2);

x2.shift();
console.log(x2);

document.write(`<li>${x2[0]}</li><li>${x2[1]}</li><li>${x2[2]}</li>`)

// -----------------------------------------------------------------------


const product1 = [
  { name: 'T-Shirt', price: 25 },
  { name: 'Headphones', price: 125 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 200 }
];


let x3 = product1.map((i)=> i.name)
// console.log(x2);


const product2 = ['T-Shirt', 25 ]
console.log(Object.assign({}, product2))


const arr111 = ['a', 'b', 'c'];
const obj = arr111.reduce((acc, cur, i) => ({...acc, [i]: cur}), {});
console.log(obj);



// -------------------------------------------------------------

const ar = ['zero', 'one', 'two'];

const oj = {};

ar.forEach((element, index) => {
  oj[`key${index}`] = element;
});

// 👇️️ {'key0': 'zero', 'key1': 'one', 'key2': 'two'}
console.log(oj);



// -------------------------------------------------------------


function myFunction(a){
    console.log(a.splice(3,3))
}
myFunction([1,2,3,4])
myFunction([5,4,3,2,1,0])
myFunction([99,1,1])



function myFunction(a, n){
  console.log(a.slice(-n))
}
myFunction([1, 2, 3, 4, 5], 2)
myFunction([1, 2, 3], 6)


const arr11 = [1, 2, 3, 4, 5];
const val = 3;
const filteredArr = arr11.filter(item => item !== val);

console.log(filteredArr)



let s = [1,2,10,13,15,100,120,150]
console.log(s.sort((a,b)=>b-a))    // descending



let s1 = [1,2,10,13,15,100,120,150]
console.log(s1.sort((a,b)=>a+b))    // ascending
console.log(s1.sort())   // To order the elements we use above method



function myFunction( arr ) {
  console.log(new Set(arr).size === 1)
}

myFunction(['test','test','test'])
myFunction([1,1,2,2,3])
myFunction(['test','false','false','true'])


function arr_every(arr){
  console.log(arr.every(val => val === arr[2]))
  
}
arr_every(['test','test','test'])
arr_every([1,1,2,2,3])
arr_every(['test','false','false','true'])


function myFunction(arr) {
  console.log(arr.sort((x, y) => x.b - y.b))
}
myFunction([{a:2,b:10},{a:5,b:4}])
myFunction([{a:1,b:2},{a:5,b:4}])



function myFunction(a, b) {
   console.log([...new Set([...a, ...b])].sort((x, y) => x - y))
}
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])