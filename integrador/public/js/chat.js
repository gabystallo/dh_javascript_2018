var ultimoMensaje = 0;

var nombre = '';

window.addEventListener('load', function() {
	
	var http = new XMLHttpRequest;

	function obtenerMensajes() {
		http.open('GET', '/obtener-mensajes?desde=' + ultimoMensaje);
		http.send();
	}

	http.onreadystatechange = function() {
		
		if(this.readyState == 4 && this.status == 200) {

			var mensajes = JSON.parse(this.responseText);

			mensajes.forEach(function(mensaje) {
				// var div_mensaje = document.createElement('div');
				// div_mensaje.setAttribute('class', 'mensaje');

				// var nombre = document.createElement('span');
				// nombre.setAttribute('class', 'nombre');
				// nombre.innerHTML = mensaje.nombre;

				// div_mensaje.appendChild(nombre);

				// div_mensaje.innerHTML += mensaje.mensaje;

				// document.querySelector('.mensajes').appendChild(div_mensaje);

				//todo lo de arriba lo puedo resolver con estás 2 líneas:
				var html = '<div class="mensaje"><span class="nombre">' + mensaje.nombre + '</span>' + mensaje.mensaje + '</div>';
				document.querySelector('.mensajes').innerHTML += html;

				ultimoMensaje = mensaje.id;
			});

			if(mensajes.length > 0) {
				document.querySelector('.mensajes').scrollTop = document.querySelector('.mensajes .mensaje:last-child').offsetTop;
			}

			setTimeout(obtenerMensajes, 1000);
		}
	}

	obtenerMensajes();



	document.querySelector('.nuevo input').addEventListener('keydown', function(evento) {
		
		if(evento.keyCode == 13) {

			var input = this;

			if(input.value.trim() == '') {
				return true;
			}

			input.setAttribute('disabled', 'disabled');

			var post = new XMLHttpRequest;

			post.onreadystatechange = function() {
				if(this.readyState == 4 && this.status == 200) {

					var resultado = JSON.parse(this.responseText);

					if(resultado.resultado == 'ok') {
						input.value = '';
					} else {
						alert('Error, reintentá después o debugueá a ver qué pasó');
					}

					input.removeAttribute('disabled');
				}
			}

			while(nombre == '') {
				nombre = prompt('Ingresá tu nombre');
			}

			post.open('POST', '/crear-mensaje');
			post.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //siempre que haga un método que no sea GET hay que poner esta línea
			post.send('nombre=' + nombre + '&mensaje=' + input.value + '&_token=' + window.csrf);

		}

	});


});