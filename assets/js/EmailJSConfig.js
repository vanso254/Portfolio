(function(){
    emailjs.init("h2UiwRI5p5PxlzAH3");

    // Add event listener to the form submit button
    document.addEventListener('DOMContentLoaded', function() {
       var submitButton = document.getElementById('submitButton');
       submitButton.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default form submission

          // Collect the form data
          var formData = {
             name: document.getElementById('name').value,
             email: document.getElementById('email').value,
             message: document.getElementById('message').value
          };

          // Send the form data using EmailJS
          emailjs.send('service_mhl6dq5', 'template_9wz9ovl', formData)
             .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                swal({
                  title: "Thank You!",
                  text: "Message Sent Successfully!",
                  icon: "success",
                  button: "Ok",
                });                
             }, function(error) {
                console.log('FAILED...', error);
                swal({
                  title: "Error",
                  text: "There is an Error Sending The Message!",
                  icon: "error",
                  button: "Ok",
                });   
                // You can add your desired error handling here
             });
       });
    });
 })();