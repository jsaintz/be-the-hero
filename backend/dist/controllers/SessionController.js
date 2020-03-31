'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = undefined;

var create = exports.create = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resquest, response) {
        var id, ong;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        id = resquest.body.id;
                        _context.next = 3;
                        return (0, _connection2.default)('ongs').where('id', id).select('name').first();

                    case 3:
                        ong = _context.sent;

                        if (ong) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return', response.status(400).json({ error: 'No ONG found with this ID' }));

                    case 6:
                        return _context.abrupt('return', response.json(ong));

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function create(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _connection = require('../database/connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=SessionController.js.map