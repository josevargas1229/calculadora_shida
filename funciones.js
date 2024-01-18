import { suma,resta,mult,div } from "./operaciones.js";
var display=document.getElementById('display');
var memory=document.getElementById('memory');
var num1;
var num2;
var operacion;
let displayValue='';



const mostrarValor = (value) => {
    if (value === '0' && displayValue === '0') {
        return;
    }
    if (value === '.' && displayValue.includes('.')) {
        return;
    }
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }

    display.value = displayValue;
};


const limpiar=()=> {
    displayValue = '';
    display.value='0';
}
const limpiarTodo=()=>{
    displayValue = '';
    display.value='0';
    memory.value='';
}


const btnSuma=()=>{
    num1=parseFloat(display.value);
    operacion='suma';
    memory.value=num1+'+';
    limpiar();
}
const btnResta=()=>{
    num1=parseFloat(display.value);
    operacion='resta';
    memory.value=num1+'-';
    limpiar();
}
const btnMult=()=>{
    num1=parseFloat(display.value);
    operacion='mult';
    memory.value=num1+'×';
    limpiar();
}
const btnDiv=()=>{
    num1=parseFloat(display.value);
    operacion='div';
    memory.value=num1+'÷';
    limpiar();
}

const retroceder=()=> {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue || '0';
    
}
const porcentaje=()=>display.value = parseFloat(display.value)/100;

const btnIgual=()=>{
    num2=parseFloat(display.value);
    memory.value+=num2+'=';
    switch(operacion){
        case "suma":
            display.value=suma(num1,num2);
            break;
        case "resta":
            display.value=resta(num1,num2);
            break;
        case "mult":
            display.value=mult(num1,num2);
            break;
        case "div":
            display.value=div(num1,num2);
            break;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    display.value='0';
    buttons.forEach(button => {
        button.addEventListener('mouseover',()=>{
            (button.className==='num'||button.classList.contains('operacion'))?button.classList.add('otro-select'):button.classList.add('igual-select');
        });
        button.addEventListener('mouseleave',()=>{
            (button.classList.contains('otro-select'))?button.classList.remove('otro-select'):button.classList.remove('igual-select');
        });
        button.addEventListener('click',()=>{
            if(button.classList.contains("num")){
                mostrarValor(button.textContent);
            } else if(button.classList.contains("igual")){
                btnIgual();
            } else{
                if(button.classList.contains("suma")){
                    btnSuma();
                } else if(button.classList.contains("resta")){
                    btnResta();
                } else if(button.classList.contains("mult")){
                    btnMult();
                } else if(button.classList.contains("div")){
                    btnDiv();
                } else if(button.classList.contains("limpiar")){
                    limpiarTodo();
                } else if(button.classList.contains("porcentaje")){
                    porcentaje();
                } else{
                    retroceder();
                }
            }
        });
    });
});