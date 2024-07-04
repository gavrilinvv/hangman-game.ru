<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<meta http-equiv="Cache-Control" content="no-cache" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	<link rel="canonical" href="https://hangman-game.ru"/>
	<title>Виселица | Браузерная игра</title>
	<meta property="og:title" content="Виселица | Бесплатная браузерная игра"/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://hangman-game.ru" />
	<meta name="description" content="Виселица это игра, в которой надо разгадать загаданное слово за несколько попыток. Онлайн, бесплатно и без регистрации" />
	<meta property="og:description" content="Виселица это игра, в которой надо разгадать загаданное слово за несколько попыток. Онлайн, бесплатно и без регистрации" />
	<meta name="keywords" content="Виселица, бесплатная браузерная игра, разгадать слово, играть без регистрации, онлайн" />
	<meta name="yandex-verification" content="738fcd3e75cf5f96" />

	<!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">-->
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
