const main = document.createElement("h1");
const button = document.createElement("button");
let darkMode;

document.body.appendChild(main);
document.body.appendChild(button);

main.innerText = "hi";
main.style.color = "black";

button.innerText = "Click here!";

const hoverHandler = () =>{
    main.innerText = "hover";
    main.style.color = "green";
}
const darkFn = () =>{
}

const whiteFn = () =>{
}

const modeChange = () =>{
    if(darkMode){
        darkMode = false;
        main.innerText = "white";
        main.style.color = "black";
        document.body.style.backgroundColor = "white";
    }else{
        darkMode = true;
        main.innerText = "dark";
        main.style.color = "white";
        document.body.style.backgroundColor = "black";
    }
}


main.addEventListener("mouseover",hoverHandler);
button.addEventListener("click", modeChange);