// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))
// //async
// try{
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await res.json();
//     console.log(data)
// }
// catch{

// }



// console.log(1)
// setTimeout(() =>{
//     console.log(3)
// }, 3000)

// console.log(3)

const dreamGirl = [
  {
    sokina: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: "https://www.facebook.com/",
            followers: "12545",
            status: "single",
            friendsList: [{ name: "rofik" }, undefined],
          },
        },
        { instagram: "https://www.instagram.com/" },
      ],
    },
  },
];
// console.log(dreamGirl[0].sokina.contactInfo[1].instagram);
const phones = [
  { name: "sony", price: 500 },
  { name: "apple", price: 700 },
  { name: "sony", price: 700 },
  {name: "hello", price: 500},
];
phones.filter(phone =>{
    if(phone.price != 500){
        console.log(phone)
    }
    else{
        console.log('nothing');
    }
})