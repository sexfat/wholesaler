var $ = require("jquery");
window.$ = $;
global.jQuery = $;


// plugin
require('../../assets/libs/bootstrap/dist/js/bootstrap.js');
require('../../assets/js/bootstrap-fileinput.js');


//wysihtml test
require('../../assets/libs/summernote/dist/summernote.js');
require('../../assets/js/bootstrap-switch.min.js');
require('../../assets/js/jquery.uniform.min.js');

// require('../../assets/libs/fastselect/dist/fastsearch.js');
// require('../../assets/libs/fastsearch/dist/fastsearch.js');
// require('../../assets/libs/fastselect/dist/fastselect.standalone.js');


// require('../../assets/js/bootstrap-wysihtml5/wysihtml5-0.3.0.js');
// require('../../assets/js/bootstrap-wysihtml5/bootstrap-wysihtml5.js');
// require('../../assets/js/bootstrap-markdown.js');
// require('../../assets/js/form-validation.js');



// require('../../assets/js/jquery.vmap.js');
// require('../../assets/libs/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.js');


//code

$(document).ready(function() {
    console.log("hello world");
    $('.summernote').summernote({
       height: 300,
       focus: true
    }
    );
    console.log("summereditor ok");


});

$(document).ready(function() {

    var contentHeight = $(window).height();
    $(".contentHeight").css("height", contentHeight);

  console.log(contentHeight);
});
