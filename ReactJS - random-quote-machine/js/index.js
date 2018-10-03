var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //quote model
var quoteObj = [{ author: "Apostle Paul", quote: "'To live is Christ to die is gain'" },
{ author: "Our Lord Jesus", quote: "'Seek ye first the kingdom of God ...'" },
{ author: "King David", quote: "'I will praise the Lord at all times ...'" },
{ author: "Moses", quote: "'Who is on the Lord's side? ...'" },
{ author: "Our Heavenly Father", quote: "'Let there be Light!'" },
{ author: "Saint Peter", quote: "'You are the Son of God'" }];

//text component
var Text = function Text(props) {
  return (
    React.createElement("div", { id: props.Id }, props.text));

};

//autor component
var Author = function Author(props) {
  return (
    React.createElement("div", { id: props.authorId }, props.authorName));

};

//clickable link
var ClickableLink = function ClickableLink() {
  return (
    React.createElement("a", { href: "twitter.com/intent/tweet", id: "tweet-quote" }, "Tweet it!"));

};

//button component
var MyButton = function MyButton(props) {
  return (
    React.createElement("button", { className: props.className, id: props.btnId, onClick: props.clickHdlr }, props.buttonText));

};

//quote app Class
var QuoteApp = function (_React$Component) {_inherits(QuoteApp, _React$Component);
  function QuoteApp(props) {_classCallCheck(this, QuoteApp);

    //initial state
    var _this = _possibleConstructorReturn(this, (QuoteApp.__proto__ || Object.getPrototypeOf(QuoteApp)).call(this, props));_this.state = {
      author: '',
      quote: ''

      //bindins
    };_this.randQuote = _this.randQuote.bind(_this);return _this;
  }

  //overwrite the initial state when the DOM completes loading
  _createClass(QuoteApp, [{ key: "componentDidMount", value: function componentDidMount() {
      this.randQuote();
    } }, { key: "randQuote", value: function randQuote()
    {
      //console.log("called randQuote successfully");//test - worked
      //randomize
      var randN = Math.floor(Math.random() * quoteObj.length);
      //set state to achieve this
      this.setState(
      {
        author: quoteObj[randN].author,
        quote: quoteObj[randN].quote });


    } //end of randQuote
  }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement(Text, { Id: "text", text: this.state.quote }),
          React.createElement(Author, { authorId: "author", authorName: this.state.author }),
          React.createElement("div", { id: "buttonRow" },
            React.createElement(ClickableLink, null),
            React.createElement(MyButton, { className: "myButton", btnId: "tumbler-quote-btn", buttonText: "Tumbler" }),
            React.createElement(MyButton, { className: "myButton", btnId: "new-quote", buttonText: "New Quote", clickHdlr: this.randQuote }))));



    } //end of render method
  }]);return QuoteApp;}(React.Component); //end of class QuoteApp

ReactDOM.render(React.createElement(QuoteApp, null), document.getElementById('quote-box'));