


var cont =0;

function loadData() {
  cont ++;
   //alert("Add me to homescreem to enjoy!!");
  console.log(cont);
  if (cont==3) {
    alert("Add me to homescreem to enjoy!!");
  }
  

    //$("#articulos"). closest('.li').remove();;

  // document.getElementById("articulos").innerHTML = "a";
     $('ul').empty();
   //maps api
    var street=$("#street").val();
    var city=$("#city").val();
    var key='';
    var url='https://maps.googleapis.com/maps/api/streetview?size=600x300&location='+street+', '+city+'&heading=151.78&pitch=-0.76&key='+key;
    
   // console.log(url);
   /*var clase="img-responsive";
   var id="miFoto";

   $("#miDiv").prepend("<img class="+clase+" src="+url+" id="+id);
*/
    $("#mifoto").attr('src',url);

    //NY API
    var NYTURL='';
        $.ajax({
            url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+city+'&sort=newest&api-key='+NYTURL,
            type: 'GET', 
            data: {}, 
            dataType: 'json',
            success: function(data) {
             var articulos=data.response.docs
              for(var k = 0 ;k < articulos.length; k++){
                  console.log(articulos[k]);
                  $("#articulos").append("<li id=li"+k+"><a href="+ articulos[k].web_url+">"+articulos[k].headline.print_headline+"</a></br>"+articulos[k].snippet+"</li>");
                var nart=k;
              }
                
                
            },
            error:function (err) {
                console.log('error')
                $("#articulos").append("<p>Could not find data for" + city+"</p>");
             
            }
        });


    return false;
};

$('#form-container').submit(loadData);


