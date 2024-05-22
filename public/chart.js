document.addEventListener('DOMContentLoaded', function() {
// objeto literal com os dados 
      const dados = {
        Janeiro: 
        {
          Ásia: 25,
          Europa: 100,
          América: 200,
          Oceania: 15,
          África: 120
        },
        Fevereiro:         {
          Ásia: 50,
          Europa: 200,
          América: 150,
          Oceania: 40,
          África: 210
        },
        Março:         {
          Ásia: 170,
          Europa: 420,
          América: 500,
          Oceania: 154,
          África: 505
        },
        Abril:         {
          Ásia: 50,
          Europa: 150,
          América: 160,
          Oceania: 40,
          África: 200
        },
        Maio:         {
          Ásia: 100,
          Europa: 180,
          América: 240,
          Oceania: 190,
          África: 210
        },
        Junho:         {
          Ásia: 200,
          Europa: 340,
          América: 343,
          Oceania: 110,
          África: 290
        },
        Julho:         {
          Ásia: 210,
          Europa: 390,
          América: 380,
          Oceania: 190,
          África: 345
        },
        Agosto:         {
          Ásia: 190,
          Europa: 389,
          América: 380,
          Oceania: 150,
          África: 401
        },
        Setembro:         {
          Ásia: 200,
          Europa: 300,
          América: 320,
          Oceania: 201,
          África: 330
        },
        Outubro:         {
          Ásia: 100,
          Europa: 290,
          América: 270,
          Oceania: 198,
          África: 260
        },
        Novembro:         {
          Ásia: 100,
          Europa: 150,
          América: 170,
          Oceania: 140,
          África: 190
        },
        Dezembro:         {
          Ásia: 200,
          Europa: 450,
          América: 460,
          Oceania: 210,
          África: 380
        }
      };
  
      function Meses() {
      return Object.keys(dados);
    }

    // obter os dados de um continente específico para todos os meses
    function MesContinente(continente) {
      const meses = Meses();
      return meses.map(mes => dados[mes][continente]); //map(mes=> ...) é respondavel por iterar um array e fornecer um novo array com os dados agora solicitados
    }

    // Configurando o grafico
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    const meuGrafico = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Meses(),
        datasets: [{
          label: 'Ásia',
          data: MesContinente('Ásia'),
          backgroundColor: 'RGBA(255, 204, 0, 0.2)',
          borderColor: 'RGBA(255, 204, 0, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Europa',
          data: MesContinente('Europa'),
          backgroundColor: 'rgba(102, 153, 255, 0.2)',
          borderColor: 'rgba(102, 153, 255, 0.5)',
          borderWidth: 1
        },
        {
          label: 'América',
          data: MesContinente('América'),
          backgroundColor: 'rgba(255, 102, 102, 0.2)',
          borderColor: 'rgba(255, 102, 102, 0.5)',
          borderWidth: 1
        },
        {
          label: 'África',
          data: MesContinente('África'),
          backgroundColor: 'rgba(204, 153, 102, 0.2)',
          borderColor: 'rgba(204, 153, 102, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Oceania',
          data: MesContinente('Oceania'),
          backgroundColor: 'rgba(102, 204, 255, 0.2)',
          borderColor: 'rgba(102, 204, 255, 0.5)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
});