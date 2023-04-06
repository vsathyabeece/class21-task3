var container = document.createElement("div");
container.className="container";
var row = document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

async function foo(){
    let url=`https://www.gov.uk/bank-holidays.json`;
    let res1=await fetch(url);
    let res2=await res1.json();
    console.log(res2);
    //console.log(res2["england-and-wales"].events);
    for(i=0;i<=40;i++){
        row.innerHTML+=`<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  
  <div class="card-body">
  <h5 class="card-title">England-and-wales(Holiday)</h5>
  <p class="card-title">Title: ${res2["england-and-wales"].events[i].title}</p>
  <p class="card-text">Date: ${res2["england-and-wales"].events[i].date}</p>
  <h5 class="card-title">Northern-ireland(Holiday)</h5>
  <p class="card-title">Title: ${res2["northern-ireland"].events[i].title}</p>
  <p class="card-text">Date: ${res2["northern-ireland"].events[i].date}</p>
  <h5 class="card-title">Scotland(Holiday)</h5>
  <p class="card-title">Title: ${res2["scotland"].events[i].title}</p>
  <p class="card-text">Date: ${res2["scotland"].events[i].date}</p>

</div>`
        
    }
    document.body.append(container);
}
foo();