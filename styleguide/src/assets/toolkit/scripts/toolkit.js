/**
 * Toolkit JavaScript
 */

// Begin custom code
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// joinModal
$('#joinModal').on('shown.bs.modal', function () {

});

// declineModal
$('#declineModal').on('shown.bs.modal', function () {

});

// forgotPasswordModal
$('#forgotPasswordModal').on('shown.bs.modal', function () {

});

// forgotUsernameModal
$('#forgotUsernameModal').on('shown.bs.modal', function () {

});

// forgotUsernameModal
$('#contactModal').on('shown.bs.modal', function () {

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// Document page filter
$('.js-filter-item').on('click', function(){
  var categoryType = $(this).data('category');
  $('.js-filter-item').removeClass('active');
  $(this, '.js-filter-item').addClass('active');
  $('.media-filter').fadeOut('fast');
  $('.' + categoryType).fadeIn('fast');
  });