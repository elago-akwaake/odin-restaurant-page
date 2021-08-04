/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/loadHeader.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHeader)
/* harmony export */ });
// Module 01 Load the initial page content
function loadHeader(contentDiv) {
	console.log('I get called from loadHeader.js!');

	const header = document.createElement('header');

	const containerDiv = document.createElement('div');
	containerDiv.classList.add('container', 'container-flex-header');
	containerDiv.innerHTML = `
		<div class="site-title">
			<h1>Casa Bonita</h1>
			<p class="h1-subtitle">The home of taco flavoured kisses</p>
		</div>
		<nav>
			<ul>
				<li><a href="#" class="current-page">Home</a></li>
				<li><a href="#">Menu</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
	`;
	header.appendChild(containerDiv);

	contentDiv.appendChild(header);
	
	return contentDiv;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZEhlYWRlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRIZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBNb2R1bGUgMDEgTG9hZCB0aGUgaW5pdGlhbCBwYWdlIGNvbnRlbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIZWFkZXIoY29udGVudERpdikge1xuXHRjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gbG9hZEhlYWRlci5qcyEnKTtcblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuXHRjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdjb250YWluZXItZmxleC1oZWFkZXInKTtcblx0Y29udGFpbmVyRGl2LmlubmVySFRNTCA9IGBcblx0XHQ8ZGl2IGNsYXNzPVwic2l0ZS10aXRsZVwiPlxuXHRcdFx0PGgxPkNhc2EgQm9uaXRhPC9oMT5cblx0XHRcdDxwIGNsYXNzPVwiaDEtc3VidGl0bGVcIj5UaGUgaG9tZSBvZiB0YWNvIGZsYXZvdXJlZCBraXNzZXM8L3A+XG5cdFx0PC9kaXY+XG5cdFx0PG5hdj5cblx0XHRcdDx1bD5cblx0XHRcdFx0PGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjdXJyZW50LXBhZ2VcIj5Ib21lPC9hPjwvbGk+XG5cdFx0XHRcdDxsaT48YSBocmVmPVwiI1wiPk1lbnU8L2E+PC9saT5cblx0XHRcdFx0PGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT48L2xpPlxuXHRcdFx0PC91bD5cblx0XHQ8L25hdj5cblx0YDtcblx0aGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XG5cblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXHRcblx0cmV0dXJuIGNvbnRlbnREaXY7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=