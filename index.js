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
    mostrarOverlay();

    let modalCriar = document.querySelector("#criar");
    modalCriar.classList.remove("invisible", "opacity-0");

}

function esconderCriar() {
    let modalCriar = document.querySelector("#criar");
    modalCriar.classList.add("invisible", "opacity-0");
}

function criarTeam() {
    event.preventDefault();
    let nomeValue = document.querySelector("#nome").value;
    let capacidadeValue = document.querySelector("#capacidade").value;

    listaDeTeams.push({
        nome: nomeValue,
        capacidade: capacidadeValue,
        participantes: 0
    })

    nomeValue = '';
    capacidadeValue = '';

    esconderCriar();
    esconderOverlay();
    carregarTeams(listaDeTeams);
}

function adicionarParticipante(nomeTeam) {
    let teamEncontrado = listaDeTeams.find(team => team.nome === nomeTeam);
    if (teamEncontrado && teamEncontrado.participantes < teamEncontrado.capacidade) {
      teamEncontrado.participantes++;
    }
    carregarTeams(listaDeTeams);
  }

function carregarTeams(lista) {
    let teamsGrid = document.querySelector("#teams");
    teamsGrid.innerHTML = '';
    lista.map(team => {
        teamsGrid.innerHTML += `
            <div class="bg-cinza2 rounded-lg p-4">
                <div class="flex items-center justify-between">
                    <h6 class="text-white text-[18px] font-bold">${team.nome}</h6>
                    <box-icon name='show' type='solid' class="fill-white cursor-pointer duration-200 hover:fill-rosa" onclick="mostrarParticipantes('${team.nome}')"></box-icon>
                </div>
                <div class="w-[100px] h-[100px] rounded-full bg-cinza1 flex flex-col justify-center items-center m-auto my-[26px]">
                    <h1 class="text-white text-[50px] leading-[50px]">${team.participantes}</h1>
                    <h6 class="font-bold text-white">/ ${team.capacidade}</h6>
                </div>
                <div class="flex gap-4">
                    <button class="flex-1 h-[40px] flex items-center border-2 border-rosa rounded-lg text-white text-[12px] uppercase font-bold relative group" onclick="adicionarParticipante('${team.nome}')">
                        <span class="w-0 h-full absolute top-0 left-0 bg-rosa duration-200 group-hover:w-full"></span>
                        <span class="w-full relative z-10 text-center">Adicionar</span>
                    </button>
                    <button class="w-[40px] h-[40px] flex justify-center items-center border-2 border-rosa rounded-lg text-white text-[12px] uppercase font-bold relative group" onclick="excluirTeam('${team.nome}')">
                        <span class="w-0 h-full absolute top-0 left-0 bg-rosa duration-200 group-hover:w-full"></span>
                        <box-icon name='trash' class="fill-white relative z-10"></box-icon>
                    </button>
                </div>
            </div>
        `;
    })
}

function excluirTeam(nomeTeam){
    listaDeTeams = listaDeTeams.filter(team => team.nome !== nomeTeam);
    carregarTeams(listaDeTeams);
}

function buscarTeam() {
    let inputBuscar = document.querySelector("input[type='text']");
    let valorBuscar = inputBuscar.value.toLowerCase();
    let teamsEncontrados = listaDeTeams.filter(team => team.nome.toLowerCase().includes(valorBuscar) || team.participantes.toString().includes(valorBuscar));
    carregarTeams(teamsEncontrados);
  }

  function mostrarParticipantes(nomeTeam) {
    let teamEncontrado = listaDeTeams.find(team => team.nome === nomeTeam);
    if (teamEncontrado) {
      alert(Participantes do time ${teamEncontrado.nome}: ${teamEncontrado.participantes});
    }
  }