//  Stack memory used in primitive data type and Heap memory used in{non primitive data type}
// in stack if declare any variable you got the copy of that and in heap if u change any thing it will change in original value

let myYoytubename = "shneetu9878@gmail"
let anothername = myYoutubename 
anothername="chai aur codenode"
console.log(anothername);

let user1 = {
     email:"shneetu9878@gmail.com"

}
let user2 = user1
 user2.email="google@gmail.com"

 console.log(user1.email);
 console.log(user2.email);
 


