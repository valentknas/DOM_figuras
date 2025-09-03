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
    figure.style.background = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2U5OXd1bmY5cHppYmc0eHA4MTk4czMxNXlzN2ZhY3k4cHNyNjM1ciZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/qiMbLh4WHEZyw/giphy.gif";
   }


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella )

})