var $ = require("jquery");
window.$ = $;
global.jQuery = $;

// plugin
// require('../../assets/js/jquery.min.js');
// require('../../assets/js/bootstrap.min.js');
// require('../../assets/js/jquery.slimscroll.min.js');
// require('../../assets/js/bootstrap-switch.min.js');
// require('../../assets/js/app.min.js');
// require('../../assets/js/layout.min.js');

//code

// $(document).ready(function(){
//
// console.log("hello world");
// $('body').on( 'click', function(e) {
// 		$(this).toggleClass( 'page-sidebar-closed' );
//     $('.page-sidebar-menu').toggleClass( 'page-sidebar-menu-closed' );
// 		e.preventDefault();
// });

// });

$(document).ready(function(){

  $( '.icon-box-toggle' ).bind( 'click', function(e) {
  		$( this ).toggleClass( 'active' );
  		e.preventDefault();

  });



  });
