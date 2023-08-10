/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let basicnum = document.getElementById("numtoconvert")
let convertbtn = document.getElementById("convert-btn")

let lengthcalc = document.getElementById("lengthcalc")
let volumecalc = document.getElementById("volumecalc")
let masscalc = document.getElementById("masscalc")


convertbtn.addEventListener("click", function(){
    basicnum = parseInt(basicnum.value)

    let metertofeet = basicnum * 3.281
    let feettometer = basicnum / 3.281
    lengthcalc.innerHTML = `${basicnum} meters = ${metertofeet.toFixed(3)} feet | ${basicnum} feet = ${feettometer.toFixed(3)} meters `
    
    let litertogallon = basicnum * 0.264
    let gallontoliter = basicnum / 0.264
    volumecalc.innerHTML = `${basicnum} liters = ${litertogallon.toFixed(3)} gallons | ${basicnum} gallons = ${gallontoliter.toFixed(3)} liters `
    
    let kilostopounds = basicnum * 2.204
    let poundstokilos = basicnum / 2.204
    masscalc.innerHTML = `${basicnum} kilos = ${kilostopounds.toFixed(3)} pounds | ${basicnum} pounds = ${poundstokilos.toFixed(3)} kilos `
    

})

