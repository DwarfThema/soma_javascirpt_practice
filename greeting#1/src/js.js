const greeting_none = document.createElement("h1");
const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button")

const BUTTON_CLASSNAME = "buttonClass";
const INPUT_CLASSNAME = "inputClass";
const GREeTING_NONE_CLASSNAME = "noneClass";
const FLEX = "flex";

const USER_key = "username";

document.body.appendChild(greeting_none);
greeting_none.id = "greeting_id"

const getName = localStorage.getItem(USER_key);

if(getName === null){
    greeting_none.innerText = "Hello!"
}else{
    greeting_none.innerText = getName
}

document.body.appendChild(form);
form.id = "form"
form.appendChild(input);
form.appendChild(button);
input.classList.add(INPUT_CLASSNAME);


button.innerText = "click";
input.placeholder = "Write Name";
input.required = true;

const submitName = (event) =>{
    event.preventDefault()
    const nameValue = input.value
    if(input.value !== null){
        localStorage.setItem(USER_key, nameValue)
        greeting_none.innerText = nameValue
    }else{
        null
    }
}

form.addEventListener("submit", submitName);