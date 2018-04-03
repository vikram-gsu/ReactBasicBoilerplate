'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Indecision App'
        ),
        React.createElement(
          'h2',
          null,
          'Randomize your life!'
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Options = function (_React$Component2) {
  _inherits(Options, _React$Component2);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Here are your options:'
        ),
        React.createElement(
          'ul',
          null,
          this.props.optionItems.map(function (o) {
            return React.createElement(Option, { key: o, listitem: o });
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component3) {
  _inherits(Option, _React$Component3);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        null,
        this.props.listitem
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component4) {
  _inherits(AddOption, _React$Component4);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          null,
          React.createElement('input', { type: 'text' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Indecision = function (_React$Component5) {
  _inherits(Indecision, _React$Component5);

  function Indecision() {
    _classCallCheck(this, Indecision);

    return _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).apply(this, arguments));
  }

  _createClass(Indecision, [{
    key: 'render',
    value: function render() {
      var options = ['Option 1', 'Option 2', 'Option 4'];
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: 'test' }),
        React.createElement(Options, { optionItems: options }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return Indecision;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), document.getElementById('app'));

//# sourceMappingURL=app.js.map