webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _Block = __webpack_require__(173);
	
	var _reactGistEmbed = __webpack_require__(181);
	
	var _reactGistEmbed2 = _interopRequireDefault(_reactGistEmbed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(
	  'div',
	  null,
	  _react2.default.createElement(
	    _Block.Content,
	    null,
	    _react2.default.createElement(_reactGistEmbed2.default, { gistId: '6a1957e0609cbc9f28a9277935d91f49' })
	  )
	), document.getElementById('konferense2016-code'));

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var PropTypes = __webpack_require__(32);
	
	// https://developer.zendesk.com/blog/rendering-to-iframes-in-react
	function adjustHeightWhenComplete(myFrame, myDoc) {
	  if(myDoc.readyState === 'complete') {
	    var content_height = myFrame.contentWindow.document.documentElement.scrollHeight;
	    myFrame.style.height = content_height + 'px';
	  } else {
	    // This will be continiously called until the iFrame is ready
	    setTimeout(function(){adjustHeightWhenComplete(myFrame, myDoc)});
	  }
	};
	
	// https://gist.github.com/jeremiahlee/1748966
	var GistEmbed = React.createClass({
	  displayName: 'GistEmbed',
	  propTypes: {
	    gistId: PropTypes.number.isRequired
	  },
	  componentDidMount: function() {
	
	    // Create an iframe, append it to this document where specified
	    var gistFrame = document.createElement("iframe");
	    gistFrame.setAttribute("width", "100%");
	    gistFrame.id = "gistFrame" + this.props.gistId;
	
	    var zone = document.getElementById("gistZone" + this.props.gistId);
	    zone.innerHTML = "";
	    zone.appendChild(gistFrame);
	
	    // Create the iframe's document
	
	    var url = "https://gist.github.com/" + this.props.gistId + ".js";
	    var gistFrameHTML = '<html><body><script type="text/javascript" src=' + url + '></script></body></html>';
	
	    // Set iframe's document with a trigger for this document to adjust the height
	    var gistFrameDoc = gistFrame.document;
	
	    if (gistFrame.contentDocument) {
	      gistFrameDoc = gistFrame.contentDocument;
	    } else if (gistFrame.contentWindow) {
	      gistFrameDoc = gistFrame.contentWindow.document;
	    }
	
	    gistFrameDoc.open();
	    gistFrameDoc.writeln(gistFrameHTML);
	    gistFrameDoc.close();
	
	    adjustHeightWhenComplete(gistFrame, gistFrameDoc);
	  },
	  render: function() {
	    return React.DOM.div({id: 'gistZone' + this.props.gistId});
	  }
	});
	
	module.exports = GistEmbed;


/***/ }

});
//# sourceMappingURL=index-6781d8ae1f3e71358397.js.map