const btnSubmit$ = document.querySelectorAll('.btnSubmit');
var txtT$ = document.getElementById('txtT');
var txtQ$ = document.getElementById('txtQ');
var txtX$ = document.getElementById('txtX');
var pDisplay$ = document.getElementById('pDisplay');

btnSubmit$.forEach(function (btnSubmit$) {
    btnSubmit$.addEventListener("click", function (event) {
        start()
    })
})

function start(){

    var T = txtT$.value;
    var Q = txtQ$.value;
    var X = txtX$.value;
    
    //Somatorio de todos os jogadores se reposicionando
    var jogadores = 0;
    var clock = 0;

    while(clock < X - 1){
        jogadores += Q - (clock + 1);
        clock++;
    }


    //Somatorio dos jogadores livres em relação ao passe
    var jogadoresLivres = (Q - X) * (T - (X -1));


    //Somatorio de todos os jogadores 
    var somatorioJogadores = jogadores + jogadoresLivres;

    pDisplay$.innerHTML = somatorioJogadores;

}