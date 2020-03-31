'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.del = exports.creat = exports.index = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var index = exports.index = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
        var _request$query$page, page, _ref2, _ref3, count, incidents;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _request$query$page = request.query.page, page = _request$query$page === undefined ? 1 : _request$query$page;
                        _context.next = 3;
                        return (0, _connection2.default)('incidents').count();

                    case 3:
                        _ref2 = _context.sent;
                        _ref3 = _slicedToArray(_ref2, 1);
                        count = _ref3[0];

                        console.log(count);
                        _context.next = 9;
                        return (0, _connection2.default)('incidents').join('ongs', 'ongs.id', '=', 'incidents.ong_id').limit(5).offset((page - 1) * 5).select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

                    case 9:
                        incidents = _context.sent;

                        response.header('X-Total-Count', count['count(*)']);
                        return _context.abrupt('return', response.json(incidents));

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function index(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var creat = exports.creat = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response) {
        var _request$body, title, description, value, ong_id, _ref5, _ref6, id;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _request$body = request.body, title = _request$body.title, description = _request$body.description, value = _request$body.value;
                        ong_id = request.headers.authorization;
                        _context2.next = 4;
                        return (0, _connection2.default)('incidents').insert({
                            title: title,
                            description: description,
                            value: value,
                            ong_id: ong_id
                        });

                    case 4:
                        _ref5 = _context2.sent;
                        _ref6 = _slicedToArray(_ref5, 1);
                        id = _ref6[0];
                        return _context2.abrupt('return', response.json({ id: id }));

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function creat(_x3, _x4) {
        return _ref4.apply(this, arguments);
    };
}();

var del = exports.del = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response) {
        var id, ong_id, incident;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        id = request.params.id;
                        ong_id = request.headers.authorization;
                        _context3.next = 4;
                        return (0, _connection2.default)('incidents').where('id', id).select('ong_id').first();

                    case 4:
                        incident = _context3.sent;

                        if (!(incident.ong_id !== ong_id)) {
                            _context3.next = 7;
                            break;
                        }

                        return _context3.abrupt('return', response.status(401).json({ error: 'Operation not permitted.' }));

                    case 7:
                        _context3.next = 9;
                        return (0, _connection2.default)('incidents').where('id', id).delete();

                    case 9:
                        return _context3.abrupt('return', response.status(204).send());

                    case 10:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function del(_x5, _x6) {
        return _ref7.apply(this, arguments);
    };
}();

var _connection = require('../database/connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=IncidentController.js.map