const body = document.querySelector("body");
const container = document.querySelector(".container");

const button = document.createElement("button");
button.textContent = "Create new grid";
body.insertBefore(button, container);

button.addEventListener("click", function() {
    const userInput = prompt("Enter a number for grid pair, Max: 100");
    let gridPair = 0;
    if(userInput > 100) {
        alert("Numbers greater than 100 aren't allowed");
    } else {
        gridPair = userInput;
    }
    // Clear the existing grid when a new input is entered
    while(container.firstChild) {
        container.firstChild.remove();
    }
    // Add the square of gridPair divs in the container
    for(let i = 1; i <= gridPair ** 2; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("hover")
        container.appendChild(newDiv);
    }

    const hovers = document.querySelectorAll(".hover");

    hovers.forEach(hover => {
        // -2 is for borders
        const size = (container.clientWidth / gridPair) -2;

        hover.style.width = `${size}px`;
        hover.style.height = `${size}px`;

        hover.addEventListener("mouseenter", function(e) {
            e.target.style.backgroundColor = "white";
        });
    })
})