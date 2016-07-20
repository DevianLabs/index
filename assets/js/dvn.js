(function($, window, document) {

   $(function() {
		
		var params = {
			//show cursor
			cursor: true,
			
			//pipe, underscore, terminal
			cursortype: 'underscore',
			
			//delay between words
			delay: 200,
			
			//text type
			text: ['Text 1'],
			
			//callback
			//onTyped: function() { 
				//nothing
			//}
		};
		
		$('#dvn-text').typian(params);
		
   });
  }(window.jQuery, window, document));
