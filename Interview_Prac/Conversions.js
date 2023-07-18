
// Conversion of array to objects


//First Method
const a = [1,2,3,4,5]
obj1 = {}
a.forEach((element,index)=>{
    obj1[`${index}`] = element
})
console.log("Using forEach:",obj1);


//Second Method
console.log("Using Object.Assign: ",Object.assign({},a))


//Third Method
console.log("Using Spread",{...a})


//Fourth Method
let b = a.reduce((acc,cur,i)=>({...acc, [i]:cur}),{})
console.log("Using reduce:", b)



// Fifth Method

let ar = [['name','keerthi'], ['Age',28]]
console.log(Object.fromEntries(ar))


//  --------------------------------------------------------------------------------

// Conversion of Objects to Array


// First Method
let a1 = {name:'AAA', age:20, course:'CS'}
console.log("Using Object_values: ", Object.values(a1))  // returns the property values



//Second Method
console.log("Using Object keys: ", Object.keys(a1))   // returns the property name


// Third Method
let arr11 = Object.entries(a1)
console.log("Using Object Entries: ",Object.entries(arr11))


const obj = {a: 1, b: 2, c: 3};
const arr = Object.entries(obj);
console.log(arr); // [["a", 1], ["b", 2], ["c", 3]]