(function($, window, document) {

   $(function() {
     var  dvn = 'devian labs',
          textpart = '';
     var  arr = dvn.split(''),
          timer;

      function animate() {
        if(arr.length > 0) {
          textpart += arr.shift();
          $('#dvn-text').html(textpart);
        }
        else {
          clearTimeout(timer);
          return false;
        }

        timer = setTimeout(function(){
            animate();
        }, 100);
      }

      $('#dvn-text').after('<label class="cursor">_</label>');
      animate();

      (function blink(){
         $('.cursor').fadeOut(500).fadeIn(500, blink);
      })();
   });
  }(window.jQuery, window, document));
