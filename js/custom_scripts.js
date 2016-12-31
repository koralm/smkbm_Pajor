$( document ).ready(function() {
    $("#div_news").show();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
});

$("#news").on('click', function () {
    $("#div_news").show();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
});

$("#members").on('click', function () {
    $("#div_news").hide();
    $("#div_members").show();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
});

$("#range").on('click', function () {
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").show();
    $("#div_conf").hide();
    $("#div_contact").hide();
});

$("#conf").on('click', function () {
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").show();
    $("#div_contact").hide();
});

$("#contact").on('click', function () {
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").show();
});