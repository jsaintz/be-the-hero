'use strict';

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _connection = require('../database/connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = {
    index: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
            var ongs;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _connection2.default)('ongs').select('*');

                        case 2:
                            ongs = _context.sent;
                            return _context.abrupt('return', response.json(ongs));

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function index(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return index;
    }(),
    create: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response) {
            var _request$body, name, email, whatsapp, city, uf, id;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _request$body = request.body, name = _request$body.name, email = _request$body.email, whatsapp = _request$body.whatsapp, city = _request$body.city, uf = _request$body.uf;
                            id = _crypto2.default.randomBytes(4).toString('HEX');
                            _context2.next = 4;
                            return (0, _connection2.default)('ongs').insert({
                                id: id,
                                name: name,
                                email: email,
                                whatsapp: whatsapp,
                                city: city,
                                uf: uf
                            });

                        case 4:
                            return _context2.abrupt('return', response.json({ id: id }));

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function create(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return create;
    }()
};
//# sourceMappingURL=OngController.js.map