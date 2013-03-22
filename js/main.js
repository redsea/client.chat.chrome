var login = {
	setButtonJoin: function() {
		$("#btn_join").button().click(function(evt){
        	evt.preventDefault();
        	
        	var $nick = $('<div>').addClass('area_row area_last_row')
        		.append($('<span>').addClass('area_input_title').text('Nick'))
        		.append($('<span>&nbsp;</span>').addClass('area_input_div'))
        		.append($('<input>').attr({id:'txt_nick', type:'text'}));
        	
        	$('#area_login_body > div').eq(1).removeClass('area_last_row').after($nick);
        	
        	$('#area_buttons > div').hide();
        	$('#area_buttons > button').hide();
        	$('#btn_join_ok').show();
         });
	},
	
	setButtonLogin: function() {
		$("#btn_login").button().click(function(evt){
        	evt.preventDefault();
        	
        	console.log('-->login');
        });
	},
	
	setButtonOk: function() {
		$("#btn_join_ok").button().click(function(evt){
        	evt.preventDefault();
        	
        	console.log('-->ok');
        });
	}
};

document.addEventListener('DOMContentLoaded', function () {

	// TODO 로그인 체크 여부 필요.

	login.setButtonJoin();
	login.setButtonLogin();
	login.setButtonOk();
});