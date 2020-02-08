
    $("#home").click( function(){
        $("#selected").removeClass("lightning2");
        $("#selected").removeClass("lightning3");
        $("#selected").addClass("lightning1");
     
    } );
    $("#add").click( function(){
        $("#selected").removeClass("lightning1");
        $("#selected").removeClass("lightning3");
        $("#selected").addClass("lightning2");

    } );
    $("#base").click( function(){
        $("#selected").removeClass("lightning1");
        $("#selected").removeClass("lightning2");
        $("#selected").addClass("lightning3");
        

    } );
   