//Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skill = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skill.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("react")
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("responsabilidad");
    }
}
//scrolling para aplicar la animacion de barra
window.onscroll = function(){
    efectoHabilidades();
}
