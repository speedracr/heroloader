$(document).ready ->
  $('.toggle-button').click () ->
    target = $(this).data('target')
    $(".#{target}").toggle()
