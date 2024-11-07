
// Function to change the image source
function changeImage(imageSrc) {
    document.getElementById("animalImage").src = imageSrc;
}

// Event listeners for each button
document.getElementById("sheep").addEventListener("click", function() {
    changeImage("Lab 2 attached files Nov 6, 2024 344 PM/sheep.jpg");
});

document.getElementById("bear").addEventListener("click", function() {
    changeImage("Lab 2 attached files Nov 6, 2024 344 PM/bear.webp");
});

document.getElementById("moose").addEventListener("click", function() {
    changeImage("Lab 2 attached files Nov 6, 2024 344 PM/moose.jpg");
});

document.getElementById("wolf").addEventListener("click", function() {
    changeImage("Lab 2 attached files Nov 6, 2024 344 PM/wolf.jpg");
});

document.getElementById("elk").addEventListener("click", function() {
    changeImage("Lab 2 attached files Nov 6, 2024 344 PM/elk.jpg");
});




