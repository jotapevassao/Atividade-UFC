🥊 API UFC ChampionsAPI RESTful para gerenciamento do catálogo de campeões do UFC e suas estatísticas de carreira.📌 SumárioVisão GeralEndpoints da APIGET /championsPOST /champions📖 Visão GeralEsta API foi desenvolvida para armazenar e listar informações detalhadas sobre lutadores campeões do UFC, como categoria de peso, cartel de vitórias/derrotas e quantidade de defesas de cinturão.🚀 Endpoints da APIGET /championsRetorna a listagem de todos os campeões cadastrados no banco de dados.Parâmetros de RequisiçãoNenhum parâmetro é necessário.Respostas200 OK: Retorna a lista de campeões cadastrados.[
  {
    "id": "Lutador 1",
    "name": "Alex Pereira",
    "nickname": "Poatan",
    "category": "Meio-Pesado",
    "country": "Brasil",
    "stats": {
      "wins": 12,
      "losses": 2,
      "defenses": 3
    }
  },
  {
    "id": "Lutador 2",
    "name": "Charles Oliveira",
    "nickname": "Do Bronx",
    "category": "Peso Leve",
    "country": "Brasil",
    "stats": {
      "wins": 34,
      "losses": 10,
      "defenses": 1
    }
  }
]
500 Internal Server Error: Ocorreu uma falha no servidor (ex: erro de comunicação com o banco de dados).{
  "message": "Erro interno do servidor!"
}
POST /championsCadastra um novo campeão no banco de dados.Parâmetros do Corpo (Body)CampoTipoObrigatórioDescriçãonamestringSimNome do campeãocategorystringSimCategoria de pesonicknamestringNãoApelido do campeãocountrystringNãoPaís de origemwinsnumberNãoNúmero total de vitóriaslossesnumberNãoNúmero total de derrotasdefensesnumberNãoDefesas de título bem-sucedidasExemplo de Requisição{
  "name": "Charles Oliveira",
  "nickname": "Do Bronx",
  "category": "Peso Leve",
  "country": "Brasil",
  "wins": 34,
  "losses": 10,
  "defenses": 1
}
Respostas201 Created: Campeão cadastrado com sucesso.{
  "_id": "6abeecfe91e3d343be4bf443",
  "name": "Charles Oliveira",
  "nickname": "Do Bronx",
  "category": "Peso Leve",
  "country": "Brasil",
  "stats": {
    "wins": 34,
    "losses": 10,
    "defenses": 1
  },
  "__v": 0
}
400 Bad Request: Dados enviados são inválidos ou faltam campos obrigatórios.{
  "message": "Champion validation failed: name: Path `name` is required."
}
500 Internal Server Error: Ocorreu uma falha interna no servidor.{
  "message": "Erro interno do servidor!"
}
