
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

   
    var street=$("#street").val();
    var city=$("#city").val();
    var key='AIzaSyDYqv5UMz5otRTOvGfB8rS-KRHwczz-XjE';
    var url='https://maps.googleapis.com/maps/api/streetview?size=600x300&location='+street+', '+city+'&heading=151.78&pitch=-0.76&key='+key;
    
    console.log(url);
    $("#mifoto").attr('src',url);

    var NYTURL='658f10d4cd10417ca14e9010f9ab0b55';
        $.ajax({
            url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+city+'&sort=newest&api-key='+NYTURL,
            type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json',
            success: function(data) {
             var articulos=data.response.docs
              for(var k = 0 ;k < articulos.length; k++){
                  console.log(articulos[k]);
                  $("#articulos").append("<p><li><a href="+ articulos[k].web_url+">"+articulos[k].headline.print_headline+"</a></br>"+articulos[k].snippet+"</li></p>");
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

