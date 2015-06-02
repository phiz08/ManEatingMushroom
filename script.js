$( document ).ready(function() {	
	$('#side').width(0);
	$('#conList').hide(0);
	
	$('#togButt').click(function(){
		$('#side').animate({width:"40%"});
		$('#togButt').animate({height:"0%"});
		$('#buttClose').animate({height:"100%"});
		$('#title').animate({left:"+=40%"});
		$('#conList').fadeToggle(1000);
	});
	$('#buttClose').click(function(){
		$('#side').animate({width:"0%"});
		$('#buttClose').animate({height:"0%"});
		$('#togButt').animate({height:"100%"});
		$('#title').animate({left:"-=40%"});
		$('#conList').fadeToggle(500);

	});
	$('#para').click(function(){
		$('#side').animate({width:"0%"});

	});
	
	$("#textBox").keyup(function(event){
    if(event.keyCode == 13){
        $("#butt").click();
    }
	});
	$('#butt').click(function() {
		var value = $('#textBox').val();
		console.log(value);
		$('#title2').replaceWith('<h1 id="title2">'+value+'</h1>');
	});
	
	$("#textBox2").keyup(function(event){
    if(event.keyCode == 13){
        $("#butt2").click();
    }
	});
	$('#butt2').click(function() {
		var value2 = $('#textBox2').val();
		console.log(value2);
		$('#para2').append(value2);
	});
});
