window.addEventListener('load', function() {
	
	var ultimoMensaje = 0;
	var http = new XMLHttpRequest;

	function pedirMensajes() {
		http.open('GET', '/obtener-mensajes?desde=' + ultimoMensaje);
		http.send();
	}

	http.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var mensajes = JSON.parse(this.responseText);
			if(mensajes) {
				mensajes.forEach(function(mensaje) {
					var html = '<div class="mensaje"><span class="nombre">' + mensaje.nombre + '</span>'+ mensaje.mensaje +'</mensaje>';
					document.querySelector('.mensajes').innerHTML += html;
					ultimoMensaje = mensaje.id;
				});

				if(mensajes.length>0) {
					var div_ultimo_mensaje = document.querySelector('.mensajes .mensaje:last-child');
					document.querySelector('.mensajes').scrollTop = div_ultimo_mensaje.offsetTop;
				}
			}
			setTimeout(pedirMensajes, 1000);
		}
	}

	pedirMensajes();


	var nombre = '';
	document.querySelector('.escribir input').addEventListener('keydown', function(evento) {
		if(evento.keyCode == 13) {

			while(nombre.trim().length<1) {
				nombre = prompt('Ingresá tu nombre');
			}

			this.setAttribute('disabled', 'disabled');
			var inputEscribir = this;
			var enviar = new XMLHttpRequest;
			enviar.onreadystatechange = function() {
				if(this.readyState == 4 && this.status == 200) {
					inputEscribir.removeAttribute('disabled');
					inputEscribir.value = '';
				}
			}

			enviar.open('POST', '/crear-mensaje');
			enviar.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //siempre que haga un método que no sea GET hay que poner esta línea
			enviar.send('nombre=' + nombre + '&mensaje=' + this.value + '&_token=' + window.csrfToken);
		}
	});
});