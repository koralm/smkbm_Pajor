$(function() {
    var num = 10;

    for (var i = 0; i < num; i++) {
        $('#test').prepend("<div class='row'><div class='col-md-4'><div class='thumbnail'><a href='../files/photosKM/EMS_" + i + ".jpg' target='_blank'><img src='../files/photosKM/EMD_" + i + ".jpg' alt='Zdjęcie' style='width:100%' ></a></div></div><div class='col-md-4'><div class='thumbnail'><a href='../files/photosKM/EMD_" + i + ".jpg' target='_blank'><img src='../files/photosKM/EMD_" + i + ".jpg' alt='Zdjęcie' style='width:100%'></a></div></div><div class='col-md-4'><div class='thumbnail'><a href='../files/photosKM/EMD_" + i + ".jpg' target='_blank'><img src='../files/photosKM/EMD_" + i + ".jpg' alt='Zdjęcie' style='width:100%'></div></div></div><hr>");
    }
})

