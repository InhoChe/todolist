$(document).ready(function(){
	
	$('.todoapp').todoapp({optionValue:'optionValue'});
	//console.dir($);
	//console.dir($('.todoapp'));
	//console.dir($('.todoapp').todoapp());
	//console.dir($('.todoapp').todoapp().data('plugin_todoapp'));
	
	
});

//플러그인
;(function ($, window, document, undefined) {
	var pluginName = 'todoapp';
	var defaults = {commonDefaultsPop : 'value'};
	
	var doAjax = function (url, type, data, dataType) {
		$.ajax({
			url:url,
			type:type,
			data:data,
			dataType:dataType,
			success:function(data){
                console.dir('data = ' + data);
            }
		});
	};
	
	var todoappMethods = {
			// 할 일 등록
			insertTodo : function (todoText) {
				//console.log('todoText = ' + todoText);
				doAjax('/api/todos/insertTodo' ,'POST' ,'' ,'text');
			},
			// 할 일 수정
			updateTodo : function () {
				
			},
			// 할 일 삭제
			deleteTodo : function () {
				
			},
			// 할 일 조회
			selectTodoList : function () {
				
			}
	};
	
	function Plugin(element, options) {
		this.element = element;
		
		this.option = $.extend({}, defaults, options);
		
		this._defaults = defaults;
		this._name = pluginName;
		
		this.init();
	}
	
	// 공통 초기화
	Plugin.prototype.init = function () {
		this.setEventHandler();
	};
	// 이벤트 핸들러 셋팅
	Plugin.prototype.setEventHandler = function () {
		
		// 키 다운 이벤트 셋팅
		var inputBox = $('.new-todo');
		inputBox.keydown(function (e) {
			// enter 키 다운 (빈 문자열이 아닌경우)
			if(e.keyCode == '13' && inputBox.val() != ''){
				todoappMethods.insertTodo(inputBox.val());
			}
		});
		
		//
	}
	
	// jQuery prototype에 플러그인 셋팅
	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	};
	
})( jQuery, window, document );