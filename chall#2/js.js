const main = document.createElement("h1");
const button = document.createElement("button");
let darkMode = false

document.body.appendChild(main);
document.body.appendChild(button);

main.innerText ="hi";
main.style.color = "blue";

button.innerText = "mode Change";
button.style.backgroundColor = "yellow"

main.addEventListener("mouseover",()=>{main.style.color = "green"; main.innerText="over";});
main.addEventListener("click", ()=>{main.style.color = "red"; main.innerText="click";});

button.addEventListener("click", () => {
    if (!darkMode){
        darkMode = true;
        document.body.style.backgroundColor = "black"
        main.style.color = "white"
    }else{
        darkMode = false;
        document.body.style.backgroundColor = "white"
        main.style.color ="blue";
    }
})