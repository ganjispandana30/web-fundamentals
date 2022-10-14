const nameFormatter = (user) => `${user.firstName} ${user.lastName}`;
const companyPositionFormatter = (user) => `${user.company.title}`;
const companyNameFormatter = (user) => `${user.company.name}`;
const weightLess50 =(user) =>{if(user.weight<50){user.weight=0;}return user.weight;}
let config = [
  { key: "name", label: "Name", formatter: nameFormatter },
  { key: "age", label: "Age" },
  { key: "phone", label: "Phone"},
  { key: "bloodGroup", label: "BloodGroup" },
  { key: "name", label: "Company", formatter:companyNameFormatter},
  { key: "name", label: "Position", formatter: companyPositionFormatter},
  { key: "weight", label: "Weight", formatter: weightLess50 },

];

async function fetchData(){
    
        let data = await fetch("https://dummyjson.com/users");
        let mainContainer = document.getElementsByClassName("main-conatiner")[0];
        let result = await data.json();
        result.users.forEach((ele) => {
          mainContainer.appendChild(renderCard(ele));
        });
        
}

function renderCard(user)
{   
    let card = document.createElement("div");
    card.setAttribute("class","card");
    let img= document.createElement("img");
    img.setAttribute("class","user-image");
    img.setAttribute("src",user.image);
    let detailsContainer = document.createElement("div");
    detailsContainer.setAttribute("class", "details-container");
    let nodes = config.forEach((ele) => {
    let { key, label, formatter } = ele;
    if (formatter) {
      key = formatter(user);
    } else {
      key = user[key];
    }
    detailsContainer.appendChild(createDetailsAttribute(label, key));
    
  });
  card.appendChild(img);
  card.appendChild(detailsContainer);
  return card;
}

function createDetailsAttribute(label, value){
    let details = document.createElement("div");
    details.setAttribute("class", "details");
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "details-header");
    h4.innerText = label;
    let span = document.createElement("span");
    span.textContent = value;
    details.appendChild(h4);
    details.appendChild(span);
    return details;
}



fetchData();