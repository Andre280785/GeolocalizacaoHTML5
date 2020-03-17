var x=document.getElementById("demo");
            
              
function getLocation()
{   
  if (navigator.geolocation)
  {
     navigator.geolocation.getCurrentPosition(showPosition,showError);
  }
    else{x.innerHTML="Geolocalização não é suportada nesse browser.";}
  }
               
  //Método para tratar erros ao obter a localização atual do usuário
function showError(error)
{
  switch(error.code) 
  {
    case error.PERMISSION_DENIED:
      x.innerHTML="Usuário rejeitou a solicitação de Geolocalização."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Localização indisponível."
      break;
    case error.TIMEOUT:
      x.innerHTML="O tempo da requisição expirou."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="Algum erro desconhecido aconteceu."
      break;
    }
  }
                
  //Usando a API do Google Maps para apresentar a localização atual do usuário
function showPosition(position)
{
  lat=position.coords.latitude;
  lon=position.coords.longitude;
                    
  x.innerHTML='Voce esta na latitude: ' + lat + ' e na longitude ' + lon;
                    
  latlon=new google.maps.LatLng(lat, lon)
  mapaholder=document.getElementById('mapaholder')
  mapaholder.style.height='500px';
  mapaholder.style.width='500px';
                   
  var myOptions=
  {
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };
  var map=new google.maps.Map(document.getElementById("mapaholder"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"Você está Aqui!"});
}