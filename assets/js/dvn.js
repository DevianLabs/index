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
			text: ['devian labs', 'Web and mobile development', ' ', ' ',  'hello@devianlabs.com'],

			//callback
			onTyped: function() {
          
      }
		};

		$('#dvn-text').typian(params);

   });
  }(window.jQuery, window, document));
