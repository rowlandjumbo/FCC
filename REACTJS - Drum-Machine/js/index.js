var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //padbank - drum pad properties
var drumPadProperties = [
{
  keyCode: 81,
  audioTagId: "Q",
  buttonTagId: "heater-1",
  soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyCode: 87,
  audioTagId: "W",
  buttonTagId: "heater-2",
  soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyCode: 69,
  audioTagId: "E",
  buttonTagId: "heater-3",
  soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  audioTagId: "A",
  buttonTagId: "heater-4",
  soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyCode: 83,
  audioTagId: "S",
  buttonTagId: "clap",
  soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyCode: 68,
  audioTagId: "D",
  buttonTagId: "open-hh",
  soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyCode: 90,
  audioTagId: "Z",
  buttonTagId: "kick-n-hat",
  soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyCode: 88,
  audioTagId: "X",
  buttonTagId: "kick",
  soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyCode: 67,
  audioTagId: "C",
  buttonTagId: "closed-hh",
  soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



//drum pad component
var DrumPad = function (_React$Component) {_inherits(DrumPad, _React$Component);
  function DrumPad(props) {_classCallCheck(this, DrumPad);var _this = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this,
    props));
    _this.state = {
      display: "Hit the drum DJ!" };

    //binding
    _this.playSound = _this.playSound.bind(_this);
    _this.updateState = _this.updateState.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);return _this;
  } //end of constructor
  _createClass(DrumPad, [{ key: "playSound", value: function playSound(
    objWithSoundSrc, whatToDisplay) {
      //play sound here
      var sound = document.getElementById(objWithSoundSrc);
      sound.play();
      //update the state
      this.updateState(whatToDisplay);
    } }, { key: "updateState", value: function updateState(

    objToUpdateStateWith) {
      this.setState({ display: objToUpdateStateWith });
    } }, { key: "componentDidMount", value: function componentDidMount()

    {
      document.addEventListener("keydown", this.handleKeyPress);
    } }, { key: "componentWillUnmount", value: function componentWillUnmount()
    {
      document.removeEventListener("keydown", this.handleKeyPress);
    } }, { key: "handleKeyPress", value: function handleKeyPress(

    e) {var _this2 = this;
      //console.log("he they keypad is pressed");//test it works correctly
      //map the object and check the given keycodes
      drumPadProperties.map(function (currElem, currIndex, workingArr2) {
        if (e.keyCode === workingArr2[currIndex].keyCode) {
          //play sound
          //console.log("keypress from the if statement matched"); //test it works correctly
          _this2.playSound(
          workingArr2[currIndex].audioTagId,
          workingArr2[currIndex].buttonTagId);

          //console.log("after playsound method"); //test it works correctly
        }
      }); //end of drumPadProperties map
    } }, { key: "render", value: function render()

    {var _this3 = this;
      return (
        React.createElement("div", null,
          React.createElement("div", { id: "display" }, this.state.display),
          React.createElement("div", { id: "drumpad-wrapper" },
            drumPadProperties.map(
            function (currentElem, indexElem, workingArr) {
              return (
                React.createElement("button", {
                    "class": "drum-pad",
                    id: workingArr[indexElem].buttonTagId,
                    onClick: function onClick() {
                      _this3.playSound(
                      workingArr[indexElem].audioTagId,
                      workingArr[indexElem].buttonTagId);

                    } },

                  workingArr[indexElem].audioTagId,
                  React.createElement("audio", {
                    "class": "clip",
                    id: workingArr[indexElem].audioTagId,
                    src: workingArr[indexElem].soundUrl })));



            } //end of callback function
            ))));



    } }]);return DrumPad;}(React.Component);


//Drum App Class
var DrumApp = function (_React$Component2) {_inherits(DrumApp, _React$Component2);
  function DrumApp(props) {_classCallCheck(this, DrumApp);return _possibleConstructorReturn(this, (DrumApp.__proto__ || Object.getPrototypeOf(DrumApp)).call(this,
    props));
  }_createClass(DrumApp, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement(DrumPad, null)));


    } }]);return DrumApp;}(React.Component);
//end of Drum App Class

//render the app to the root
ReactDOM.render(React.createElement(DrumApp, null), document.getElementById("drum-machine"));