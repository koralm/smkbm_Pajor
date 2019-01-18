$(function(){

    $("#div_news").load("./subpages/news.html");
    $("#div_members").load("./subpages/members.html");
    $("#div_range").load("./subpages/range.html");
    $("#div_conf").load("./subpages/conferences.html");
    $("#div_contact").load("./subpages/contact.html");
    $("#div_gallery1").load("./subpages/galeria1.html");
    $("#div_gallery2").load("./subpages/galeria2.html");
});


$( document ).ready(function() {

    $("#div_news").show();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery1").hide();
    $("#div_gallery2").hide();

});

$("#news").on('click', function () {
    $("#div_news").show();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery1").hide();
    $("#div_gallery2").hide();
});

$("#members").on('click', function () {
    $("#div_news").hide();
    $("#div_members").show();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery2").hide();
    $("#div_gallery1").hide();
});

$("#range").on('click', function () {
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").show();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery2").hide();
    $("#div_gallery1").hide();
});

$("#conf").on('click', function () {
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").show();
    $("#div_contact").hide();
    $("#div_gallery2").hide();
    $("#div_gallery1").hide();
});

$("#contact").on('click', function () {
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").show();
    $("#div_gallery2").hide();
    $("#div_gallery1").hide();
});

function galeria(){
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery2").hide();
    $("#div_gallery1").show();
}
function galeria2(){
    var num = 63;
    var left = 0
    var middle = 1;
    var right = 2;

    for (var i = 0; i < num; i++) {
        $('#test').append("<div class='row'><div class='col-md-4'><div class='thumbnail'><a href='../files/photosKM/EMS_" + left +  ".jpg' target='_blank'><img src='../files/photosKM/EMS_" + left + ".jpg' alt='Zdjęcie' style='width:100%' ></a></div></div><div class='col-md-4'><div class='thumbnail'><a href='../files/photosKM/EMS_" + middle +".jpg' target='_blank'><img src='../files/photosKM/EMS_" + middle +".jpg' alt='Zdjęcie' style='width:100%'></a></div></div><div class='col-md-4'><div class='thumbnail'><a href='../files/photosKM/EMS_" + right +".jpg' target='_blank'><img src='../files/photosKM/EMS_" + right +".jpg' alt='Zdjęcie' style='width:100%'></div></div></div><hr>");
        left=left + 3;
        middle=middle + 3;
        right=right + 3;
    }
    $("#div_news").hide();
    $("#div_members").hide();
    $("#div_range").hide();
    $("#div_conf").hide();
    $("#div_contact").hide();
    $("#div_gallery1").hide();
    $("#div_gallery2").show();
}