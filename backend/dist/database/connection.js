'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _knexfile = require('../../knexfile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = (0, _knex2.default)(_knexfile.development);

exports.default = connection;
//# sourceMappingURL=connection.js.map