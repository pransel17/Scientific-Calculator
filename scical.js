

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
                <button class="Calculation-Blue-Buttons-altkeyboard" id="Arrow-Button"> del </button>
                <button class="alt-btn"> ( </button>
                <button class="alt-btn"> ) </button>
                <button class="alt-btn"> 10^x </button>
                <button class="alt-btn"> 1/x </button>
                <button class="alt-btn"> x^2 </button>
                <button class="alt-btn"> x^3 </button>
                <button class="alt-btn"> y^x </button>
                <button class="alt-btn"> x! </button>
                <button class="alt-btn"> x√y </button>
                <button class="alt-btn" id="squareroot-botton"> √ </button>
                <button class="alt-btn"> lg </button>
                <button class="Calculation-Blue-Buttons-altkeyboard" id="sin-botton"> sin </button>
                <button class="Calculation-Blue-Buttons-altkeyboard" id="cos-botton"> cos </button>
                <button class="Calculation-Blue-Buttons-altkeyboard" id="tan-botton"> tan </button>
                <button class="Calculation-Blue-Buttons-altkeyboard" class="ln-botton"> ln </button>
                <button class="Calculation-Blue-Buttons-altkeyboard" id="sinh-botton"> sinh </button>
                <button class="Calculation-Blue-Buttons-altkeyboard" id="cosh-botton"> cosh </button>
                <button class="Calculation-Blue-Buttons-altkeyboard" id="tanh-botton"> tanh </button>
                <button class="alt-btn"> e^x </button>
                <button  class="Calculation-Blue-Buttons-altkeyboard" id="rad-botton"> Rad </button>
                <button class="alt-btn"> π </button>
                <button class="alt-btn"> EE </button>
                <button class="alt-btn"> Rand </button>
                




            </div>
        `;
        altKeyboardContainer.innerHTML = altKeyboardHTML;
        activateAltButtons();
        mainKeyboard.style.display = "none";
        isAltKeyboardVisible = true;
    } else {
        altKeyboardContainer.innerHTML = "";
        mainKeyboard.style.display = "grid"; 
        isAltKeyboardVisible = false;
    }
});

// functionability ng alternative keyboardd
function activateAltButtons() {
    document.querySelectorAll('.alt-btn, .Calculation-Blue-Buttons-altkeyboard').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent.trim();

            switch (value) {

                case 'del':
                expression = expression.slice(0, -1); 
                break;

                case '(': case ')': case '.':
                    expression += value;
                    break;

                case '10^x':
                    expression += "10**";
                    break;

                case '1/x':
                    expression = `1/(${expression})`;
                    break;

                case 'x^2':
                    expression += "**2";
                    break;

                case 'x^3':
                    expression += "**3";
                    break;

                case 'y^x':
                    expression += "**"; 
                    break;

                case 'x!':
                    expression = `factorial(${expression})`;
                    break;

                case 'x√y':
                    expression += "**(1/";
                    break;

                case '√':
                    expression += "Math.sqrt(";
                    break;

                case 'lg':
                    expression += "Math.log10(";
                    break;

                case 'ln':
                    expression += "Math.log(";
                    break;

                case 'sin':
                    expression += "Math.sin(";
                    break;

                case 'cos':
                    expression += "Math.cos(";
                    break;

                case 'tan':
                    expression += "Math.tan(";
                    break;

                case 'sinh':
                    expression += "Math.sinh(";
                    break;

                case 'cosh':
                    expression += "Math.cosh(";
                    break;

                case 'tanh':
                    expression += "Math.tanh(";
                    break;

                case 'e^x':
                    expression += "Math.exp(";
                    break;

                case 'π':
                    expression += "Math.PI";
                    break;

                case 'Rand':
                    expression += Math.random().toString();
                    break;

                case 'EE':
                    expression += "e"; 
                    break;

                default:
                    break;
            }

            inputDiv.textContent = expression;
        });
    });
}
