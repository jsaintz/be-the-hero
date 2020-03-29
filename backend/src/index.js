const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
- Rota / recurso
*/

/*
- Métodos HTTP
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no bacl-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/*
- Tipo de parâmetros:
* Query Params: Parâmetros nomeados enviados na rota após "?" exemplo:(filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
- Bancos de Dados:
* SQL: MySql, Sqlite, PostgreSql, Oracle, Microsoft Sql Server
* NoSQL: MongoDb, CouchDb, etc
* Drivers: SELECT * FROM users
* Query Builder: table('users).select('*).where()
*/

app.listen(3333);