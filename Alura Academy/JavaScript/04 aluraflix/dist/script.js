var filmeImagem = document.querySelector("#filmeImagem"); 
var arrayFilmes = [];
var listaFilmes = ["Rush Hour", "Sonic", "Transformers"]

var capaFilmes = ["https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var linkFilmes = ["https://pt.wikipedia.org/wiki/Rush_Hour", "https://pt.wikipedia.org/wiki/Sonic_-_O_Filme", "https://pt.wikipedia.org/wiki/Transformers_-_O_Filme"]

for (var i = 0; i < listaFilmes.length; i++) {
  arrayFilmes.push("<a href=" + linkFilmes[i] + "target=_blanc >" + "<div class='filme_imagem'>" +"<img src=" + capaFilmes[i] + ">" + "<h2 class='filme_imagem_text'>" + listaFilmes[i] + "</h2>" + "</div>")
}

filmeImagem.innerHTML = arrayFilmes.join('')