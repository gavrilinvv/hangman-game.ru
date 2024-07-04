<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Виселица | Браузерная игра</title>
	<!-- <link rel="stylesheet" href="/src/style.css?<?//=date('Hdmy')?>"> -->
</head>
<body>
	<div id="app">
		<div class="banner banner-right"></div>
		<div class="container _inner-padding">
			<?include('screens/start.php');?>
			<?include('screens/game.php');?>
			<?include('screens/rules.php');?>
			<?include('screens/other-games.php');?>
		</div>
		<div class="banner banner-left"></div>
		<div class="banner banner-bottom"></div>
	</div>
	<script src="/dest/script.js?<?=date('Hdmy')?>"></script>
</body>
</html>
