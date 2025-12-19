// app.js

console.log('app.js loaded');

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".acnh-button:not(:disabled)");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove any existing pop-effect class to restart the animation
        button.classList.remove("pop-effect");
        // Force a reflow to ensure the animation restarts
        void button.offsetWidth;
        // Add the class back to trigger the animation
        button.classList.add("pop-effect");
  
        // Remove the class after the animation completes
        button.addEventListener(
          "animationend",
          () => {
            button.classList.remove("pop-effect");
          },
          { once: true },
        ); // The { once: true } option ensures the event listener is removed after it fires
      });
    });
  });