function adicionarJogador() {
    var nome = document.getElementById('nome').value;
    var equipe = document.getElementById('equipe').value;

    if (nome && equipe) {
        var jogadores = localStorage.getItem('jogadores');

        if (jogadores) {
            jogadores = deserializeJogadores(jogadores);
        } else {
            jogadores = [];
        }
        jogadores.push({ nome: nome, equipe: equipe });
        localStorage.setItem('jogadores', serializeJogadores(jogadores));
        document.getElementById('nome').value = '';
        document.getElementById('equipe').value = '';
    }
}
function exibirJogadores() {
    var jogadores = localStorage.getItem('jogadores');
    if (jogadores) {
        jogadores = deserializeJogadores(jogadores);
        var jogadoresHTML = '';
        for (var i = 0; i < jogadores.length; i++) {
            jogadoresHTML += "Nome: " + jogadores[i].nome + "   | Equipe: " + jogadores[i].equipe + '<br>';
        }
        document.getElementById('jogadores').innerHTML = jogadoresHTML;
    }
}
window.onload = exibirJogadores;
function serializeJogadores(jogadores) {
    var serializedJogadores = '';
    for (var i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i];
        serializedJogadores += jogador.nome + '|' + jogador.equipe + ';';
    }
    return serializedJogadores;
}
function deserializeJogadores(Jogadores) {
    var jogadores = [];
    var jogadorInfo = Jogadores.split(';');
    for (var i = 0; i < jogadorInfo.length; i++) {
        if (jogadorInfo[i]) {
            var jogador = jogadorInfo[i].split('|');
            var nome = jogador[0];
            var equipe = jogador[1];
            jogadores.push({ nome: nome, equipe: equipe });
        }
    }
    return jogadores;
}
function limparLocalStorage() {
    localStorage.clear();
    location.reload();
    alert('Os registros foram excluidos');
  }