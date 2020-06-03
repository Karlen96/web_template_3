/*responsive menu================================================*/
const menu__item = document.querySelector(".menu__item");
const header = document.querySelector(".header");

const allTegA = document.querySelectorAll("a");

for (let i = 0; i < allTegA.length; i++) {
	allTegA[i].addEventListener("click", function (event) {
		event.preventDefault();
	});
}

menu__item.onclick = function () {
	const menu = document.querySelector("#menu");
	menu.classList.toggle("menu");
	menu.classList.toggle("menu__responsive");
}
/*/responsive menu================================================*/

/*slider================================================*/

let slider__item = document.querySelectorAll(".slider__item");
let slider__active = 0;
for (let i = 0; i < slider__item.length; i++) {
	slider__item[i].onclick = slider;
}

const arrSlides = [
	"bgimg1.webp",
	"bgimg2.webp",
	"bgimg3.webp",
	"bgimg4.webp",
	"bgimg5.webp",
	"bgimg6.webp"
];

function slider() {
	const slider__number = this.getAttribute("data");
	slider__active = this.getAttribute("data");
	header.style.backgroundImage = `url(image/${arrSlides[slider__number]})`;
	for (let i = 0; i < slider__item.length; i++) {
		slider__item[i].classList.remove("active__slide");
	}
	slider__item[slider__active].classList.add("active__slide");
}

document.querySelector(".arrow__left").addEventListener("click", sliderLeft);
document.querySelector(".arrow__right").addEventListener("click", sliderRight);


function sliderLeft() {
	(slider__active > 0) ? slider__active-- : slider__active = arrSlides.length - 1;
	header.style.backgroundImage = `url(image/${arrSlides[slider__active]})`;
	for (let i = 0; i < slider__item.length; i++) {
		slider__item[i].classList.remove("active__slide");
	}
	slider__item[slider__active].classList.add("active__slide");
}

function sliderRight() {
	(slider__active == arrSlides.length - 1) ? slider__active = 0: slider__active++;
	header.style.backgroundImage = `url(image/${arrSlides[slider__active]})`;
	for (let i = 0; i < slider__item.length; i++) {
		slider__item[i].classList.remove("active__slide");
	}
	slider__item[slider__active].classList.add("active__slide");
}

let slideSwipe = setInterval(sliderRight, 3000);

/*/slider================================================*/

/*filter================================================*/

const filterItems = document.querySelectorAll(".filteCat[data]");

filterItems.forEach(function (elem) {
	elem.addEventListener("click", filterCat);
});

function filterCat() {
	const catChoice = event.target.getAttribute("data");
	const projects = document.querySelectorAll(".projects__card");

	projects.forEach(function (elem) {
		elem.style.display = "none";
		if (elem.getAttribute("data") == catChoice) {
			elem.style.display = "flex";
		}
		if (catChoice == "all") {
			elem.style.display = "flex";
		}
	});

}

/*/filter================================================*/


/*video player================================================*/

const buttonPlayVideo = document.querySelector(".playvideo");
buttonPlayVideo.onclick = function () {
	document.querySelector(".presentation__video").style.display = "block";
}

/*/video player================================================*/


/*counter================================================*/

let counterStatisticClients = document.querySelector(".countClients");
let counterStatisticCoffee = document.querySelector(".countCoffee");
let counterStatisticPosts = document.querySelector(".countPosts");
let counterStatisticLikes = document.querySelector(".countLikes");
let counterStatisticLaunched = document.querySelector(".countLaunched");
let countStartStatisticCount = 0,
	countStartStatisticFrameworks = 0,
	countClients = 0,
	countCoffee = 0,
	countPosts = 0,
	countLikes = 0,
	countLaunched = 0;

let scrollUpPage = document.querySelector(".scrollup");

window.onscroll = function () {
	/*counterStatistic================================================*/
	if (countStartStatisticCount == 0 && pageYOffset > 2450) {
		countStartStatisticCount = 1;
		let count1 = setInterval(function counter1() {
			if (countClients === parseInt(counterStatisticClients.getAttribute("data_count"))) {
				clearInterval(count1);
			}
			counterStatisticClients.innerHTML = countClients++;
		}, 1);

		let count2 = setInterval(function counter2() {
			if (countCoffee === parseInt(counterStatisticCoffee.getAttribute("data_count"))) {
				clearInterval(count2);
			}
			counterStatisticCoffee.innerHTML = countCoffee++;
		}, 50);

		let count3 = setInterval(function counter3() {
			if (countPosts === parseInt(counterStatisticPosts.getAttribute("data_count"))) {
				clearInterval(count3);
			}
			counterStatisticPosts.innerHTML = countPosts++;
		}, 1);

		let count4 = setInterval(function counter4() {
			if (countLikes === parseInt(counterStatisticLikes.getAttribute("data_count"))) {
				clearInterval(count4);
			}
			counterStatisticLikes.innerHTML = countLikes++;
		}, 10);

		let count5 = setInterval(function counter5() {
			if (countLaunched === parseInt(counterStatisticLaunched.getAttribute("data_count"))) {
				clearInterval(count5);
			}
			counterStatisticLaunched.innerHTML = countLaunched++;
		}, 10);
	}

	/*/counterStatistic================================================*/

	/*/scrollup================================================*/
	if (pageYOffset > 1000) {
		scrollUpPage.style.display = "flex";
		scrollUpPage.onclick = function () {
			window.scroll(0, 0);
		}
	} else {
		scrollUpPage.style.display = "none";
	}
	/*/scrollup================================================*/

}

/*/counter================================================*/


/*searchlive================================================*/
const search__item = document.querySelector(".search__image");
let search__input = document.querySelector(".search__input");
let searchValue = "";
const productsCardItems = document.querySelectorAll(".projects__card_bottom *");

search__item.addEventListener("mouseover", () => {
	search__input.style.right = 35 + "px";
});

search__input.addEventListener("input", () => {
	searchValue = search__input.value;

	for (let i = 0; i < filterItems.length; i++) {
		if (productsCardItems[i].textContent == searchValue) {
			productsCardItems[i].style.color = "red";
		} else {
			console.log("such a query failed");
		}
		if (searchValue.length == 0) {
			productsCardItems[i].style.color = "";
		}
	}

});

/*/searchlive================================================*/
/*recentpostscardreadmore================================================*/
const recentpostscards = document.querySelectorAll(".recentposts__card");
const read__more_btn = document.querySelector(".read__more_btn");

let recentpostShowCard = 3;

for (let i = recentpostShowCard; i < recentpostscards.length; i++) {
	recentpostscards[i].style.display = "none";
}
read__more_btn.addEventListener("click", () => {
	recentpostShowCard += 3;
	if (recentpostShowCard <= recentpostscards.length) {
		for (let i = 0; i < recentpostShowCard; i++) {
			recentpostscards[i].style.display = "flex";
		}
	}
});
/*/recentpostscardreadmore================================================*/
/*reviewsstars================================================*/

const reviewsCard = document.querySelectorAll(".reviews__card_stars");
const Stars = [];

reviewsCard.forEach((elem) => {
	Stars.push(elem.children);
});

for (let i = 0; i < Stars.length; i++) {
	for (let j = 0; j < Stars[i].length; j++) {
		Stars[i][j].onclick = function () {
			for (let l = 0; l < Stars[i].length; l++) {
				Stars[i][l].innerHTML = "&#9734;";
			}
			for (let k = 0; k <= j; k++) {
				Stars[i][k].innerHTML = "&#9733;";
			}
		}
	}
}


/*/reviewsstars================================================*/