<!DOCTYPE html>
<html>
<head>
	<title>Chat</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
	<script>
		window.csrf = '{{ csrf_token() }}';
	</script>
	<script src="js/chat.js"></script>
</head>
<body>

	<h1>Chat</h1>

	<div class="mensajes">

	</div>

	<div class="nuevo">
		<input type="text" name="mensaje" placeholder="Escribir mensaje">
	</div>

</body>
</html>