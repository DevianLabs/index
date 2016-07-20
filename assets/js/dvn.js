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
          var param = {
            flames : [
              { x: 0, hsla: [300, 100, 80, .1], y: 0, blur: .1 },
              { x: 0, hsla: [290, 100, 80, .8], y: .02, blur: .15 },
              { x: 0, hsla: [280, 100, 80, .7], y: .05, blur: .2 },
              { x: 0, hsla: [260, 100, 80, .6], y: .1, blur: .25 },
              { x: 0, hsla: [240, 100, 80, .5], y: .10, blur: .3 },
              { x: 0, hsla: [220, 100, 80, .4], y: .20, blur: .4 },
              { x: 0, hsla: [200, 100, 80, .3], y: .1, blur: .5}
            ]
          };

          var el = $('#dvn-text span')[0];
          $(el).burn(param);
      }
		};

		$('#dvn-text').typian(params);

   });
  }(window.jQuery, window, document));
