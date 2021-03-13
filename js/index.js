//funcion para gallery add event click to all 
$(".psw_trigger").click( function(){
    console.log("ok");

    //capturo la imagen actual (direccion)  
    var img_src = $(this).find("img").attr("src"), others_img_src = [];
    console.log(img_src);

    //capturo las demas imagenes
    others_img_src = $(".psw_trigger").not(this).find("img");

    // console.log(others_img_src);


    //Sennalo el cont de la gallery requerido para photoswipe
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // console.log( pswpElement );
    // build items array con las especificaciones necesarias como el ejemp de abajo
    var items = [{ src:img_src, w:400, h:600 }];


    for( var i = 0 ; i < others_img_src.length ;  i++ ){
        items[i+1] = { src:$(others_img_src[i]).attr("src"), w:400, h:600 } ;
    
    }

    // var items = [
    //      {src: img_src, w: 400, h: 600 },
    //       {src: 'imagen/2.jpg', w: 400, h: 600 },
    //       {src: 'imagen/3.jpg', w: 400, h: 600 },
    //     //  {src: 'imagen/4.jpg', w: 800, h: 1100 },
    //     //  {src: 'imagen/5.jpg', w: 800, h: 1100 },
    //     //  {src: 'imagen/6.jpg', w: 800, h: 1100 },
    //     //  {src: 'imagen/7.jpg', w: 800, h: 1100 },
    //     //  {src: 'imagen/8.jpg', w: 800, h: 1100 },
    //     //  {src: 'imagen/9.jpg', w: 800, h: 1100 },
    //     //  {src: 'imagen/10.jpg', w: 800, h: 1100 }   
    // ];
    // console.log(items);

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
        };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

    gallery.init();
});

//creo boton para subir al menu;
$("body").prepend($("<div class='up_bottom'><a href='#n'>UP</a></div>"));

var up_bottom = true;

//lo activo y lo desactivo
$(document).scroll(function () { 

    if( $(document).scrollTop() > 70 && up_bottom ){
        $(".up_bottom").addClass("appear");
        up_bottom = false;
  
    }
    else if( $(document).scrollTop() < 70 && !up_bottom ){
            $(".up_bottom").removeClass("appear");
            up_bottom = true;
        }
});

$(".heart").click( function(){
    var max_heart = $(this).attr("data-num");
    $(".heart").attr( "src", "imagen/heart_black.png" );
    for( var i=1 ; i <= max_heart ; i++ ){
        $(".heart"+i).attr( "src", "imagen/heart_red.png" );
    }
});