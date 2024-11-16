// Select container
let container = document.querySelector("#container");


// Function to create box inside the container
function box_size(rows, cols, dimension) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Initialize the box element
            let box = document.createElement("div");
            box.style.height = dimension + "px";
            box.style.width = dimension + "px";
            box.classList.add("square");
            container.appendChild(box);
        }
    }

    // Select all boxes that has been created
    const squares = document.querySelectorAll(".square");

    // Debugging line
    console.log(squares.length);
    
    // Add the hovering effect
    squares.forEach (square => {
        // Add background to the div pm mouseover
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "antiquewhite";
        })
    })
}


// Add event listener when the dimiension button is clicked
let dimension = document.querySelector("#btn")
dimension.addEventListener("click", () => {
    let size = document.querySelector("#grid-size");
    container.innerHTML = null;

    // Adjust the width and height of the square
    if (size.value <= 0) {
        size.value = 1;
    }
    let dimension = 640 / size.value ; 

    // Debugging line
    console.log(`The grid size is ${dimension}`);

    // New box size
    box_size(size.value,size.value, dimension);
})



// Default box size
box_size(16,16);