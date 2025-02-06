let listaDeTeams = [];

function mostrarOverlay() {
    let modalBG = document.querySelector("#overlay");
    modalBG.classList.remove("invisible", "opacity-0");

}

function esconderOverlay() {
    let modalBG = document.querySelector("#overlay");
    modalBG.classList.add("invisible", "opacity-0");
    esconderCriar();
}

function mostrarCriar() {
    mostrarOverlay()
    let modalBG = document.querySelector("#criar");
    modalBG.classList.remove("invisible", "opacity-0");
}

function esconderCriar() {
    let modalBG = document.querySelector("#criar");
    modalBG.classList.add("invisible", "opacity-0");
}

function criarTeam(){
    event.preventDefault();
    let nomeValue = document.querySelector("#nome").value;
    let capacidadeValue = document.querySelector("#capacidade").value;

    listaDeTeams.push({
        nome:nomeValue,
        capacidade: capacidadeValue,
        participantes:0
    })

    nomeValue = '';
    capacidadeValue = '';

    esconderCriar();
    esconderOverlay();
}
    