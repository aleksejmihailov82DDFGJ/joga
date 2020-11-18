window.addEventListener("DOMContentLoaded", function () {

	'use strict';

	//Табы

	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContent = document.querySelectorAll(".info-tabcontent");

	// function hideTabContent(a) {
	// 	for (let i = a; i < tabContent.length; i++) {
	// 		tabContent[i].classList.remove("show");
	// 		tabContent[i].classList.add("hide");
	// 	}
	// }

	// hideTabContent(1);
	switchTab(0);

	// function showTabContent(b) {
	// 	if (tabContent[b].classList.contains("hide")) {
	// 		tabContent[b].classList.remove("hide");
	// 		tabContent[b].classList.add("show");
	// 	}
	// }
	info.addEventListener("click", function (event) {
		let target = event.target;
		if (target && target.classList.contains("info-header-tab")) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					// hideTabContent(0);
					// showTabContent(i);
					switchTab(i);
					break;
				}
			}
		}
	});

	function switchTab(index) {
		for (let i = 0; i < tabContent.length; i++) {
			if (i == index) {
				tabContent[i].classList.add("show");

				if (tabContent[i].classList.contains("hide")) {
					tabContent[i].classList.remove("hide");
				}

			} else {
				tabContent[i].classList.add("hide");
				if (tabContent[i].classList.contains("show")) {
					tabContent[i].classList.remove("show");

				}

			}
		}
	}

	//Таймер

	let deadline = '2020-11-14';
	let timeOffset = new Date().getTimezoneOffset() * 60000;

	function getTimerRemaining(endTime) {
		// let t = Date.parse(endTime) - Date.parse(new Date()),
		let t = Date.parse(endTime) - Date.now() + timeOffset,
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 60000) % 60),
			hours = Math.floor((t / 3600000));
		return {
			"total": t,
			"hours": hours,
			"minutes": minutes,
			"seconds": seconds
		};
	}

	function setClock(id, endTime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds"),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimerRemaining(endTime);
			hours.textContent = (('' + t.hours).slice(0, -1) || '0') + String(t.hours).slice(-1);
			minutes.textContent = ('0' + t.minutes).slice(-2);
			seconds.textContent = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {

				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";
				clearInterval(timeInterval);
			}
		}

	}

	setClock("timer", deadline);






});