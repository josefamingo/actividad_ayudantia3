$(document).ready(function(){

    $("#boton").click(function(){
        console.log("hola");
        $("#imagen2").hide();
    });

    $("#botontitulo").click(function(){
        $("#tituloprincipal").append("agregar texto");
    });

    $("#Inicio").mouseenter(function(){
        $("#Inicio").fadeTo("fast",0.5);
    });
});