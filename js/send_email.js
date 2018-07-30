(function(){
  emailjs.init("user_kuXdptALaRykkoYrcqsz1");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
		
		event.preventDefault();

		var templateParams = {
		user_name: this.user_name.value,
		user_email: this.user_email.value,
		email: this.user_email.value,
		phone: this.phone.value,
		message:this.message.value
		};
 		
 		$('#submit-button').disabled = true;
		emailjs.send('gmail_2', 'contact_form_2', templateParams)
		    .then(function(response) {
		       console.log('SUCCESS!', response.status, response.text);
		       $('#alert-success').css('display','block').text("Your message was sent, I will answer you as soon as possible");
		       $('#submit-button').disabled = false;
		    }, function(error) {
		       console.log('FAILED...', error);
		       $('#alert-error').css('display','block').text("Sorry, your message couldn't be sent, please try again");
		       $('#submit-button').disabled = false;
		    });
    });
}