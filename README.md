# 🥊 API UFC Champions

API RESTful para gerenciamento do catálogo de campeões do UFC e suas estatísticas de carreira.

## 📌 Sumário

* [Visão Geral](#-visão-geral)

* [Endpoints da API](#-endpoints-da-api)

  * [GET /champions](#get-champions)

  * [POST /champions](#post-champions)

## 📖 Visão Geral

Esta API foi desenvolvida para armazenar e listar informações detalhadas sobre lutadores campeões do UFC, como categoria de peso, cartel de vitórias/derrotas e quantidade de defesas de cinturão.

## 🚀 Endpoints da API

### `GET /champions`

Retorna a listagem de todos os campeões cadastrados no banco de dados.

#### Parâmetros de Requisição

> Nenhum parâmetro é necessário.

#### Respostas

* **`200 OK`**: Retorna a lista de campeões cadastrados.

  ```
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
  
  ```

* **`500 Internal Server Error`**: Ocorreu uma falha no servidor (ex: erro de comunicação com o banco de dados).

  ```
  {
    "message": "Erro interno do servidor!"
  }
  
  ```

### `POST /champions`

Cadastra um novo campeão no banco de dados.

#### Parâmetros do Corpo (`Body`)

| **Campo** | **Tipo** | **Obrigatório** | **Descrição** | 
| `name` | `string` | **Sim** | Nome do campeão | 
| `category` | `string` | **Sim** | Categoria de peso | 
| `nickname` | `string` | Não | Apelido do campeão | 
| `country` | `string` | Não | País de origem | 
| `wins` | `number` | Não | Número total de vitórias | 
| `losses` | `number` | Não | Número total de derrotas | 
| `defenses` | `number` | Não | Defesas de título bem-sucedidas | 

#### Exemplo de Requisição

```
{
  "name": "Charles Oliveira",
  "nickname": "Do Bronx",
  "category": "Peso Leve",
  "country": "Brasil",
  "wins": 34,
  "losses": 10,
  "defenses": 1
}

```

#### Respostas

* **`201 Created`**: Campeão cadastrado com sucesso.

  ```
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
  
  ```

* **`400 Bad Request`**: Dados enviados são inválidos ou faltam campos obrigatórios.

  ```
  {
    "message": "Champion validation failed: name: Path `name` is required."
  }
  
  ```

* **`500 Internal Server Error`**: Ocorreu uma falha interna no servidor.

  ```
  {
    "message": "Erro interno do servidor!"
  }
  
  ```
