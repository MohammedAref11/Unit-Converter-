let inputEl = document.getElementById("user-input");

let kgBtn = document.getElementById("kg-btn"); 

let lbsBtn = document.getElementById("lbs-btn");

let resultEl = document.getElementById("result-el"); 

function kgButton() { 
    let convertToNumber = Number(inputEl.value); 
    let result = convertToNumber / 2.205; 
    resultEl.textContent = "Result: " +  result.toFixed(2) + " Kg"; 
}; 

function lbsButton() { 
    let convertToNumber = Number(inputEl.value); 
    let result = convertToNumber * 2.205; 
    resultEl.textContent = "Result: " +  result.toFixed(2) + " Lbs"; 
}; 
