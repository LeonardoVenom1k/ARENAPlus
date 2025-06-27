document.addEventListener('DOMContentLoaded', function() {
  const inputFiltro = document.getElementById('filtroCanais');

  inputFiltro.addEventListener('input', function() {
    const termo = inputFiltro.value.toLowerCase();
    const canais = document.querySelectorAll('.item-canal');
    const categorias = document.querySelectorAll('.container-canais');

    canais.forEach(function(canal) {
      const nome = canal.querySelector('.nome-canal').innerText.toLowerCase();

      if (nome.includes(termo) || termo === "") {
        canal.style.display = 'block';
      } else {
        canal.style.display = 'none';
      }
    });

    categorias.forEach(function(categoria) {
      const canaisVisiveis = categoria.querySelectorAll('.item-canal');
      let algumVisivel = false;

      canaisVisiveis.forEach(function(canal) {
        if (canal.style.display !== 'none') {
          algumVisivel = true;
        }
      });

      if (termo === "") {
        // Se o filtro estiver vazio, mostra tudo normalmente
        categoria.querySelector('h2').style.display = 'block';
      } else {
        // Se tem canal visível, mostra o h2, senão esconde
        categoria.querySelector('h2').style.display = algumVisivel ? 'block' : 'none';
      }
    });
  });
});

// Filmes
document.addEventListener("DOMContentLoaded", () => {
  const inputFiltro = document.getElementById("filtroFilmes");
  const containers = document.querySelectorAll(".container-filmes");

  inputFiltro.addEventListener("input", () => {
    const filtro = inputFiltro.value.toLowerCase();

    containers.forEach((container) => {
      const filmes = container.querySelectorAll(".item-filme");
      let temFilmeVisivel = false;

      filmes.forEach((filme) => {
        const titulo = filme.querySelector(".titulo-filme").textContent.toLowerCase();

        if (titulo.includes(filtro)) {
          filme.style.display = "block";
          temFilmeVisivel = true;
        } else {
          filme.style.display = "none";
        }
      });

      // mostra ou esconde o h2 baseado se tem filme visível
      const tituloSecao = container.querySelector("h2");
      if (temFilmeVisivel) {
        tituloSecao.style.display = "block";
      } else {
        tituloSecao.style.display = "none";
      }
    });
  });
});


