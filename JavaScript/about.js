// Accordion functionality

//Select all the buttons with the acc class
const accordionButtons = document.querySelectorAll(".accordion-btn");

//Loop through each accordion button
accordionButtons.forEach((button) => {

    //add a click event listener to each button
    button.addEventListener("click", () => {

        //toggle the active class on the clicked button
        button.classList.toggle("active");

        //find the panel directly after the button
        const panel = button.nextElementSibling;

        //expand or collapse the panel
        panel.classList.toggle("open");

        //Span icon
        const icon = button.querySelector(".accordion-icon");

        if(panel.classList.contains("open")){
            icon.textContent = "-";
            button.setAttribute("aria-expanded","true");
        }else {
        
        }
        //update whether the section is expanded
        button.setAttribute("aria-expanded", panel.classList.contains("open")
        );
    });
});