const title = document.createElement("h1");

document.body.appendChild(title);

title.innerText = "Hello!";
title.style.color = "black";

const newColor = ["red", "blue", "tomato", "green", "yellow"]

const mouseOverHandler = () => {
    title.innerText = "The mouse is here";
    title.style.color = newColor[0];
}

const mouseLeaveHandler = () =>{
    title.innerText = "The mouse is gone";
    title.style.color = newColor[1];
}

const mouseOnclickHander = ()=>{
    title.innerText = "On Click";
    title.style.color = newColor[2];
}

const resizeHander = () =>{
    title.innerText = "Resize";
    title.style.color = newColor[3];
}




title.addEventListener("mouseover", mouseOverHandler);
title.addEventListener("mouseleave", mouseLeaveHandler);
title.addEventListener("click", mouseOnclickHander);
window.addEventListener("resize", resizeHander);
window.addEventListener("contextmenu", ()=>{
    title.innerText = "right Click";
    title.style.color = newColor[4];
})
