
// clone an array using object.assign ,  JSON.parse and JSON.stringify and spreadoperator 


function add(a, b) {
  console.log(a + b);
}
function mul(a, b) {
  console.log(a * b);
}
add(3, 5, mul(2, 3))






let stocks = {
  F1: ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE"],
  F2: ["Water", "Ice"],
  F3: ["cone", "cup", "stick"],
  F4: ["chocolate", "m&m's"]
};


// function order(call_prod){
//   setTimeout(()=>{
//       console.log("Order Starts");
//   },2000)
//   call_prod();
// }

// function production(){
//   setTimeout(()=>{
//     console.log("Order received so work starts")

//     setTimeout(()=>{
//       console.log("Production work started")

//       setTimeout(()=>{
//         console.log(`${stocks.F1[3]} has been selected`)

//         setTimeout(()=>{
//           console.log(`${stocks.F2[0]} and ${[stocks.F2[1]]} are added`)

//           setTimeout(()=>{
//             console.log(`${stocks.F3[1]} was selected`)

//             setTimeout(()=>{
//               console.log(`Icecream is ready to serve`)
//             },1000)
//           },1000)      
//         },2000)
//       },1000)
//     },1000)
//   },2000)
// }

// order(production)

let stocks1 = {
  F1: ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE"],
  F2: ["Water", "Ice"],
  F3: ["cone", "cup", "stick"],
  F4: ["chocolate", "m&m's"]
};


let is_shop_open = true;

let order1 = (time, work) => {

  return new Promise((resolve, reject) => {

    if (is_shop_open) {
      setTimeout(() => {
        resolve(work())
      }, time)
    } else {
      reject(console.log("Sorry Shop is closed"))
    }
  })
}
order1(2000, () => console.log(`${stocks1.F1[0]} was selected`))

  .then(() => {
    return order1(0, () => console.log("Production Started"))
  })

  .then(() => {
    return order1(1000, () => console.log(`${stocks1.F2[0]} and ${stocks1.F2[1]} was added`))
  })

  .then(() => {
    return order1(2000, () => console.log(`${stocks1.F3[0]} was selected`))
  })

  .then(() => {
    return order1(1000, () => console.log(`${stocks1.F4[1]} toppings were also added`))
  })

  .then(() => {
    console.log("IceCream is ready to serve");
  })

  .catch(() => {
    console.log("Invalid");
  })
  .finally(() => {
    console.log("Timeup... Shop is closed")

  })



let stocks2 = {
  F1: ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE"],
  F2: ["Water", "Ice"],
  F3: ["cone", "cup", "stick"],
  F4: ["chocolate", "m&m's"]
};

is_shop_open = true;


function time(ms) {
  () => {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        resolve(resolve, ms)
      }
      else {
        reject(console.log("Shop_closed_GET OUT"))
      }
    })
  }
}

async function kitchen(){

    try{

      console.log("Order received")

      console.log("Preparation started")

      await time(1000)
      console.log("Choose your toppings")

          }
    catch{()=>{
      console.log("Shop closed")
    }}
    finally{
      console.log("Time Up Sorry")
    }


}





