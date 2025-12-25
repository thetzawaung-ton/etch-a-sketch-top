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
    })
    // GET random color number from #000000 to #ffffff
    const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
    // For every mouse over of container all the hover divs change to random color
    container.addEventListener('mouseover', function(event) {
        hovers.forEach(hover => {
            hover.style.backgroundColor = getRandomColor();
        })
    })
    /* For changing only the target div color in the container,
    the code will be as follows.
        container.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = getRandomColor();
        })
        or 
        hover.addEventListener('mouseenter', function() {
            hover.style.backgroundColor = getRandomColor();
        })
    */
})