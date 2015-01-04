$(document).ready(function() {
	$('#contact-form').validate(profileValAdmin);
});

profileValAdmin = {
	focusInvalid: false
	};

profileValAdmin.rules = {
	'FieldData0': {
		required: true,
		minlength: 2
	},
	'FieldData1': {
		required: true,
		email: true
	},
	'FieldData2': {
		required: true	
	},
	'Turing': {
		required: true
	}
};	

profileValAdmin.messages = {

	'FieldData0': {
		required: "Please enter your name.",
		minlength: "Please enter at least 2 characters for your name."
	},
	'FieldData1': {
		required: "Please enter your email address.",
		email: "Please enter a valid email address."
	},
	'FieldData2': {
		required: "Won't you write me a message?"
	},
	'Turing': {
		required: "Please enter the text from the image."
	}
	
};	

profileValAdmin.errorLabelContainer = '#js_errorbox_signup';
profileValAdmin.wrapper= 'div';
