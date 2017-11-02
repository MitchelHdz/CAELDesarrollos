$.ajax('https://api.mailgun.net/v3/sandboxc6b06b2f712048c0a70c3184ed8ede4c.mailgun.org/messages',
	{
		type:"POST",
		username: 'api',
		password: 'key-23031c3052e470a5bfe10b3beab727d4',
		data:{
			"html": `<h1>TITLE-HERE</h1>`,
			"subject": 'hola',
			"from": "User<user@example.com>",
			"to": "<user@example.com>"
		},
		success:function(a,b,c){
			console.log( 'mail sent: ', b );
		}.bind(this),
		error:function( xhr, status, errText ){console.log( 'mail sent failed: ', xhr.responseText );}
	})
$("#formDataIndex").validate({
		rules: {
			name: { required: true, minlength: 2},
			email: { required:true, email: true},
		},
		messages: {
			name: 'Este campo es olbigatorio',
			email: 'Este campo es olbigatorio',
		},

	});

$.ajax({headers: {'Authorization': "Basic "+btoa("api:key-23031c3052e470a5bfe10b3beab727d4")},
		url :'https://api.mailgun.net/v3/sandboxc6b06b2f712048c0a70c3184ed8ede4c.mailgun.org/messages',
		type:"POST",
		dataType: 'JSON',
		username: 'api',
		password: 'key-23031c3052e470a5bfe10b3beab727d4',
		data:{
			"html": `<h1>TITLE-HERE</h1>`,
			"subject": 'hola',
			"from": "User<user@example.com>",
			"to": "<sebastian.snhn14@gmail.com>"
		},
		success:function(a,b,c){
			console.log( 'mail sent: ', b );
		}.bind(this),
		error:function( xhr, status, errText ){console.log( 'mail sent failed: ', xhr.responseText );}
	})