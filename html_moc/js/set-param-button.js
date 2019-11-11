/**
 * 
 */

$(function(){
	$(document).on("click", ".set-param-btn", function(){
		var str = $(this).text();
		if(str == '変数に設定'){
			var str = $(this).text().replace(/変数に設定/g, '変数');
			$(this).text(str);
			$(this).removeClass('btn-info');
			$(this).addClass('btn-warning');
		}else if(str == '変数'){
			var str = $(this).text().replace(/変数/g, '変数に設定');
			$(this).text(str);
			$(this).removeClass('btn-warning');
			$(this).addClass('btn-info');
		}
	})
	
	
});