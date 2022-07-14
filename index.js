
let btn = document.getElementById('check-location');
let text = document.getElementById('text');


function showPosition(e){
   text.innerHTML = `Latitude: ${e.coords.latitude}<br>Longitude: ${e.coords.longitude}`
   
}
btn.onclick = ()=>{
   if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition)
   }else{
      alert('Browser does not support geo location')
   }
}