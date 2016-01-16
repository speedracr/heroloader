//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.ui.widget
//= require jquery.fileupload

$(function() {
  $('.directUpload').find("input:file").each(function(i, elem) {
    var fileInput = $(elem);
    console.log(fileInput);
  });
});

$(function() {
  $('.directUpload').find("input:file").each(function(i, elem) {
    var fileInput     = $(elem);
    var form          = $(fileInput.parents('form:first'));
    var submitButton  = form.find('input[type="submit"]');
    var progressBar   = $("<div class='bar'></div>");
    var barContainer  = $("<div class='progress'></div>").append(progressBar);
    fileInput.after(barContainer);
  });
});
