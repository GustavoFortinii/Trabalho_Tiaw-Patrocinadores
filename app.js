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
            {
              "name": "American Express",
              "details": "Oferece benefícios exclusivos para clientes durante eventos como playoffs e All-Star Game, com ativações para público premium."
            },
            {
              "name": "Tissot",
              "details": "Fornecedora oficial de relógios, responsável pelos cronômetros dos jogos, associada à precisão e estilo."
            },
            {
              "name": "AT&T",
              "details": "Empresa de telecomunicações com ampla presença em comerciais e eventos, fornecendo conectividade para a liga."
            },
            {
              "name": "Socios.com, Toyota, Verizon",
              "details": "Cada uma com 20 contratos de patrocínio, dominam setores como tecnologia e automotivo, com ativações em arenas e transmissões."
            },
            {
              "name": "Budweiser, Gatorade, Hellmann’s, Ruffles, Sadia, XP Inc.",
              "details": "No Brasil, patrocinam a NBA House, evento que atrai jovens e reforça a presença da liga no terceiro maior mercado global."
            },
            {
              "name": "Alibaba",
              "details": "Investe em jogadores como Kobe Bryant e possui 51% do Brooklyn Nets, reforçando sua influência no basquete."
            },
            {
              "name": "FTX",
              "details": "Antes de sua falência, investiu US$ 100 milhões no Golden State Warriors, mostrando o interesse do setor de criptomoedas."
            }
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
            {
              "name": "Spalding",
              "details": "Fornecedora oficial de bolas de basquete, essencial para a identidade da liga."
            }
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
            {
              "name": "Nike e Peak",
              "details": "Fornecem uniformes e materiais esportivos, com destaque para times de elite como Flamengo."
            },
            {
              "name": "Empresas de iGaming",
              "details": "Setor emergente, com plataformas de apostas patrocinando times e eventos, aproveitando a popularidade do NBB."
            }
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

    function updateSponsors() {
      currentLeagueIndex = document.getElementById('leagueSelect').value;
      const league = leaguesData.leagues[currentLeagueIndex];
      
      
      const topSponsor = league.sponsors[0];
      const descriptionElement = document.getElementById('sponsorDescription');
      descriptionElement.innerHTML = `
        <strong>${topSponsor.name}</strong><br>
        ${topSponsor.details}
      `;
      
    }

    function showSponsorDetails(sponsorIndex) {
      const league = leaguesData.leagues[currentLeagueIndex];
      const sponsor = league.sponsors[sponsorIndex];
      if (sponsor) {
        const descriptionElement = document.getElementById('sponsorDescription');
        descriptionElement.innerHTML = `
          <strong>${sponsor.name}</strong><br>
          ${sponsor.details}
        `;
      }
    }

  
    updateSponsors();
