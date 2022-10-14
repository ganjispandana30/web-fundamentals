// How to fetch Data from server.

function fetchDataFromServer() {
//  fetch("https://jsonplaceholder.typicode.com/todos")
 //   .then((response) => response.json())
 //   .then((json) => printData(json));
 fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);
}

function printData(data) {
 // console.log(data);
  //destructuring
//  let{ limit, skip, total, users }= data;
 // console.log(users); 
 // let ele = document.getElementById("code");
  //let tempData = data.filter((a) => a.id < 50);
  //ele.innerHTML = JSON.stringify(tempData, null, 4);
  //let names=users.filter((a)=>a.weight<50).map((ele)=>{ ele.firstName='${ele.firstName) ${ele.lastName}'});
  let names=users.filter((a)=>a.weight<50).map((ele)=> {ele.firstName+ele.lastName});
  console.log(names);

//  let names=users.forEach((ele)=> {console.log(ele.firstName);
//});
 
 //let age = users.reduce((a,b)=>{a+=b.age;return a;},1000);  // 1000 is initial value of a
//console.log(age);
//let name=users.forEach((a)=>{a=a.firstName+a.lastName;
 //           return a;})
 let name=users.map((ele)=>{ return {name: '$(ele.firstName) $(ele.lastName)',age: ele.age}
}).filter((ele)=>ele.age<50).reduce((a,b)=>{a.age+=b.age;
a.index++;return a;},{age:0,index: 0});
console.log(res.age/res.index);
}
fetchDataFromServer();
