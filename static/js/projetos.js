document.getElementById('projetos').style.backgroundColor = '#147072'
document.getElementById('projetos').style.color = '#fff'
document.getElementById('sidebar-lower').style.borderColor = '#147072'
document.getElementsByClassName('container')[0].style.backgroundColor = 'rgb(20, 112, 114, 0.1)'
document.querySelector(":root").style.setProperty("--footBorderColor", "#147072")


let carrosselArray = [["../static/images/projetos/carrosel/podcastBanner.png", "Podcast", "https://www.google.com"], ["../static/images/projetos/carrosel/exterminandoDrogasBanner.png", "Exterminando Drogas", "https://www.youtube.com"]];
let carrossel = document.querySelector(".carrossel");
let carrosselLink = carrossel.childNodes[1];
let carrosselImage = carrossel.childNodes[1].childNodes[1];


let countIndexCarrosel = 0;
carrosselLink.href = carrosselArray[countIndexCarrosel][2];
carrosselImage.alt = carrosselArray[countIndexCarrosel][1];
carrosselImage.src = carrosselArray[countIndexCarrosel][0];


carrosselArray.forEach((element, index) => {
    let newBtnCarrossel = document.createElement("button");
    newBtnCarrossel.innerText = (index + 1).toString();

    newBtnCarrossel.addEventListener("click", () => {
        carrosselLink.href = carrosselArray[index][2];
        carrosselImage.alt = carrosselArray[index][1];
        carrosselImage.src = carrosselArray[index][0];
        countIndexCarrosel = index;
        destacarBtn(countIndexCarrosel);
    })

    carrossel.childNodes[3].appendChild(newBtnCarrossel);
})


destacarBtn(countIndexCarrosel);


setInterval(() => {
    countIndexCarrosel++;
    if (countIndexCarrosel > (carrosselArray.length - 1)) {
        countIndexCarrosel = 0;
    }
    carrosselLink.href = carrosselArray[countIndexCarrosel][2];
    carrosselImage.alt = carrosselArray[countIndexCarrosel][1];
    carrosselImage.src = carrosselArray[countIndexCarrosel][0];
    destacarBtn(countIndexCarrosel);
}, 5000)


function destacarBtn(countIndexCarrosel){
    for(let i=1;i<carrossel.childNodes[3].childNodes.length;i++){
        if (countIndexCarrosel === (i-1)) {
            carrossel.childNodes[3].childNodes[i].style.border = "2px solid black"
        } else {
            carrossel.childNodes[3].childNodes[i].style.border = "0px";
        }
    }
}