<!DOCTYPE html>
<html>
<head>
	<title>Chat</title>
	<link rel="stylesheet" type="text/css" href="/css/estilo.css">
	<script>
		window.csrfToken = '{{ csrf_token() }}';
	</script>
	<script src="/js/chat.js"></script>
</head>
<body>

	<div id="general">

		<h1>Chat</h1>

		<div class="mensajes"></div>

		<div class="escribir">
			<input type="text" name="mensaje" placeholder="Escribí un mensaje">
		</div>

	</div>

</body>
</html>