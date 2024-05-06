const body = document.body;
const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__burger-icon');

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active');
		menuBtn.classList.toggle('active');
		body.classList.toggle('locked');
	});

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('header__menu')) {
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			body.classList.remove('locked');
		}
	});

	menu.querySelectorAll('.header__menu-item').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			body.classList.remove('locked');
		});
	});
};