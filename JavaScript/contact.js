// Form Validation
//Get the references to the form and its elements
var contactForm = document.getElementById("contactForm");
var fullNameInput = document.getElementById("fullName");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message")
var nameErrorSpan = document.getElementById("nameError");
var emailErrorSpan = document.getElementById("emailError");
var messageErrorSpan = document.getElementById("messageError")

//Add event listener to the forms submit button

contactForm.addEventListener("submit", function(event) {
  
    //preven the default form submission
    event.preventDefault();

    //Assume that the form is valid Initially
    var isValid = true;

    //clear previous error messages
    nameErrorSpan.innerHTML = "";
    emailErrorSpan.innerHTML = "";
    if (messageErrorSpan) messageErrorSpan.innerHTML = "";


    //1. Validate the full name field 
    if(fullNameInput.value.trim() === ""){
        nameErrorSpan.innerHTML = "Name is required";
        isValid = false;
    }

    //2.Validate the email field
    // A simple regex pattern to check for basic email pattern

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = emailInput.value.trim();
    if(emailValue ===""){
        emailErrorSpan.textContent = "Email is required";
        isValid = false;
    }else if(!emailPattern.test(emailValue)){
      emailErrorSpan.textContent = "Please enter a valid email address";
      isValid = false;
     }

     if(messageInput && messageInput.value.trim()===""){
        messageErrorSpan.innerHTML = "Please enter your message";
        isValid = false;
     }

     //If the form is valid , you can submit it or process the data
     if(isValid){
        alert("Form Submitted Successfully!");
     }

     //Here , you would typically use myForm.submit() to send data to a server
     //For this examplewe we will just show the alert and not submit


});


