$(document).ready(function() {
  console.log("Loaded for realz.");
});

$(function() {
  $('.directUpload').find("input:file").each(function(i, elem) {
    console.log("Starting");
    var fileInput     = $(elem);
    var form          = $(fileInput.parents('form:first'));
    var submitButton  = form.find('input[type="submit"]');
    var progressBar   = $("<div class='bar'></div>");
    var barContainer  = $("<div class='progress'></div>").append(progressBar);
    fileInput.after(barContainer);
    fileInput.fileupload({
      fileInput:          fileInput,
      url:                form.data('url'),
      type:               'POST',
      autoUpload:         true,
      formData:           form.data('form-data'),
      paramName:          'file',
      dataType:           'XML',
      replaceFileInput:   false,
      progressall: function(e, data) {
        console.log(data);
        submitButton.prop('disabled', true);

        progressBar.
          css('background', 'green').
          css('display', 'block').
          css('width', (data.loaded / data.total))
          text("Loading...");
      },
      done: function(e, data) {
        submitButton.prop('disabled', false);
        progressBar.text("Uploading done");
        console.log("Upload completed.");

        // extract key and generate URL from response
        var key     = $(data.jqXHR.responseXML).find("Key").text();
        var url     = '//' + form.data('host') + '/' + key;

        // create hidden field
        var input = $("<input />", { type:'hidden', name: fileInput.attr('name'),
                      value: url })
                      form.append(input);
      },
      fail: function(e, data) {
        submitButton.prop('disabled', false);
        progressBar.
          css("background", "red").
          text("Failed");
      }
    });
  });
});
