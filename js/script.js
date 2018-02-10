
var number = 1,
	addElem,
	list;

var inputElem = document.getElementById('addElem');

inputElem.addEventListener('click', function(e) {
	list = document.getElementById('list')
	addElem = document.createElement('li');
	addElem.innerHTML = 'Element nr ' + number;
	list.appendChild(addElem);
	number++;
})