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
	<meta name="yandex-verification" content="e867ea6db6f59f44" />

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">

	<!-- Yandex.Metrika counter -->
	<script type="text/javascript" >
	(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
	m[i].l=1*new Date();
	for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
	k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
	(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

	ym(97750844, "init", {
			clickmap:true,
			trackLinks:true,
			accurateTrackBounce:true,
			webvisor:true
	});
	</script>
	<noscript><div><img src="https://mc.yandex.ru/watch/97750844" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
	<!-- /Yandex.Metrika counter -->

	<!-- Yandex.RTB -->
	<script>window.yaContextCb=window.yaContextCb||[]</script>
	<script src="https://yandex.ru/ads/system/context.js" async></script>
</head>
<body>
	<div id="app">
		<div class="banner banner-right">
			<div id="yandex_rtb_R-A-9952474-1"></div>
		</div>
		<div class="button button-back js-back">Назад</div>
		<div class="container _inner-padding">
			<?include('screens/start.php');?>
			<?include('screens/game.php');?>
			<?include('screens/rules.php');?>
			<?include('screens/other-games.php');?>
		</div>
		<div class="banner banner-left">
			<div id="yandex_rtb_R-A-9952474-2"></div>
		</div>
		<div class="banner banner-bottom">
			<div id="yandex_rtb_R-A-9952474-3"></div>
		</div>
	</div>
	<script src="/dest/script.js?<?=date('Hdmy')?>"></script>


	<script>
		function renderAds() {
			// left
			window.yaContextCb.push(()=>{
				Ya.Context.AdvManager.render({
					"blockId": "R-A-9952474-2",
					"renderTo": "yandex_rtb_R-A-9952474-2"
				})
			})
			// right
			window.yaContextCb.push(()=>{
				Ya.Context.AdvManager.render({
					"blockId": "R-A-9952474-1",
					"renderTo": "yandex_rtb_R-A-9952474-1"
				})
			})
			// bottom
			window.yaContextCb.push(()=>{
				Ya.Context.AdvManager.render({
					"blockId": "R-A-9952474-3",
					"renderTo": "yandex_rtb_R-A-9952474-3"
				})
			})

			setTimeout(function(){
				renderAds();
			}, 60000);
		}
		renderAds();
	</script>


</body>
</html>
