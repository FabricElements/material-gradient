// Get all the gradients and set the info label
var els = document.getElementsByTagName("div");

Array.prototype.forEach.call(els, function (el) {
  var info = document.createElement('p');
  info.innerHTML = el.classList;
  el.appendChild(info);
});
