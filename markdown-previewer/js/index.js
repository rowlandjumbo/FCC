var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true });


//textArea component
var TextArea = function TextArea(props) {
  return (
    React.createElement("div", null,
      React.createElement("h1", { "class": "title col-xl-12" }, "Editor"),
      React.createElement("textarea", { "class": "col-xl-12", id: "editor", placeholder: "html editor ...", onChange: props.onChangeUpdater }, props.defaultText)));


};

//previewer component
var PreviewComp = function (_React$Component) {_inherits(PreviewComp, _React$Component);function PreviewComp() {_classCallCheck(this, PreviewComp);return _possibleConstructorReturn(this, (PreviewComp.__proto__ || Object.getPrototypeOf(PreviewComp)).apply(this, arguments));}_createClass(PreviewComp, [{ key: "createMarkup", value: function createMarkup()

    {
      return { __html: marked(this.props.markdown) };
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement("h1", { "class": "title col-xl-12" }, "Markdown Previewer"),
          React.createElement("div", { "class": "col-xl-12", id: "preview", dangerouslySetInnerHTML: this.createMarkup() })));



    } }]);return PreviewComp;}(React.Component);


//class MarkdownPrev App
var MarkdownPrev = function (_React$Component2) {_inherits(MarkdownPrev, _React$Component2);
  function MarkdownPrev(props) {_classCallCheck(this, MarkdownPrev);var _this2 = _possibleConstructorReturn(this, (MarkdownPrev.__proto__ || Object.getPrototypeOf(MarkdownPrev)).call(this,
    props));
    var defaultMarkdown = "# Welcome to my React Markdown Previewer!\n\n  ## This is a sub-heading...\n  ### And here's some other cool stuff:\n    \n  Heres some code, `<div></div>`, between 2 backticks.\n\n  ```\n  // this is multi-line code:\n\n  function anotherExample(firstLine, lastLine) {\n    if (firstLine == '```' && lastLine == '```') {\n      return multiLineCode;\n    }\n  }\n  ```\n    \n  You can also make text **bold**... whoa!\n  Or _italic_.\n  Or... wait for it... **_both!_**\n  And feel free to go crazy ~~crossing stuff out~~.\n\n  There's also [links](https://www.freecodecamp.com), and\n   > Block Quotes!\n\n  And if you want to get really crazy, even tables:\n\n  Wild Header | Crazy Header | Another Header?\n  ------------ | ------------- | ------------- \n  Your content can | be here, and it | can be here....\n  And here. | Okay. | I think we get it.\n\n  - And of course there are lists.\n    - Some are bulleted.\n        - With different indentation levels.\n          - That look like this.\n\n\n  1. And there are numbererd lists too.\n  1. Use just 1s if you want! \n  1. But the list goes on...\n  - Even if you use dashes or asterisks.\n  * And last but not least, let's not forget embedded images:\n\n  ![React Logo w/ Text](https://goo.gl/Umyytc)\n  ";














































    _this2.state = {
      userText: defaultMarkdown
      //end of state
    };
    _this2.prevUpdater = _this2.prevUpdater.bind(_this2);return _this2;
  } //end of constructor
  _createClass(MarkdownPrev, [{ key: "prevUpdater", value: function prevUpdater(
    event) {
      console.log("from prev updater"); //test - it works durin onchange successfully
      //convert the input markdown and set the state
      this.setState({
        userText: event.target.value });

      //test state to see if it updated
      //console.log(this.state.userText);//test - now works correctly
    } //end of prevUpdater Method
  }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement(TextArea, { onChangeUpdater: this.prevUpdater, defaultText: this.state.userText }),
          React.createElement(PreviewComp, { markdown: this.state.userText })));


    } //end of render metod
  }]);return MarkdownPrev;}(React.Component); //end of class

ReactDOM.render(React.createElement(MarkdownPrev, null), document.getElementById("root"));