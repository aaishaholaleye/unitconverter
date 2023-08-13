/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let basicnum = document.getElementById("numtoconvert")
let convertbtn = document.getElementById("convert-btn")

let lengthcalcs = document.getElementById("lengthcalc")
let volumecalcs = document.getElementById("volumecalc")
let masscalcs = document.getElementById("masscalc")


function lengthcalc(){

    let metertofeet = (basicnum * 3.281).toFixed(3)
    let feettometer = (basicnum / 3.281).toFixed(3)
    lengthcalcs.innerHTML = `${basicnum} meters = ${metertofeet} feet | ${basicnum} feet = ${feettometer} meters `
}

function volumecalc(){

    let litertogallon = (basicnum * 0.264).toFixed(3)
    let gallontoliter = (basicnum / 0.264).toFixed(3)
    volumecalcs.innerHTML = `${basicnum} liters = ${litertogallon} gallons | ${basicnum} gallons = ${gallontoliter} liters `

}

function masscalc(){
    
    let kilostopounds = (basicnum * 2.204).toFixed(3)
    let poundstokilos = (basicnum / 2.204).toFixed(3)
    masscalcs.innerHTML = `${basicnum} kilos = ${kilostopounds} pounds | ${basicnum} pounds = ${poundstokilos} kilos `

}

convertbtn.addEventListener("click", function(){
    basicnum = parseInt(basicnum.value);

    lengthcalc();
    
    volumecalc();

    masscalc()
    
    
    

})




