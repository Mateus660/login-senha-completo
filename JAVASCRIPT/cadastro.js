let labelnome = document.getElementById('labelnome')
let nome = document.getElementById('Nome')

function Nomecorr() {
    if (nome.value.length >=1 &&  nome.value.length <=5) {
        labelnome.innerHTML = "No minimo 5 linhas"
        labelnome.style.color = "red"
    } else {
        labelnome.innerHTML = "Nome completo"
        labelnome.style.color = "white"
    }
}