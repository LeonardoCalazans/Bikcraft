if (window.SimpleSlide) { //window verificara se o comando existe antes de executar ele, evitando erros

	new SimpleSlide({
		slide: "quote", // nome do atributo data-slide="principal"
		time: 5000, // tempo de transição dos slides
		nav: true //navegação entre slides
	});

	new SimpleSlide({
		slide: "portfolio",
		time: 5000,
		nav: true
	});

}

if (window.SimpleAnime) {
	new SimpleAnime();
}


if (window.SimpleForm) {
	new SimpleForm({
		form: ".formPHP", // seletor do formulário
		button: "#submit", // seletor do botão
		erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
		sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
	});
}
// BTN menu amburguer mobile
function Menu(config) {
	this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container

	this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn

	this.maxWidth = config.widthEnabled || false;

	var _opened = false;
	var _this = this;

	this.btn.removeAttribute('style')
	//closeMenu()

	if (this.maxWidth) {
		window.addEventListener('resize', e => {
			if (window.innerWidth > _this.maxWidth) {
				_this.nav.removeAttribute('style')
				_opened = true;
			} else if (!this.nav.getAttribute('style')) {
				closeMenu();
			}
		})

		if (window.innerWidth <= _this.maxWidth) {
			closeMenu();
		}
	}

	this.btn.addEventListener('click', openOrClose)

	function openOrClose() {
		if (!_opened) {
			openMenu()
		} else {
			closeMenu()
		}
	}

	function openMenu() {
		var _top = _this.nav.getBoundingClientRect().top + 'px'

		var _style = {
			maxHeight: 'calc(100vh - ' + _top + ' )',
			overflow: 'hidden'
		}

		applyStyleToNav(_style)

		_opened = true;
	}

	function applyStyleToNav(_style) {
		Object.keys(_style).forEach(stl => {
			_this.nav.style[stl] = _style[stl]
		})
	}

	function closeMenu() {
		var _style = {
			maxHeight: '0px',
			overflow: 'hidden'
		}

		applyStyleToNav(_style)

		_opened = false;
	}

}

(function () {
	var $body = document.querySelector('body');
	$body.classList.remove('no-js')
	$body.classList.add('js')


	var menu = new Menu({
		container: '.header_nav',
		toggleBtn: '.header_btnMenu',
		widthEnabled: 787
	})
})()
