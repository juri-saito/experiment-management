/**
 * 
 */
$(function(){

	//実験条件を追加する
	$(document).on("click", ".add-cond-btn",function(){
		$.fn.log = function() {
			console.log.apply(console, this);
			return this;
		};
		//クローンを変数に格納
		var clonecode = $('.expt-condition:last').clone(true);
		//数字を+1して変数に格納
		var cloneno = clonecode.attr('data-cond-formno');
		var cloneno2 = parseInt(cloneno) + 1;
		var cloneno3 = parseInt(cloneno) + 2;

		//data属性の数字を+1
		clonecode.attr('data-cond-formno',cloneno2);

		//数値
		clonecode.find("label.inputCondition").html("実験条件" + cloneno3);

		//name属性の数字を+1
		//実験条件
		var namecode = clonecode.find('input.inputCondition').attr('name');
		namecode = namecode.replace(/inputCondition\[[0-9]{1,2}/g,'inputCondition[' + cloneno2);
		clonecode.find('input.inputCondition').attr('name', namecode);
		//単位
		var namecode2 = clonecode.find('select.inputCondUnit').attr('name');
		namecode2 = namecode2.replace(/inputCondUnit\[[0-9]{1,2}/g,'inputCondUnit[' + cloneno2);
		clonecode.find('select.inputCondUnit').attr('name',namecode2);

		//for属性の数字を+1
		//実験条件
		var forcode = clonecode.find('label.inputCondition').attr('for');
		forcode = forcode.replace(/inputCondition\[[0-9]{1,2}/g,'inputCondition[' + cloneno2);
		clonecode.find('label.inputCondition').attr('for', forcode);
		//単位
		var forcode = clonecode.find('label.inputCondUnit').attr('for');
		forcode = forcode.replace(/inputCondUnit\[[0-9]{1,2}/g,'inputCondUnit[' + cloneno2);
		clonecode.find('label.inputCondUnit').attr('for', forcode);

		//id属性の数字を+1
		//実験条件
		var idcode = clonecode.find('input.inputCondition').attr('id');
		idcode = forcode.replace(/inputCondition\[[0-9]{1,2}/g,'inputCondition[' + cloneno2);
		clonecode.find('input.inputCondition').attr('id', idcode);
		//単位
		var idcode = clonecode.find('select.inputCondUnit').attr('id');
		idcode = forcode.replace(/inputCondUnit\[[0-9]{1,2}/g,'inputCondUnit[' + cloneno2);
		clonecode.find('select.inputCondUnit').attr('id', idcode);


		//HTMLに追加
		clonecode.log();
		var myObj = $(".expt-condition:last");
		myObj.log();
		clonecode.insertAfter(myObj);
	})


	//測定条件を追加する
	$(document).on("click", ".add-meas-btn",function(){
		$.fn.log = function() {
			console.log.apply(console, this);
			return this;
		};
		//クローンを変数に格納
		var clonecode = $('.expt-measurement:last').clone(true);
		//数字を+1して変数に格納
		var cloneno = clonecode.attr('data-meas-formno');
		var cloneno2 = parseInt(cloneno) + 1;
		var cloneno3 = parseInt(cloneno) + 2;

		//data属性の数字を+1
		clonecode.attr('data-meas-formno',cloneno2);

		//数値
		clonecode.find("label.inputMeasurement").html("測定項目" + cloneno3);

		//name属性の数字を+1
		//実験条件
		var namecode = clonecode.find('input.inputMeasurement').attr('name');
		namecode = namecode.replace(/inputMeasurement\[[0-9]{1,2}/g,'inputMeasurement[' + cloneno2);
		clonecode.find('input.inputMeasurement').attr('name', namecode);
		//単位
		var namecode2 = clonecode.find('select.inputMeasUnit').attr('name');
		namecode2 = namecode2.replace(/inputMeasUnit\[[0-9]{1,2}/g,'inputMeasUnit[' + cloneno2);
		clonecode.find('select.inputMeasUnit').attr('name',namecode2);

		//for属性の数字を+1
		//実験条件
		var forcode = clonecode.find('label.inputMeasurement').attr('for');
		forcode = forcode.replace(/inputMeasurement\[[0-9]{1,2}/g,'inputMeasurement[' + cloneno2);
		clonecode.find('label.inputMeasurement').attr('for', forcode);
		//単位
		var forcode = clonecode.find('label.inputMeasUnit').attr('for');
		forcode = forcode.replace(/inputMeasUnit\[[0-9]{1,2}/g,'inputMeasUnit[' + cloneno2);
		clonecode.find('label.inputMeasUnit').attr('for', forcode);

		//id属性の数字を+1
		//実験条件
		var idcode = clonecode.find('input.inputMeasurement').attr('id');
		idcode = forcode.replace(/inputMeasurement\[[0-9]{1,2}/g,'inputMeasurement[' + cloneno2);
		clonecode.find('input.inputMeasurement').attr('id', idcode);
		//単位
		var idcode = clonecode.find('select.inputMeasUnit').attr('id');
		idcode = forcode.replace(/inputMeasUnit\[[0-9]{1,2}/g,'inputMeasUnit[' + cloneno2);
		clonecode.find('select.inputMeasUnit').attr('id', idcode);


		//HTMLに追加
		clonecode.log();
		var myObj = $(".expt-measurement:last");
		myObj.log();
		clonecode.insertAfter(myObj);
	})

	//実験条件削除ボタン
	$(document).on("click", ".delete-cond-btn",function(){
		//クリックされた削除ボタンの親要素を削除
		$(this).parents(".expt-condition").remove();

		var scount = 0;

		//番号振り直し
		$('.expt-condition').each(function(){
			var scount2 = scount + 1;
			//data属性の数字
			$(this).attr('data-cond-formno', scount);
			//数値
			$('label.inputCondition', this).html("実験条件" + scount2);

			//name属性の数字
			//実験条件
			var namecode = $('input.inputCondition', this).attr('name');
			namecode = namecode.replace(/inputCondition\[[0-9]{1,2}/g,'inputCondition[' + scount);
			$('input.inputCondition', this).attr('name', namecode);
			//単位
			var namecode2 = $('select.inputCondUnit', this).attr('name');
			namecode2 = namecode2.replace(/inputCondUnit\[[0-9]{1,2}/g,'inputCondUnit[' + scount);
			$('select.inputCondUnit', this).attr('name',namecode2);

			//for属性の数字を+1
			//実験条件
			var forcode = $('label.inputCondition', this).attr('for');
			forcode = forcode.replace(/inputCondition\[[0-9]{1,2}/g,'inputCondition[' + scount);
			$('label.inputCondition', this).attr('for', forcode);
			//単位
			var forcode = $('label.inputCondUnit', this).attr('for');
			forcode = forcode.replace(/inputCondUnit\[[0-9]{1,2}/g,'inputCondUnit[' + scount);
			$('label.inputCondUnit', this).attr('for', forcode);

			//id属性の数字を+1
			//実験条件
			var idcode = $('input.inputCondition', this).attr('id');
			idcode = forcode.replace(/inputCondition\[[0-9]{1,2}/g,'inputCondition[' + scount);
			$('input.inputCondition', this).attr('id', idcode);
			//単位
			var idcode = $('select.inputCondUnit', this).attr('id');
			idcode = forcode.replace(/inputCondUnit\[[0-9]{1,2}/g,'inputCondUnit[' + scount);
			$('select.inputCondUnit', this).attr('id', idcode);

			scount += 1;
		})
	})

	//測定項目削除ボタン
	$(document).on("click", ".delete-meas-btn",function(){
		//クリックされた削除ボタンの親要素を削除
		$(this).parents(".expt-measurement").remove();

		var scount = 0;

		//番号振り直し
		$('.expt-measurement').each(function(){
			var scount2 = scount + 1;
			//data属性の数字
			$(this).attr('data-meas-formno', scount);
			//数値
			$('label.inputMeasurement', this).html("測定項目" + scount2);

			//name属性の数字を+1
			//実験条件
			var namecode = $('input.inputMeasurement',this).attr('name');
			namecode = namecode.replace(/inputMeasurement\[[0-9]{1,2}/g,'inputMeasurement[' + scount);
			$('input.inputMeasurement',this).attr('name', namecode);
			//単位
			var namecode2 = $('select.inputMeasUnit',this).attr('name');
			namecode2 = namecode2.replace(/inputMeasUnit\[[0-9]{1,2}/g,'inputMeasUnit[' + scount);
			$('select.inputMeasUnit',this).attr('name',namecode2);

			//for属性の数字を+1
			//実験条件
			var forcode = $('label.inputMeasurement',this).attr('for');
			forcode = forcode.replace(/inputMeasurement\[[0-9]{1,2}/g,'inputMeasurement[' + scount);
			$('label.inputMeasurement',this).attr('for', forcode);
			//単位
			var forcode = $('label.inputMeasUnit',this).attr('for');
			forcode = forcode.replace(/inputMeasUnit\[[0-9]{1,2}/g,'inputMeasUnit[' + scount);
			$('label.inputMeasUnit',this).attr('for', forcode);

			//id属性の数字を+1
			//実験条件
			var idcode = $('input.inputMeasurement',this).attr('id');
			idcode = forcode.replace(/inputMeasurement\[[0-9]{1,2}/g,'inputMeasurement[' + scount);
			$('input.inputMeasurement',this).attr('id', idcode);
			//単位
			var idcode = $('select.inputMeasUnit',this).attr('id');
			idcode = forcode.replace(/inputMeasUnit\[[0-9]{1,2}/g,'inputMeasUnit[' + scount);
			$('select.inputMeasUnit',this).attr('id', idcode);
			
			scount += 1;
		})			
	})
});