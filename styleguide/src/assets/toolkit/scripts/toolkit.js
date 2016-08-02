/**
 * Toolkit JavaScript
 */

// Export Boostrap
var boostrapLoad = require('./bootstrap.min.js');
bootstrapLoad.boostrap(); // 'bar'



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