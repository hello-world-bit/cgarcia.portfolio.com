document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("[data-form]");
    const nameInput = document.querySelector("input[name='fullname']");
    const emailInput = document.querySelector("input[name='email']");
    const messageInput = document.querySelector("textarea[name='message']");
    const submitButton = document.querySelector("[data-form-btn]");
  
    // Event listener to enable the submit button when all fields are filled
    form.addEventListener("input", function() {
      submitButton.disabled = !(nameInput.value && emailInput.value && messageInput.value);
    });
  
    // Event listener to handle form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      // Get the form values
      const name = nameInput.value;
      const userEmail = emailInput.value;
      const message = messageInput.value;
  
      // Create a mailto URL
      const mailtoUrl = `mailto:christiangarcia.private@gmail.com?subject=${encodeURIComponent('Message from ' + name)}&body=${encodeURIComponent(`From: ${userEmail}\n\n${message}`)}`;
  
      // Show confirmation prompt
      const userConfirmed = confirm("You will be redirected to your email client to send the message. Do you want to proceed?");
  
      if (userConfirmed) {
        // Redirect to the email client
        window.location.href = mailtoUrl;
  
        // Optional: Clear the form after submission
        form.reset();
      } else {
        // Optional: Show a message or handle cancellation
        alert("You canceled the email submission.");
      }
  
    });
  
  });
  