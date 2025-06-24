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
