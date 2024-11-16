// Select container
let container = document.querySelector("#container");

// Initialize the box element
function boxCreation() {
    let box = document.createElement("div");
    box.classList.add("square");
    return box;
}


// Create the div inside the container
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        box = boxCreation()
        container.appendChild(box);
        console.log(`i is ${i} and j equals to ${j}`);
    }
}