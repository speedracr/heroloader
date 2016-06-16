$(document).ready ->
  $('.toggle-button').each (i, elem) =>
    $(elem).css(
      'text-decoration': 'underline'
      'color': '#007095'
    )
    toggleClass = $(elem).data('target')
    $(".#{toggleClass}").hide()

  $('.toggle-button').click () ->
    target = $(this).data('target')
    $(".#{target}").toggle()
