const NEW_SCORE_BOX = "<td class=\"score\"> \
	<span class=\"decrement\">-</span> \
	<span class=\"number\">0</span> \
	<span class=\"increment\">+</span> \
	<br/> \
	<input type=\"text\" class=\"name\" placeholder=\"player name\"></input> \
</td>";

var url;

const STAY_DOWN = 250;
var ding_up = function() {
	$("#ding").attr("src", "assets/bell_up.svg");
}
var ding_down = function() {
	$("#ding").attr("src", "assets/bell_down.svg");
	setTimeout(ding_up, STAY_DOWN);
}
var biscuits_up = function() {
	$("#biscuits").attr("src", "assets/button_up.svg");
}
var biscuits_down = function() {
	$("#biscuits").attr("src", "assets/button_down.svg");
	setTimeout(biscuits_up, STAY_DOWN);
}


$(document).ready(function(){
	var key = document.location.href.split("?")[1];
	url = "https://discordapp.com/api/webhooks/" + key;
	for(var i = 0; i < 3; i++) { $("#add_score_box").click(); }
});

$("#add_score_box").click(function(){
	$("#scores_row").append(NEW_SCORE_BOX);
});

$("#del_score_box").click(function(){
	$(".score").last().remove();
});


$(document).on('click','.increment',function(){
	var current_value = $(this).parent().children(".number").text();
	var new_value = parseInt(current_value) + 1;
	$(this).parent().children(".number").text(new_value);
	
	if ($("#auto").prop("checked")) {
		$("#ding").click();
	}
});

$(document).on('click','.decrement',function(){
	var current_value = $(this).parent().children(".number").text();
	var new_value = parseInt(current_value) - 1;
	$(this).parent().children(".number").text(new_value);
});


$("#ding").click(function(){
	$.post(url, {"content": ";ding"})
	ding_down();
});

$("#biscuits").click(function(){
	$.post(url, {"content": ";biscuits"})
	biscuits_down();
});
