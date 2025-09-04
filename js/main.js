const figure = document.getElementById('figure');

function circulo(){
    figure.style.borderRadius = '50%';
    figure.style.background = "lighblue";
    
}
function estrella(){
    figure.style.borderRadius = '0';
    figure.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
    figure.style.background ="lightblue";

}

function gif(){
    figure.style.backgroundImage = "url('img/sea-16233_128.gif')";
    figure.style.backgroundSize = 'cover';
 
   }

function animacion(){
    figure.classList.add('animado');

}

function arriba (){
    figure.classList.toggle("top");
    figure.style.background = "#18848bff";
}





document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella );
    document.getElementById('btnGif').addEventListener('click', gif );
    document.getElementById('btnAnim').addEventListener('click', animacion );
    document.getElementById('btnMoveUp').addEventListener('click', arriba );

  
    




})