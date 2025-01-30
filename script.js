const setColor = document.querySelector("#setColor")
const randomColor = document.querySelector("#randomColor")
const resetColor = document.querySelector("#resetColor")
const div1 = document.querySelector("#div1")
const div2 = document.querySelector("#div2")


setColor.addEventListener("click", function() {
    const p = document.createElement("p")
    const inputColor = document.getElementById("inputColor").value // have it refresh inside the function
    document.getElementById("div1").style.backgroundColor = inputColor;
    p.innerText = `${inputColor}`
    div1.append(p)
    
    resetColor.addEventListener("click", function() {
        div1.style.backgroundColor = "white"
        p.remove()
    })
})

randomColor.addEventListener("click", function() {
    const p = document.createElement("p")
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    let hex1 = red.toString(16) // converts value of red into hexadecmial
    let hex2 = green.toString(16)
    let hex3 = blue.toString(16)

    let hexed = hex1+hex2+hex3;

    const ranColor = `rgb(${red}, ${green}, ${blue})`


    document.getElementById("div2").style.backgroundColor = ranColor;
    p.innerText = "#" + hexed;

    p.classList.add("color")
    
    div2.append(p)

    resetColor.addEventListener("click", function() {
        div2.style.backgroundColor = "white"
        p.remove()
    })
})



