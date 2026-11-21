// 1. Dark / Light Mode Toggle Feature
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
    // Toggles the 'dark-mode' class on the <body> tag
    document.body.classList.toggle("dark-mode");

    // Updates button text based on current mode
    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Dark Mode";
    }
});

// 2. Interactive Greeting Feature
const greetBtn = document.getElementById("greet-btn");
const greetMessage = document.getElementById("greet-message");

greetBtn.addEventListener("click", function () {
    greetMessage.textContent = "Thanks for visiting my portfolio! Have a great day.";
});