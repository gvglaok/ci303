/* TYPE YOUR JAVA SCRIPT HERE */

function login () {
	var name=$("#username").val();
	var key=$("#pwd").val();

	$.ajax({
		url: '/login/logining',
		type: 'POST',
		data: {username:name,password:key},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
}