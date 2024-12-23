// let operations = document.querySelectorAll(".operations > button");
let result = document.querySelector("span");
let buttons = document.querySelectorAll(".button");
let btnAC = document.getElementById("AC");
let btnEqual = document.getElementById("equal");
let op = "";

btnAC.addEventListener("click", () =>{
    result.textContent = "0";
    op = "";
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        op += button.value;
        result.textContent = op;
        console.log(`Buttons: ${op}`);
    });
});

btnEqual.addEventListener("click", () => {
        result.textContent = eval(op).toLocaleString('pt-BR');
        op = result.textContent;
        console.log(`Equal: ${op}`);
});

// for(let operation of operations){
//     operation.addEventListener("click", () => {
//         op += operation.value;
//         result.textContent = op;
//     })
// };