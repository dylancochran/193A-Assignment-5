

// Old function to display an alert.
function displayAlert() {
    alert("Hello, world!");
}

// Function used to make font size 24pt
function makeBigger() {
    document.getElementById("input").style.fontSize = "24pt";
}

// Function to handle radio changes
function handleRadio() {
    // If fancy is checked
    if (document.getElementById("fancy").checked) {
        // Set weight to bold
        document.getElementById("input").style.fontWeight = "bold"
        // Set color to blue
        document.getElementById("input").style.color = "blue"
        // Underline text
        document.getElementById("input").style.textDecoration = "underline";
        alert("YOU'VE CHOSEN TO LIVE THE FANCY LIFE!");
    }
    // If boring checked
    else if (document.getElementById("boring").checked) {
        // Set weight to normal
        document.getElementById("input").style.fontWeight = "normal"
        // Set color to black
        document.getElementById("input").style.color = "black"
        // Normalize text
        document.getElementById("input").style.textDecoration = "none";
        alert("You've chosen to be boring. Yawn.");
    }

}

// Function to handle moo
function itsMooingTime() {
    startingText = document.getElementById("input").value

    // Split sentences based on .
    sentences = startingText.split(".");
    period_str = sentences.join("-moo.");

    // Split sentences based on ! next
    sentences2 = period_str.split("!");
    excla_str = sentences2.join("-moo!");

    // Finally split on ?
    sentences3 = excla_str.split("?");
    question_str = sentences3.join("-moo?");

    // Uppercase
    final_str = question_str.toUpperCase();

    // Set new value
    document.getElementById("input").value = final_str;
}