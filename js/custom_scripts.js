$(function(){
    $("#div_news").load("./subpages/news.html");
    $("#div_members").load("./subpages/members.html");
    $("#div_range").load("./subpages/range.html");
    $("#div_conf").load("./subpages/conferences.html");
    $("#div_contact").load("./subpages/contact.html");
    $("#div_gallery1").load("./subpages/galeria1.html");
});

$( document ).ready(function() {
    $("#div_news").show();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery1").hide();
});

$("#news").on('click', function () {
    $("#div_news").show();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery1").hide();
});

$("#members").on('click', function () {
    $("#div_news").hide();
    $("#div_members").show();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery1").hide();
});

$("#range").on('click', function () {
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").show();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery1").hide();
});

$("#conf").on('click', function () {
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").show();
    $("#div_contact").hide();
    $("#div_gallery1").hide();
});

$("#contact").on('click', function () {
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").show();
    $("#div_gallery1").hide();
});

function galeria(){
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery1").show();
}