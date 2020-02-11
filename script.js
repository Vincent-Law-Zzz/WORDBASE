
    $("#addword").hide();
    $("#home").click( function(){
        $("#selected").removeClass("lightning2");
        $("#selected").removeClass("lightning3");
        $("#selected").addClass("lightning1");
        $("#addword").hide()
     
    } );
    $("#add").click( function(){
        $("#selected").removeClass("lightning1");
        $("#selected").removeClass("lightning3");
        $("#selected").addClass("lightning2");
        $("#addword").show();

    } );
    $("#base").click( function(){
        $("#selected").removeClass("lightning1");
        $("#selected").removeClass("lightning2");
        $("#selected").addClass("lightning3");
        $("#addword").hide();

    } );

    $("#one").click(function(){
        var text = document.getElementById("two").value;
        yatr.ajaxGet(text);
    })

   
    var yatr ={
        key:"trnsl.1.1.20200208T134436Z.1f4d7b6646b15486.af12164c15416a7c32cb788f5dc3a3f57b9f8e06",
        url:"https://translate.yandex.net/api/v1.5/tr.json/translate",
        
        
        ajaxGet : function( text , callback ) {
        var request = new XMLHttpRequest();
        request.open('GET',`${this.url}?lang=en-ru&key=${this.key}&text=${text}`,true );
        request.send();
        request.onreadystatechange = function(){
            console.log(request.readyState[3]);
          if( request.readyState == 4 && request.status == 200){
                var req = request.response;
                req = JSON.parse(req);
                req = req.text;
                alert(req);
            }
        };
        request.onreadystatechange();
        }
   }
  


  
   