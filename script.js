let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
    createFrame(32);

    document.querySelector("body").addEventListener("click", function (e) {
        if (e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if (click) {
                draw.innerHTML = "Becomes the artist you were meant to be!"
            }
            else {
                draw.innerHTML = "Click somewhere to becomes the artist you were meant to be"
            }
        }
    });

    let btn_selectSize = document.querySelector("#selectSize");
    btn_selectSize.addEventListener("click", function () {
        let size = getSize();
        createFrame(size);
    })
})

function createFrame(size) {
    let frame = document.querySelector(".frame")

    frame.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    frame.style.gridTemplateRows = `repeat(${size}, 1fr)`;;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        frame.insertAdjacentElement("beforeend", div);
    }

}

function getSize() {
    let input = prompt("What dimension would you like the board to be?");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "Please provide a number between 10 and 100";
    }
    else if (input < 10 || input > 100) {
        message.innerHTML = "Number must be between 10 and 100 "
    } else {
        message.innerHTML = "Lets' get going"
    } return input;
}

function colorDiv() {
    if (click) {
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
            this.style.backgroundColor = 'black';
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function reset() {
    let divs = document.querySelectorAll("div");
    divs.forEach(div => div.style.backgroundColor = 'white');

}