
"use strict";

/*  Error functions */

function error(){
    const bill = document.getElementById("bill")
    const persons = document.getElementById("persons")
    const error = document.querySelector('.error')
    if (persons.value == ''){
        error.style.visibility = 'visible';
        persons.style.border = "2px solid red";
        persons.addEventListener("input", () => {
            const custom = document.getElementById("custom")
            custom.value = 0;
        })
    } 
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


function tip_Amount_Each(bill, tip, persons){
        return ((bill * Number(tip / 100)) / persons).toFixed(2);

}

function total_Amount(bill , tip, persons){
        return ((bill * Number(tip / 100) + bill) / persons).toFixed(2);
}

/* Tip function*/

function handleTip(){
    const btns = document.querySelectorAll(".tip-btn");
    for (const btn of btns){
        btn.addEventListener("click", function(){

            // Variables
            const bill = Number(document.getElementById("bill").value)
            const tip_amount = document.getElementById("tip-amount")
            const total = document.getElementById("total")
            const persons = Number(document.getElementById("persons").value)

            //Math to get Tip Amount /person and total/person
            const tip_Amount_Each_Person = tip_Amount_Each(bill, this.value, persons);
            const total_Each_Person = total_Amount(bill, this.value, persons);


            //Error handling
            console.log("tip_Amount_Each_Person:", tip_Amount_Each_Person);
            if(tip_Amount_Each_Person == Infinity || isNaN(tip_Amount_Each_Person) || tip_Amount_Each_Person == 0){
                error()
            }
            else{
                tip_amount.innerText = `$ ${tip_Amount_Each_Person}`;
                total.innerText = `$ ${total_Each_Person}`
            }
        })
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
document.getElementById("persons").addEventListener('input', errorPerson);

document.getElementById("custom").addEventListener("input", tipCustom)

handleTip();
