"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.showRandomOption,
        disabled: !props.hasOptions
      },
      "What should I do"
    )
  );
};

var Options = function Options(props) {
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
      props.optionItems.map(function (o) {
        return React.createElement(Option, { key: o, listitem: o, removeOption: props.removeOption });
      })
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    "li",
    null,
    props.listitem,
    React.createElement(
      "button",
      { onClick: function onClick(e) {
          return props.removeOption(props.listitem);
        } },
      "x"
    )
  );
};

var AddOption = function (_React$Component) {
  _inherits(AddOption, _React$Component);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this.addOption = _this.addOption.bind(_this);

    _this.state = {
      error: undefined
    };
    return _this;
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

var Indecision = function (_React$Component2) {
  _inherits(Indecision, _React$Component2);

  function Indecision(props) {
    _classCallCheck(this, Indecision);

    var _this2 = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

    _this2.addOption = _this2.addOption.bind(_this2);
    _this2.removeAllOptions = _this2.removeAllOptions.bind(_this2);
    _this2.showRandomOption = _this2.showRandomOption.bind(_this2);
    _this2.removeOption = _this2.removeOption.bind(_this2);
    _this2.state = {
      options: []
    };
    return _this2;
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
    key: "removeOption",
    value: function removeOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (o) {
            return o != option;
          })
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
        React.createElement(Header, { subtitle: "Randomize your life!" }),
        React.createElement(Action, { showRandomOption: this.showRandomOption, hasOptions: this.state.options.length > 0 }),
        React.createElement(Options, { optionItems: this.state.options,
          removeOption: this.removeOption }),
        React.createElement(AddOption, { optionItems: this.state.options,
          addOption: this.addOption,
          removeAll: this.removeAllOptions })
      );
    }
  }]);

  return Indecision;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), document.getElementById('app'));

//# sourceMappingURL=app.js.map