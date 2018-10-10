window.onload = function() {

	var abracadabra = document.getElementById('abracadabra');

	var alakazam = abracadabra.cloneNode();

	alakazam.innerHTML = 'alakazam';

	abracadabra.parentElement.appendChild(alakazam);

	abracadabra.onclick = function() {
		document.querySelector('#lechuza').style.display = 'none';
	}

	alakazam.onclick = function() {
		document.querySelector('#lechuza').style.display = 'block';
	}
}