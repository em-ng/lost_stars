/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scripts_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/scripts/input */ \"./src/scripts/input.js\");\n/* harmony import */ var _src_scripts_spaceship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/scripts/spaceship */ \"./src/scripts/spaceship.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"gameView\");\n  var ctx = canvas.getContext('2d');\n  var GAME_WIDTH = 900;\n  var GAME_HEIGHT = 550;\n  var spaceship = new _src_scripts_spaceship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\n  new _src_scripts_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"](spaceship);\n  var lastTime = 0;\n\n  function gameLoop(currentTime) {\n    var dT = currentTime - lastTime; //change in time, how much time has passed since\n\n    lastTime = currentTime; //reset lastTime so it can keep updating how much time passes in between\n\n    ctx.clearRect(0, 0, 900, 550); //clear each frame\n\n    spaceship.update(dT);\n    spaceship.draw(ctx);\n    requestAnimationFrame(gameLoop);\n  }\n\n  gameLoop();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBR0EsTUFBSUMsU0FBUyxHQUFHLElBQUlULDhEQUFKLENBQWNPLFVBQWQsRUFBMEJDLFdBQTFCLENBQWhCO0FBQ0EsTUFBSVQsMERBQUosQ0FBVVUsU0FBVjtBQUVBLE1BQUlDLFFBQVEsR0FBRyxDQUFmOztBQUVBLFdBQVNDLFFBQVQsQ0FBa0JDLFdBQWxCLEVBQStCO0FBQzNCLFFBQUlDLEVBQUUsR0FBR0QsV0FBVyxHQUFHRixRQUF2QixDQUQyQixDQUNNOztBQUNqQ0EsSUFBQUEsUUFBUSxHQUFHRSxXQUFYLENBRjJCLENBRUg7O0FBQ3hCUCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLEVBSDJCLENBR0k7O0FBQy9CTCxJQUFBQSxTQUFTLENBQUNNLE1BQVYsQ0FBaUJGLEVBQWpCO0FBQ0FKLElBQUFBLFNBQVMsQ0FBQ08sSUFBVixDQUFlWCxHQUFmO0FBQ0FZLElBQUFBLHFCQUFxQixDQUFDTixRQUFELENBQXJCO0FBQ0g7O0FBQ0RBLEVBQUFBLFFBQVE7QUFFWCxDQXRCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xvc3Rfc3RhcnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSAnL3NyYy9zY3JpcHRzL2lucHV0JztcbmltcG9ydCBTcGFjZXNoaXAgZnJvbSAnL3NyYy9zY3JpcHRzL3NwYWNlc2hpcCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVZpZXdcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgR0FNRV9XSURUSCA9IDkwMDtcbiAgICBjb25zdCBHQU1FX0hFSUdIVCA9IDU1MDtcblxuICAgIFxuICAgIGxldCBzcGFjZXNoaXAgPSBuZXcgU3BhY2VzaGlwKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTsgXG4gICAgbmV3IElucHV0KHNwYWNlc2hpcCk7XG4gICAgXG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuICAgIGZ1bmN0aW9uIGdhbWVMb29wKGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIGxldCBkVCA9IGN1cnJlbnRUaW1lIC0gbGFzdFRpbWU7IC8vY2hhbmdlIGluIHRpbWUsIGhvdyBtdWNoIHRpbWUgaGFzIHBhc3NlZCBzaW5jZVxuICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lOyAvL3Jlc2V0IGxhc3RUaW1lIHNvIGl0IGNhbiBrZWVwIHVwZGF0aW5nIGhvdyBtdWNoIHRpbWUgcGFzc2VzIGluIGJldHdlZW5cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCA5MDAsIDU1MCk7IC8vY2xlYXIgZWFjaCBmcmFtZVxuICAgICAgICBzcGFjZXNoaXAudXBkYXRlKGRUKTtcbiAgICAgICAgc3BhY2VzaGlwLmRyYXcoY3R4KTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgZ2FtZUxvb3AoKTtcbiAgICBcbn0pIl0sIm5hbWVzIjpbIklucHV0IiwiU3BhY2VzaGlwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwic3BhY2VzaGlwIiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsImN1cnJlbnRUaW1lIiwiZFQiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/input.js":
/*!******************************!*\
  !*** ./src/scripts/input.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Input; }\n/* harmony export */ });\n/* harmony import */ var _src_scripts_spaceship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/scripts/spaceship */ \"./src/scripts/spaceship.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Input = function Input(spaceship) {\n  _classCallCheck(this, Input);\n\n  document.addEventListener('keydown', function (e) {\n    switch (e.key) {\n      case \"a\":\n        spaceship.moveLeft();\n        break;\n\n      case \"w\":\n        spaceship.moveUp();\n        break;\n\n      case \"d\":\n        spaceship.moveRight();\n        break;\n\n      case \"s\":\n        spaceship.moveDown();\n        break;\n    }\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbnB1dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0lBRXFCQyxRQUNqQixlQUFZQyxTQUFaLEVBQXVCO0FBQUE7O0FBQ25CQyxFQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUNDLENBQUQsRUFBTztBQUV4QyxZQUFPQSxDQUFDLENBQUNDLEdBQVQ7QUFDSSxXQUFLLEdBQUw7QUFDSUosUUFBQUEsU0FBUyxDQUFDSyxRQUFWO0FBQ0E7O0FBQ0osV0FBSyxHQUFMO0FBQ0lMLFFBQUFBLFNBQVMsQ0FBQ00sTUFBVjtBQUNBOztBQUNKLFdBQUssR0FBTDtBQUNJTixRQUFBQSxTQUFTLENBQUNPLFNBQVY7QUFDQTs7QUFDSixXQUFLLEdBQUw7QUFDSVAsUUFBQUEsU0FBUyxDQUFDUSxRQUFWO0FBQ0E7QUFaUjtBQWNILEdBaEJEO0FBaUJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9zdF9zdGFycy8uL3NyYy9zY3JpcHRzL2lucHV0LmpzPzQ0ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYWNlc2hpcCBmcm9tICcvc3JjL3NjcmlwdHMvc3BhY2VzaGlwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKHNwYWNlc2hpcCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblxuICAgICAgICAgICAgc3dpdGNoKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VzaGlwLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ3XCI6XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlc2hpcC5tb3ZlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VzaGlwLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgICAgICAgICBzcGFjZXNoaXAubW92ZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJTcGFjZXNoaXAiLCJJbnB1dCIsInNwYWNlc2hpcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJtb3ZlTGVmdCIsIm1vdmVVcCIsIm1vdmVSaWdodCIsIm1vdmVEb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/input.js\n");

