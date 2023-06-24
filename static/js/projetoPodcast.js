document.getElementById('projetos').style.backgroundColor = '#147072'
document.getElementById('projetos').style.color = '#fff'
document.getElementById('sidebar-lower').style.borderColor = '#147072'
document.getElementsByClassName('container')[0].style.backgroundColor = 'rgb(20, 112, 114, 0.1)'
document.querySelector(":root").style.setProperty("--footBorderColor", "#147072")


let mostrarMaisBtns = document.querySelectorAll(".mostrarMaisBtnPodcast");
mostrarMaisBtns.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText === "Mostrar mais") {
            element.innerText = "Mostrar menos";
            element.parentNode.childNodes[1].style.display = "inline";
        } else {
            element.innerText = "Mostrar mais"
            element.parentNode.childNodes[1].style.display = "none";
            
        }
    })
});

let mostrarEpBtns = document.querySelectorAll(".mostrarEpBtnPodcast");
mostrarEpBtns.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText === "Mostrar episodio") {
            element.innerText = "Esconder episodio";
            element.parentNode.childNodes[5].style.display = "inline";
        } else {
            element.innerText = "Mostrar episodio"
            element.parentNode.childNodes[5].style.display = "none";
        }
    })
});