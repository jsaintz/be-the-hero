'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_routes2.default);
app.listen(3333);
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
//# sourceMappingURL=index.js.map