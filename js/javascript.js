const body = document.querySelector("body");
const container = document.querySelector(".container");

const button = document.createElement("button");
button.textContent = "Create new grid";
body.insertBefore(button, container);

for(let i = 1; i <= 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("hover")
    container.appendChild(newDiv);
}

const hovers = document.querySelectorAll(".hover");

hovers.forEach(hover => {
    hover.addEventListener("mouseenter", function(e) {
        e.target.style.backgroundColor = "white";
    });
})