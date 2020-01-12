  
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var img = document.querySelector('#img');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=1fa425683676372664dc3e59a35fef3b')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var imgValue = data['weather'][0]['icon'];
  var backgroundimg = data['weather'][0]['main']; 

  main.innerHTML = nameValue;
  desc.innerHTML = "Descripcion - "+descValue;
  temp.innerHTML = tempValue + " Fº";
  img.src = "http://openweathermap.org/img/wn/"+imgValue+".png" ; 

  input.value ="";
  switch(backgroundimg){
      case 'Clear':
          document.body.style.backgroundImage = 'url("https://i.imgur.com/g2hyeVO.jpg")'
          break;
      case 'Clouds' :
          document.body.style.backgroundImage = 'url("hhttps://i.imgur.com/QYTQGgv.jpg")'
      break;  

      case 'Rain':
          document.body.style.backgroundImage = 'url("https://i.imgur.com/AMI8dF0.jpg")'
      break;

      case 'Snow':
         document.body.style.backgroundImage = 'url("https://i.imgur.com/Ks6SuIJ.jpg")'
      break; 
      case 'Thunderstorm' :
          document.body.style.backgroundImage = 'url("hhttps://i.imgur.com/bTvKYeb.jpg")'
      break; 
      default:
      break;
      
  }




})

.catch(err => alert("Error en el Nombre de la Ciudad"));
})