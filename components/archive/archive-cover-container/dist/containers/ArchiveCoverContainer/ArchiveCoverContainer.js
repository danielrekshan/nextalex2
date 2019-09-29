"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _underscore = _interopRequireDefault(require("underscore"));

var _reactApollo = require("react-apollo");

var _archimedes_digitalOrpheus = _interopRequireDefault(require("@bit/archimedes_digital.orpheus.cover"));

var _projectCoverQuery = _interopRequireDefault(require("../../graphql/queries/projectCoverQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Cover from '../../../../components/common/Cover';
var ArchiveCoverContainer = function ArchiveCoverContainer(props) {
  var project = null;
  var files = [];
  var file;
  var imageUrl = '';
  var images = [];
  console.log("rendering archiveCoverContainer, props: ", props);

  if (props.projectCoverQuery) {
    project = props.projectCoverQuery.project;
  }

  if (project && project.files) {
    files = project.files;
  }

  if (files.length) {
    for (var i = 0; i < files.length; i += 1) {
      file = files[i];
      var fileType = file.type || '';
      var isImage = fileType.slice(0, fileType.indexOf('/')) === 'image';

      if (isImage) {
        images.push(file);
      }
    }

    if (images.length) {
      file = _underscore["default"].sample(images);
      imageUrl = "//iiif.orphe.us/".concat(file.name, "/square/").concat(window.innerWidth, ",/0/default.jpg");
    }
  }

  if (props.projectCoverQuery.loading) {
    return _react["default"].createElement("div", null, _react["default"].createElement(_archimedes_digitalOrpheus["default"], {
      loading: true,
      isArchiveCover: true
    }));
  }

  if (!project) {
    console.log("no project, rendering null");
    return null;
  }

  return _react["default"].createElement("div", null, _react["default"].createElement(_archimedes_digitalOrpheus["default"], {
    title: project.title,
    lead: project.subtitle,
    imageUrl: imageUrl,
    isArchiveCover: true
  }));
};

var _default = (0, _reactApollo.compose)(_projectCoverQuery["default"])(ArchiveCoverContainer);

exports["default"] = _default;

//# sourceMappingURL=ArchiveCoverContainer.js.map