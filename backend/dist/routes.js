'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _OngController = require('./controllers/OngController');

var _IncidentController = require('./controllers/IncidentController');

var _ProfileController = require('./controllers/ProfileController');

var _SessionController = require('./controllers/SessionController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express2.default)();

//login
routes.post('/sessions', _SessionController.create);

//Profile
routes.get('/profile', _ProfileController.index);

//Ongs
routes.get('/ongs', _OngController.index);
routes.post('/ongs', _OngController.create);

//Incidents
routes.get('/incidents', _IncidentController.index);
routes.post('/incidents', _IncidentController.create);
routes.del('/incidents/:id', _IncidentController.delete);

exports.default = routes;
//# sourceMappingURL=routes.js.map