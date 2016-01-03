/* TYPE YOUR JAVA SCRIPT HERE */

function check () {
	var status=true;
	var lgn=$("#lgn").val();
	var pwd=$("#pwd").val();
	var pwd=$("#pwdc").val();
	if(lgn.length<6)
	{
		//swal({type:"warning",title:"please write name length > 6!!!"});
		alert("xxxxx");
		$("#lgn").val("");
		$("#lgn").focus();
		status=false;
	}
	if(pwd!=pwdc)
	{
		//swal({type:"warning",title:"please write name length > 6!!!"});
		alert("pwd write again");
		$("#pwd").val("");
		$("#pwdc").val("");
		$("#pwd").focus();
		status=false;
	}
	return status;
}