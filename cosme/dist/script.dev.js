"use strict";

$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
      $('.hamburger').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
      $('.hamburger').removeClass('active');
    }
  });
});