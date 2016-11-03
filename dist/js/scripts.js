// JQuery used for example, getElementByID() or getElementByClessName() could be used in native JS.
$(document).ready(function(){
  $('#hamburger').on('click', function () {
    $('#black-out, #small-nav').show();
  });

  $('#small-menu-close').on('click', function () {
    $('#black-out, #small-nav').hide();
  });

  $('.fa-ellipsis-v').on('click', function () {
    $('#file-actions').toggle();
  });
  $('#rename').on('click', function () {
    $('#rename-folder').show();
  });
  $('#cancel').on('click', function(){
    $("#rename-folder").hide();
  });
});
