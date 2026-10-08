API UFC Champions

Esta API é utilizada para gerenciar um catálogo de campeões do UFC, permitindo operações sobre os lutadores e suas estatísticas.

Endpoints

- GET /champions
Esse endpoint é responsável por retornar a listagem de todos os campeões cadastrados no banco de dados.

Parâmetros:
Nenhum

Respostas:

OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os campeões.
Exemplo de resposta:
[
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

Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.
Exemplo de resposta:
{
    "message": "Erro interno do servidor!"
}


- POST /champions
Esse endpoint é responsável por cadastrar um novo campeão no banco de dados.

Parâmetros:
name: Nome do campeão.
nickname: Apelido do campeão (opcional).
category: Categoria de peso do campeão.
country: País de origem do campeão (opcional).
wins: Número de vitórias (opcional).
losses: Número de derrotas (opcional).
defenses: Defesas de título bem-sucedidas (opcional).

Exemplo de requisição:
{
    "name": "Charles Oliveira",
    "nickname": "Do Bronx",
    "category": "Peso Leve",
    "country": "Brasil",
    "wins": 34,
    "losses": 10,
    "defenses": 1
}

Respostas:

Criado! 201
Caso essa resposta aconteça, o novo campeão foi criado com sucesso.
Exemplo de resposta:
{
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

Requisição Inválida! 400
Caso essa resposta aconteça, significa que os dados enviados são inválidos ou faltam campos obrigatórios.
Exemplo de resposta:
{
    "message": "Champion validation failed: name: Path `name` is required."
}

Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.
Exemplo de resposta:
{
    "message": "Erro interno do servidor!"
}
