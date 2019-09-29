"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactApollo = require("react-apollo");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _archimedes_digitalOrpheusLib = _interopRequireDefault(require("@bit/archimedes_digital.orpheus.lib.get-current-archive-hostname"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tquery projectCoverQuery($hostname: String) {\n\t\tproject(hostname: $hostname) {\n\t    _id\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\tdescription\n\t\t\tfiles {\n\t\t\t\t_id\n\t\t\t\ttype\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var query = (0, _graphqlTag["default"])(_templateObject());
var projectCoverQuery = (0, _reactApollo.graphql)(query, {
  name: 'projectCoverQuery',
  options: function options(_ref) {
    var params = _ref.params;
    return {
      variables: {
        hostname: (0, _archimedes_digitalOrpheusLib["default"])()
      }
    };
  }
});
var _default = projectCoverQuery;
exports["default"] = _default;

//# sourceMappingURL=projectCoverQuery.js.map