/***/ }),

/***/ "./src/scripts/spaceship.js":
/*!**********************************!*\
  !*** ./src/scripts/spaceship.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Spaceship; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Spaceship = /*#__PURE__*/function () {\n  function Spaceship(gameWidth, gameHeight) {\n    _classCallCheck(this, Spaceship);\n\n    this.gameWidth = gameWidth;\n    this.gameHeight = gameHeight;\n    this.radius = 10;\n    this.position = {\n      //position will be center of ship/circle object on screen\n      x: this.radius + 50,\n      y: this.gameHeight - this.radius - 50\n    };\n    this.maxSpeed = 2;\n    this.xSpeed = 0;\n    this.ySpeed = 0;\n  }\n\n  _createClass(Spaceship, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.beginPath();\n      ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);\n      ctx.stroke();\n    }\n  }, {\n    key: \"moveLeft\",\n    value: function moveLeft() {\n      this.xSpeed = -this.maxSpeed;\n    }\n  }, {\n    key: \"moveRight\",\n    value: function moveRight() {\n      this.xSpeed = this.maxSpeed;\n    }\n  }, {\n    key: \"moveUp\",\n    value: function moveUp() {\n      this.ySpeed = -this.maxSpeed;\n    }\n  }, {\n    key: \"moveDown\",\n    value: function moveDown() {\n      this.ySpeed = this.maxSpeed;\n    }\n  }, {\n    key: \"update\",\n    value: function update(dT) {\n      this.position.x += this.xSpeed;\n      this.position.y += this.ySpeed;\n      if (this.position.x < this.radius) this.position.x = this.radius; //left wall\n\n      if (this.position.y < this.radius) this.position.y = this.radius; //upper wall\n\n      if (this.position.x > this.gameWidth - this.radius) this.position.x = this.gameWidth - this.radius; //right wall\n\n      if (this.position.y > this.gameHeight - this.radius) this.position.y = this.gameHeight - this.radius; //lower wall\n    }\n  }]);\n\n  return Spaceship;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcGFjZXNoaXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7QUFDakIscUJBQVlDLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DO0FBQUE7O0FBQy9CLFNBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0I7QUFBQztBQUNiQyxNQUFBQSxDQUFDLEVBQUUsS0FBS0YsTUFBTCxHQUFjLEVBREw7QUFFWkcsTUFBQUEsQ0FBQyxFQUFFLEtBQUtKLFVBQUwsR0FBa0IsS0FBS0MsTUFBdkIsR0FBZ0M7QUFGdkIsS0FBaEI7QUFJQSxTQUFLSSxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNIOzs7O1dBRUQsY0FBS0MsR0FBTCxFQUFVO0FBQ05BLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSjtBQUNBRCxNQUFBQSxHQUFHLENBQUNFLEdBQUosQ0FBUSxLQUFLUixRQUFMLENBQWNDLENBQXRCLEVBQXlCLEtBQUtELFFBQUwsQ0FBY0UsQ0FBdkMsRUFBMEMsS0FBS0gsTUFBL0MsRUFBdUQsQ0FBdkQsRUFBMEQsSUFBSVUsSUFBSSxDQUFDQyxFQUFuRTtBQUNBSixNQUFBQSxHQUFHLENBQUNLLE1BQUo7QUFDSDs7O1dBRUQsb0JBQVc7QUFDUCxXQUFLUCxNQUFMLEdBQWMsQ0FBQyxLQUFLRCxRQUFwQjtBQUNIOzs7V0FFRCxxQkFBWTtBQUNSLFdBQUtDLE1BQUwsR0FBYyxLQUFLRCxRQUFuQjtBQUNIOzs7V0FFRCxrQkFBUztBQUNMLFdBQUtFLE1BQUwsR0FBYyxDQUFDLEtBQUtGLFFBQXBCO0FBQ0g7OztXQUVELG9CQUFXO0FBQ1AsV0FBS0UsTUFBTCxHQUFjLEtBQUtGLFFBQW5CO0FBQ0g7OztXQUVELGdCQUFPUyxFQUFQLEVBQVc7QUFDUCxXQUFLWixRQUFMLENBQWNDLENBQWQsSUFBbUIsS0FBS0csTUFBeEI7QUFDQSxXQUFLSixRQUFMLENBQWNFLENBQWQsSUFBbUIsS0FBS0csTUFBeEI7QUFDQSxVQUFJLEtBQUtMLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLRixNQUEzQixFQUFtQyxLQUFLQyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0YsTUFBdkIsQ0FINUIsQ0FHMkQ7O0FBQ2xFLFVBQUksS0FBS0MsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLEtBQUtILE1BQTNCLEVBQW1DLEtBQUtDLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQixLQUFLSCxNQUF2QixDQUo1QixDQUkyRDs7QUFDbEUsVUFBSSxLQUFLQyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0osU0FBTCxHQUFpQixLQUFLRSxNQUE1QyxFQUFvRCxLQUFLQyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0osU0FBTCxHQUFpQixLQUFLRSxNQUF4QyxDQUw3QyxDQUs2Rjs7QUFDcEcsVUFBSSxLQUFLQyxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBS0osVUFBTCxHQUFrQixLQUFLQyxNQUE3QyxFQUFxRCxLQUFLQyxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBS0osVUFBTCxHQUFrQixLQUFLQyxNQUF6QyxDQU45QyxDQU0rRjtBQUV6RyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvc3Rfc3RhcnMvLi9zcmMvc2NyaXB0cy9zcGFjZXNoaXAuanM/OWJjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFjZXNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMDsgICBcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHsvL3Bvc2l0aW9uIHdpbGwgYmUgY2VudGVyIG9mIHNoaXAvY2lyY2xlIG9iamVjdCBvbiBzY3JlZW5cbiAgICAgICAgICAgIHg6IHRoaXMucmFkaXVzICsgNTAsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLnJhZGl1cyAtIDUwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAyO1xuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMueVNwZWVkID0gMDtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy54U3BlZWQgPSAtdGhpcy5tYXhTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlVXAoKSB7XG4gICAgICAgIHRoaXMueVNwZWVkID0gLXRoaXMubWF4U3BlZWQ7XG4gICAgfVxuXG4gICAgbW92ZURvd24oKSB7XG4gICAgICAgIHRoaXMueVNwZWVkID0gdGhpcy5tYXhTcGVlZDtcbiAgICB9XG5cbiAgICB1cGRhdGUoZFQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMueFNwZWVkO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy55U3BlZWQ7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCB0aGlzLnJhZGl1cykgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5yYWRpdXM7IC8vbGVmdCB3YWxsXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLnJhZGl1cykgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5yYWRpdXM7IC8vdXBwZXIgd2FsbFxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5nYW1lV2lkdGggLSB0aGlzLnJhZGl1cykgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLnJhZGl1czsgLy9yaWdodCB3YWxsXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLnJhZGl1cykgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5yYWRpdXM7IC8vbG93ZXIgd2FsbFxuICAgIFxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJTcGFjZXNoaXAiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0IiwicmFkaXVzIiwicG9zaXRpb24iLCJ4IiwieSIsIm1heFNwZWVkIiwieFNwZWVkIiwieVNwZWVkIiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwiZFQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/spaceship.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb3N0X3N0YXJzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;