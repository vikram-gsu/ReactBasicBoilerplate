"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    key: "render",
    value: function render() {
      // console.log(this.props)
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Indecision App"
        ),
        React.createElement(
          "h2",
          null,
          "Randomize your life!"
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          {
            onClick: this.props.showRandomOption,
            disabled: !this.props.hasOptions
          },
          "What should I do"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Here are your options:"
        ),
        React.createElement(
          "ul",
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

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        this.props.listitem
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this5.addOption = _this5.addOption.bind(_this5);

    _this5.state = {
      error: undefined
    };
    return _this5;
  }

  _createClass(AddOption, [{
    key: "addOption",
    value: function addOption(e) {
      e.preventDefault();
      var error = this.props.addOption(e.target.elements.option.value);
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.addOption },
          this.state.error && React.createElement(
            "p",
            null,
            this.state.error
          ),
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          ),
          React.createElement(
            "button",
            { onClick: this.props.removeAll },
            "RemoveAll"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Indecision = function (_React$Component6) {
  _inherits(Indecision, _React$Component6);

  function Indecision(props) {
    _classCallCheck(this, Indecision);

    var _this6 = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

    _this6.addOption = _this6.addOption.bind(_this6);
    _this6.removeAllOptions = _this6.removeAllOptions.bind(_this6);
    _this6.showRandomOption = _this6.showRandomOption.bind(_this6);
    _this6.state = {
      options: []
    };
    return _this6;
  }

  _createClass(Indecision, [{
    key: "showRandomOption",
    value: function showRandomOption() {
      var randNbr = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randNbr]);
    }
  }, {
    key: "addOption",
    value: function addOption(option) {
      if (option.trim() == '') {
        return 'Please enter a valid value';
      } else if (this.state.options.indexOf(option) != -1) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return {
          options: [].concat(_toConsumableArray(prevState.options), [option])
        };
      });
    }
  }, {
    key: "removeAllOptions",
    value: function removeAllOptions(e) {
      e.preventDefault();
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: "test" }),
        React.createElement(Action, { showRandomOption: this.showRandomOption, hasOptions: this.state.options.length > 0 }),
        React.createElement(Options, { optionItems: this.state.options }),
        React.createElement(AddOption, { optionItems: this.state.options, addOption: this.addOption,
          removeAll: this.removeAllOptions })
      );
    }
  }]);

  return Indecision;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), document.getElementById('app'));

//# sourceMappingURL=app.js.map