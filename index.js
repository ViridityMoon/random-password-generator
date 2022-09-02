const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const noSymbolOrNumberCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let firstPasswordEl = document.getElementById("first-password-el")
let secondPasswordEl = document.getElementById("second-password-el")
let generateButton = document.getElementById("generate-btn")
let passwordSpaceEl = document.querySelectorAll(".password-space")
let numbersAndSymbols = document.getElementById("numbers-and-symbols")


function getRandomPassword() {
    let randomPassword = ""
    let lengthOfPassword = parseInt(document.getElementById("length").value)
    if (numbersAndSymbols.checked === false){
        for(let i = 0; i < lengthOfPassword; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        randomPassword += characters[randomIndex]
        }
    } else {
        for(let i = 0; i < lengthOfPassword; i++){
        let randomIndex = Math.floor(Math.random() * noSymbolOrNumberCharacters.length)
        randomPassword += noSymbolOrNumberCharacters[randomIndex]
        }
    }
    return randomPassword
}

function copyText(a) {
    // a.select()
    navigator.clipboard.writeText(a.textContent).then(function() {
        console.log("success")
    }, function(err) {
        console.log(err.message)
    })
    console.log(a.textContent)
}

generateButton.addEventListener("click", function() {
    firstPasswordEl.textContent = getRandomPassword()
    secondPasswordEl.textContent = getRandomPassword()
    passwordSpaceEl.forEach(space => {
        space.style.padding = "9.5px 20px"
    })
})

firstPasswordEl.addEventListener("click", function() {
    copyText(firstPasswordEl)
})

secondPasswordEl.addEventListener("click", function() {
    copyText(secondPasswordEl)
})

numbersAndSymbols.addEventListener("click", function() {
    
})