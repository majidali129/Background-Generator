let btn = document.querySelector(".btn");
btn.addEventListener("click",changeColor);
let body = document.body;

function changeColor(){
    let collection = "123456789ABCDEF";
    let resultant = "#";
    for(let i=0; i<6; i++){
        resultant += collection[Math.floor(Math.random()*15)]
    }
    // document.querySelector(".container").style.backgroundColor = resultant;
    body.style.backgroundColor = resultant;
    console.log(resultant)
}

