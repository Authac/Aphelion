$(document).ready(function() {

	jQuery.validator.addMethod('alpha', function(value, element) {
		return this.optional(element) || value == value.match(/^[a-zA-Z]+$/);
	}, 'Only letters are allowed.');

	$('#main-menu form').each(function() {

		var options = { 
			highlight: function (element, errorClass, validClas) { 
					$(element).closest('div.control-group').addClass('error'); 
			}, 
			unhighlight: function (element, errorClass, validClass) { 
					$(element).closest('.error').removeClass('error'); 
			}, 
			errorElement: 'span',
			errorClass: 'help-inline'
		}
		
		var handler;
		
		// Register form
		if ($(this).hasClass('register')) {
			options.rules = {
				password_confirm: {
					equalTo: '#register-password'
				}
			}
			options.submitHandler = function() { $('#client').trigger('submit-register'); }
		}
		
		if ($(this).hasClass('login')) {
			options.submitHandler = function() { $('#client').trigger('submit-login'); }
		}
		
		var validator = $(this).validate(options);
		$(this).data('validator', validator)

	});

});