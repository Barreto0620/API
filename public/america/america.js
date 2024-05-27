fetch("http://localhost:8080/America")
  .then((response) => response.json())
  .then((data) => {
    const americaList = document.getElementById("america-list");
    data.forEach((America) => {
      const americaDiv = document.createElement("div");
      americaDiv.innerHTML = ` 
      <div class="container_paises">
      <img src="${America.imagem}" alt="${America.nome}">
      <div class="text_desc">
      <h2 class="nome_pais">${America.nome}</h2>
      <p><strong>Data do Próximo Vôo:</strong> ${America.dia_da_viagem}</p>
      <p><strong>Ponto Turistico:</strong> ${America.ponto_turistico}</p>
      <p><strong>Temporada:</strong> ${America.temporada}</p>
      <p><strong>Moeda Oficial:</strong> ${America.moeda}</p>
      <p><strong>Por que Visitar:</strong> ${America.porque_visitar}</p>
      <p><strong>Avaliação do País:</strong> ${America.avaliacao}</p>
      <p><strong>Valor da viagem:</strong> ${America.valor_da_viagem}</p>
      <button onclick="comprarPassagem('${America.nome}')">Comprar Passagem</button>
      </div>
      </div>`;
    americaList.appendChild(americaDiv);
    });
  })
  .catch((error) => console.error("Erro ao carregar os países:", error));

function comprarPassagem(nomeDoPais) {
  // Aqui você pode personalizar a mensagem de acordo com o país selecionado
  Swal.fire({
    icon: 'warning',
    title: 'Passagem Esgotada!',
    text: `Infelizmente as passagens para ${nomeDoPais} estão esgotadas no momento.`,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Entendi'
  });
}

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function search_bar() {
    var input, filter, americaDiv, countryDiv, countryName, i, txtValue;
    input = removeAccents(document.getElementById('searchInput').value.toUpperCase());
    filter = input.toUpperCase();
    americaDiv = document.getElementById('america-list');
    countryDiv = americaDiv.getElementsByClassName('container_paises');

    for (i = 0; i < countryDiv.length; i++) {
        countryName = removeAccents(countryDiv[i].getElementsByClassName('nome_pais')[0].textContent || countryDiv[i].getElementsByClassName('nome_pais')[0].innerText);
        if (countryName.toUpperCase().indexOf(filter) > -1) {
            countryDiv[i].style.display = "";
        } else {
            countryDiv[i].style.display = "none";
        }
    }
}
