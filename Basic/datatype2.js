// --------primitive type-----

//  7 category:string,number,boolean,null,undefined,symbol,bigint

// ------reference data type(non pritmitive)-----
// Array,object,function

const id = Symbol('123')
const anotherId= Symbol('123')

// console.log(id==anotherId); false not equal
// console.table(typeof[id,anotherId]) object


// const heros =["shaktiman","naagraj","doga"] array example

let myObj = {
       name:"neetu",
       age: 23,
}
// any thing between the curly bracket is objects

const myFunction = function(){
         console.log("Hello world");
         
}
// fuction example