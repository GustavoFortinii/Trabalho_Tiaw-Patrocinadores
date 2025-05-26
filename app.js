const leaguesData = {
      "leagues": [
        {
          "name": "NBA (National Basketball Association)",
          "description": "A liga de basquete mais assistida do mundo, com faturamento de patrocínios de US$ 1,66 bilhão na temporada 2022/2023, crescendo 1,3% no ano seguinte.",
          "sponsors": [
            {
              "name": "Nike",
              "details": "Fornecedora oficial de uniformes desde 2017, com contratos vitalícios com estrelas como LeBron James, Kevin Durant e Michael Jordan (linha Air Jordan). Central na moda e cultura pop do basquete."
            },
            {
              "name": "Coca-Cola",
              "details": "Parceira de longa data, promove marcas como Sprite e Powerade em campanhas publicitárias e eventos como o All-Star Game."
            },
            {
              "name": "PepsiCo",
              "details": "Concorrente da Coca-Cola, destaca-se com Gatorade, Mountain Dew e Pepsi, criando conteúdo para engajar fãs."
            },
            {
              "name": "State Farm",
              "details": "Patrocinadora oficial de seguros, nomeia o 'State Farm All-Star Saturday Night' e tem forte presença em anúncios durante jogos e playoffs."
            },
            
          ],
          "influential_sectors": {
            "Bebidas e Alimentação": "21%",
            "Serviços Financeiros": "14%",
            "Tecnologia": "US$ 122 milhões",
            "Saúde": "US$ 105 milhões"
          }
        },
        {
          "name": "EuroLeague",
          "description": "Principal liga de basquete da Europa, com clubes de elite como Real Madrid e Barcelona. Menos visibilidade global que a NBA, mas com foco em mercados regionais.",
          "sponsors": [
            {
              "name": "Turkish Airlines",
              "details": "Patrocinadora principal, dá nome à competição (Turkish Airlines EuroLeague) desde 2010, com forte presença em arenas e transmissões."
            },
            {
              "name": "Adidas",
              "details": "Fornece uniformes e equipamentos para times e eventos, competindo com a Nike no mercado europeu."
            },
            {
              "name": "Bet365 e outras empresas de apostas",
              "details": "Marcas de apostas esportivas em crescimento, com ativações digitais e promoções durante jogos."
            },
            {
              "name": "Heineken",
              "details": "Presença constante em eventos e anúncios, especialmente em mercados europeus onde a cerveja é culturalmente relevante."
            },
          
          ],
          "influential_sectors": {
            "Avição": "Alta relevância",
            "Apostas Esportivas": "Em crescimento",
            "Marcas Esportivas": "Forte presença"
          }
        },
        {
          "name": "NBB (Novo Basquete Brasil)",
          "description": "Principal liga brasileira, com 58 milhões de fãs e crescente apelo comercial. A LNB oferece plataformas de marketing personalizadas para marcas.",
          "sponsors": [
            {
              "name": "Caixa e Banco do Brasil",
              "details": "Bancos tradicionais que patrocinam times como Flamengo e Franca, com exposição em uniformes e quadras."
            },
            {
              "name": "Brahma",
              "details": "Marca de cerveja com forte presença em jogos, anúncios e ativações, como promoções em ginásios."
            },
            {
              "name": "Ipanema",
              "details": "Farmácia com visibilidade em quadras e eventos, focada no público local."
            },
            {
              "name": "BMG Banco",
              "details": "Patrocinador máster, com exposição em todas as quadras e campanhas de mídia."
            },
            
          ],
          "influential_sectors": {
            "Serviços Financeiros": "Alta relevância",
            "Bebidas": "Forte presença",
            "iGaming": "Em crescimento"
          },
          "impact": "97% dos fãs do NBB compraram produtos de patrocinadores nos últimos seis meses, mostrando forte retorno para as marcas."
        }
      ]
    };

    let currentLeagueIndex = 0;
    let currentSponsorIndex = 0;

    function updateDisplay() {
      currentLeagueIndex = document.getElementById('leagueSelect').value;
      const league = leaguesData.leagues[currentLeagueIndex];
      document.querySelector('.header h1').textContent = `Patrocinadores - ${league.name}`;
      currentSponsorIndex = 0; // Reseta para o primeiro patrocinador ao trocar de liga
      updateSponsors();
    }

    function updateSponsors() {
      const league = leaguesData.leagues[currentLeagueIndex];
      const topSponsor = document.getElementById('topSponsor');
      const topSponsorDetails = document.getElementById('topSponsorDetails');
      const sponsorGrid = document.getElementById('sponsorGrid');

      // Atualiza o Top 1
      topSponsorDetails.innerHTML = `<strong>${league.sponsors[currentSponsorIndex].name}</strong><br>${league.sponsors[currentSponsorIndex].details}`;

      // Cria a grade de patrocinadores (excluindo o atual Top 1)
      sponsorGrid.innerHTML = '';
      for (let i = 0; i < 3 && i + currentSponsorIndex + 1 < league.sponsors.length; i++) {
        const item = document.createElement('div');
        item.className = 'sponsor-item';
        item.textContent = league.sponsors[currentSponsorIndex + i + 1].name;
        item.onclick = () => cycleToSponsor(currentSponsorIndex + i + 1);
        sponsorGrid.appendChild(item);
      }
    }

    function cycleSponsor() {
      const league = leaguesData.leagues[currentLeagueIndex];
      currentSponsorIndex = (currentSponsorIndex + 1) % league.sponsors.length;
      updateSponsors();
    }

    function cycleToSponsor(index) {
      currentSponsorIndex = index;
      updateSponsors();
    }

    // Inicializa a exibição com a NBA
    updateDisplay();