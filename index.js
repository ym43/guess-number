// html
document.title = "Guess Letter Game"
let body = document.querySelector("body")
let button = document.createElement("button")
document.body.append(button)

// Css
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.flexDirection = "column"
body.style.height = "100vh"

button.style.padding = "20px 30px 20px 30px"
button.style.border = "none"
button.style.borderRadius = "5px"
button.style.backgroundColor = "transparent"
button.style.fontSize = "40px"
button.style.fontWeight = "900"
button.style.fontFamily = "cursive"
button.style.color = "Blue"

// javascript
button.textContent = "Guess"
button.onclick = () => {
    let attempts = 10;
    while (attempts > 0){
        attempts--;
        let number = Math.floor(Math.random() * 100) +1
        let window = prompt("Enter the Guess from 1 to 100")
        if(window == number){
            button.innerHTML = "you won by guess the number".toUpperCase() + number;
            setTimeout(() => {location.reload()},2500)
        }
        if(window != number && attempts < 1){
            button.innerHTML = "you lose,the number is: ".toUpperCase() + number;
            setTimeout(() => {location.reload()},2500)
        }
    }
}