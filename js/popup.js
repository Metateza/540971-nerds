var link = document.querySelector(".button-contacts");
			
var popup = document.querySelector(".modal-letter");
var close = popup.querySelector(".button-close");
			
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
			
var storage = localStorage.getItem("login");
			
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
				
	if (storage) {
		login.value = storage;
		password.focus();
	}	else {
		login.focus();
	}
});
			
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
			
form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}	else {
			localStorage.setItem("login", login.value);
		}
});
			
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});		


var map = document.getElementById('map');
if (map) {
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
center: [59.938631, 30.323055],
zoom: 18
});
myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
hintContent: 'NЁRDS DESIGN STUDIO ул. Большая Конюшенная 19/8, Санкт-Петербург',
balloonContent: 'NЁRDS DESIGN STUDIO'
}, {
// Опции.
// Необходимо указать данный тип макета.
iconLayout: 'default#image',
// Своё изображение иконки метки.
iconImageHref: 'img/map-marker.png',
// Размеры метки.
iconImageSize: [367, 190],
// Смещение левого верхнего угла иконки относительно
// её "ножки" (точки привязки).
iconImageOffset: [-183, -190]
});

myMap.geoObjects
.add(myPlacemark);
})
}