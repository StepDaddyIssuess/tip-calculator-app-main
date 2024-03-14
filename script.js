"use strict";

/*  Error functions */

function error(){
    const persons = document.getElementById("persons")
    const error = document.querySelector('.error')
    error.style.visibility = 'visible';
    persons.style.border = "2px solid red";

    reset();
}

function errorPerson(){
    const persons = document.getElementById("persons")
    const error = document.querySelector('.error')
    if(persons.value === "0"){
        error.style.visibility = 'visible';
        persons.style.border = "2px solid red";
    }
    else{
        error.style.visibility = 'hidden';
        persons.style.border = "none";
    }
}

/* Tip functions 5, 10, 15, 25, 50, custom*/

//tip %5
function tip5(){
    const bill = Number(document.getElementById("bill").value)
    const tip_amount = document.getElementById("tip-amount")
    const total = document.getElementById("total")
    const persons = Number(document.getElementById("persons").value)

    const tip_Amount_Each_Person = ((bill * 0.05) / persons).toFixed(2);
    const total_Each_Person = ((bill * 0.05 + bill) / persons).toFixed(2);

    console.log("tip_Amount_Each_Person:", tip_Amount_Each_Person);
    if(tip_Amount_Each_Person == Infinity || isNaN(tip_Amount_Each_Person) || tip_Amount_Each_Person == 0){
        error()
    }
    else{
        tip_amount.innerText = `$ ${tip_Amount_Each_Person}`;
        total.innerText = `$ ${total_Each_Person}`
    }
}

//tip 10%
function tip10(){
    const bill = Number(document.getElementById("bill").value)
    const tip_amount = document.getElementById("tip-amount")
    const total = document.getElementById("total")
    const persons = Number(document.getElementById("persons").value)

    const tip_Amount_Each_Person = ((bill * 0.10) / persons).toFixed(2);
    const total_Each_Person = ((bill * 0.10 + bill) / persons).toFixed(2);

    console.log("tip_Amount_Each_Person:", tip_Amount_Each_Person);
    if(tip_Amount_Each_Person == Infinity || isNaN(tip_Amount_Each_Person) || tip_Amount_Each_Person == 0){
        error()
    }
    else{
        tip_amount.innerText = `$ ${tip_Amount_Each_Person}`;
        total.innerText = `$ ${total_Each_Person}`
    }
}

//tip 15%
function tip15(){
    const bill = Number(document.getElementById("bill").value)
    const tip_amount = document.getElementById("tip-amount")
    const total = document.getElementById("total")
    const persons = Number(document.getElementById("persons").value)

    const tip_Amount_Each_Person = ((bill * 0.15) / persons).toFixed(2);
    const total_Each_Person = ((bill * 0.15 + bill) / persons).toFixed(2);

    console.log("tip_Amount_Each_Person:", tip_Amount_Each_Person);
    if(tip_Amount_Each_Person == Infinity || isNaN(tip_Amount_Each_Person) || tip_Amount_Each_Person == 0){
        error()
    }
    else{
        tip_amount.innerText = `$ ${tip_Amount_Each_Person}`;
        total.innerText = `$ ${total_Each_Person}`
    }
}


//tip 25%
function tip25(){
    const bill = Number(document.getElementById("bill").value)
    const tip_amount = document.getElementById("tip-amount")
    const total = document.getElementById("total")
    const persons = Number(document.getElementById("persons").value)

    const tip_Amount_Each_Person = ((bill * 0.25) / persons).toFixed(2);
    const total_Each_Person = ((bill * 0.25 + bill) / persons).toFixed(2);

    console.log("tip_Amount_Each_Person:", tip_Amount_Each_Person);
    if(tip_Amount_Each_Person == Infinity || isNaN(tip_Amount_Each_Person) || tip_Amount_Each_Person == 0){
        error()
    }
    else{
        tip_amount.innerText = `$ ${tip_Amount_Each_Person}`;
        total.innerText = `$ ${total_Each_Person}`
    }
}


//tip 50%

function tip50(){
    const bill = Number(document.getElementById("bill").value)
    const tip_amount = document.getElementById("tip-amount")
    const total = document.getElementById("total")
    const persons = Number(document.getElementById("persons").value)

    const tip_Amount_Each_Person = ((bill * 0.50) / persons).toFixed(2);
    const total_Each_Person = ((bill * 0.50 + bill) / persons).toFixed(2);

    console.log("tip_Amount_Each_Person:", tip_Amount_Each_Person);
    if(tip_Amount_Each_Person == Infinity || isNaN(tip_Amount_Each_Person) || tip_Amount_Each_Person == 0){
        error()
    }
    else{
        tip_amount.innerText = `$ ${tip_Amount_Each_Person}`;
        total.innerText = `$ ${total_Each_Person}`
    }
}

function tipCustom(){
    const bill = Number(document.getElementById("bill").value)
    const tip_amount = document.getElementById("tip-amount")
    const total = document.getElementById("total")
    const persons = Number(document.getElementById("persons").value)

    const custom = Number(document.getElementById("custom").value);

    const converted_custom = custom / 100;
    console.log(converted_custom);
    const tip_Amount_Each_Person = ((bill * converted_custom) / persons).toFixed(2);
    const total_Each_Person = ((bill * converted_custom + bill) / persons).toFixed(2);

    console.log(total_Each_Person)
    if(tip_Amount_Each_Person == Infinity || isNaN(tip_Amount_Each_Person) || tip_Amount_Each_Person == 0){
        error()
    }
    else{
        tip_amount.innerText = `$ ${tip_Amount_Each_Person}`;
        total.innerText = `$ ${total_Each_Person}`
    }
}



/* Reset function */
function reset(){
    const bill = document.getElementById("bill")
    const persons = document.getElementById("persons")
    const tip_amount = document.getElementById("tip-amount")
    const total = document.getElementById("total")
    const custom = document.getElementById("custom")


    bill.value = "0";
    persons.value = "0";
    tip_amount.innerText = "$0.00";
    total.innerText = "$0.00";
    custom.value = "0";

}


/* Removes Error when value of people != 0*/
document.getElementById("persons").addEventListener('input', errorPerson)

document.getElementById("custom").addEventListener("input", tipCustom);

