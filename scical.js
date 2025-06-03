

// responsible para sa int and output 
const inputDiv = document.getElementById("Input"); 
const outputDiv = document.getElementById("Output");

let expression = " ";
let memory = 0;

// declare muna all buttons

const buttonMap = {
    "0-Button": "0",
    "1-Button": "1",
    "2-Button": "2",
    "3-Button": "3",
    "4-Button": "4",
    "5-Button": "5",
    "6-Button": "6",
    "7-Button": "7",
    "8-Button": "8",
    "9-Button": "9",
    "Addition-Button": "+",
    "Subtraction-Button": "-",
    "Multiplication-Button": "*",
    "Divide-Button": "/",
    "Decimals-Button": ".",
    "Power-Button": "**",
    "Percentage-Button": "/100"   
    }


// make all button work para sa operations

for (let id in buttonMap){
    const button = document.getElementById(id);
    if (button){
        button.addEventListener("click", () => {
            expression += buttonMap[id];
            inputDiv.textContent = expression;
        })
    }
}


// equal button

document.getElementById("Equal-Button").addEventListener("click", () => {
    try{
        const result = eval(expression); // dito papasok why nagdeclare sa una. matic na babasihin n solve na ng js yung operation
        outputDiv.textContent = "=  " + result;
        expression = result.toString();
    } catch {
        outputDiv.textContent = "Error" // if syntax error or di macompute ng js
        expression = " ";
    }

    
});

// for clear button

document.getElementById("AC-Button").addEventListener("click", () => {

    expression = " ";
    inputDiv.textContent = " ";
    outputDiv.textContent= " "; 

});

document.getElementById("Arrow-Button").addEventListener("click", () => {

    expression = expression.slice(0,-1);
    inputDiv.textContent = expression;

})


// for da mc, memory clear
document.getElementById("mc-Button").addEventListener("click", () => {
    memory = 0;
    outputDiv.textContent = "Memory cleared"
})

// for adding memory
document.getElementById("m+-Button").addEventListener("click", () =>{
    try{
        const value = eval(expression);
        memory += value;
        outputDiv.textContent = `Memory: ${memory}`;
    } catch{
        outputDiv.textContent = "Error";
    }
});

// Memory Subtract
document.getElementById("m--Button").addEventListener("click", () => {
    try {
        const value = eval(expression);
        memory -= value;
        outputDiv.textContent = `Memory: ${memory}`;
    } catch {
        outputDiv.textContent = "Error";
    }
});


// Memory Recall
document.getElementById("mr-Button").addEventListener("click", () => {
    expression += memory.toString();
    inputDiv.textContent = expression;
});


// for change keyboard oppp

let isAltKeyboardVisible = false;

document.getElementById("Change-Keyboard").addEventListener("click", () => {
    const mainKeyboard = document.getElementById("Main-Keyboard-Container");
    const altKeyboardContainer = document.getElementById("Alternate-Keyboard");

    if (!isAltKeyboardVisible) {
        const altKeyboardHTML = `
            <div class="Calculation-Buttons-Container" id="alt-keyboard-container">
                <button class="alt-btn"> 2nd </button>
                <button class="alt-btn"> ( </button>
                <button class="alt-btn"> ) </button>
                <button class="alt-btn"> 10^x </button>
                <button class="alt-btn"> 1/x </button>
                <button class="alt-btn"> x^2 </button>
                <button class="alt-btn"> √ </button>
                <button class="alt-btn"> x! </button>
                <button class="alt-btn"> x√y </button>
                <button class="alt-btn"> √ </button>
                <button class="alt-btn"> lg </button>
                <button class="alt-btn"> lg </button>
                <button class="alt-btn"> sin </button>
                <button class="alt-btn"> cos </button>
                <button class="alt-btn"> tan </button>
                <button class="alt-btn"> ln </button>
                <button class="alt-btn"> sinh </button>
                <button class="alt-btn"> cosh </button>
                <button class="alt-btn"> tanh </button>
                <button class="alt-btn"> e^x </button>
                <button class="alt-btn"> Rad </button>
                <button class="alt-btn"> π </button>
                <button class="alt-btn"> EE </button>
                <button class="alt-btn"> Rand </button>




            </div>
        `;
        altKeyboardContainer.innerHTML = altKeyboardHTML;
        mainKeyboard.style.display = "none";
        isAltKeyboardVisible = true;
    } else {
        altKeyboardContainer.innerHTML = "";
        mainKeyboard.style.display = "grid"; // or "flex" depending on your layout
        isAltKeyboardVisible = false;
    }
});
