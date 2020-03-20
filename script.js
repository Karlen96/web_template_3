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
	"bgimg1.png",
	"bgimg2.png",
	"bgimg3.png",
	"bgimg4.png",
	"bgimg5.png",
	"bgimg6.png"
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

const arrow__left = document.querySelector(".arrow__left");
const arrow__right = document.querySelector(".arrow__right");

arrow__left.onclick = sliderLeft;
arrow__right.onclick = sliderRight;

function sliderLeft() {
	if (slider__active > 0) {
		slider__active--;
	} else {
		slider__active = arrSlides.length - 1;
	}
	header.style.backgroundImage = `url(image/${arrSlides[slider__active]})`;
	for (let i = 0; i < slider__item.length; i++) {
		slider__item[i].classList.remove("active__slide");
	}
	slider__item[slider__active].classList.add("active__slide");
}

function sliderRight() {
	if (slider__active == arrSlides.length - 1) {
		slider__active = 0;
	} else {
		slider__active++;
	}
	header.style.backgroundImage = `url(image/${arrSlides[slider__active]})`;
	for (let i = 0; i < slider__item.length; i++) {
		slider__item[i].classList.remove("active__slide");
	}
	slider__item[slider__active].classList.add("active__slide");
}

/*/slider================================================*/

/*filter================================================*/

const filterItems = document.querySelectorAll(".filteCat[data]");

for (let i = 0; i < filterItems.length; i++) {
	filterItems[i].onclick = filterCat;
}

function filterCat() {
	const catChoice = event.target.getAttribute("data");
	const projects = document.querySelectorAll(".projects__card");

	for (let i = 0; i < projects.length; i++) {
		projects[i].style.display = "none";
		if (projects[i].getAttribute("data") == catChoice) {
			projects[i].style.display = "flex";
		}
		if (catChoice == "all") {
			projects[i].style.display = "flex";
		}
	}
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
	countLaunched = 0,
	countJqueryHeight = 0,
	countVueHeight = 0,
	countReactHeight = 0,
	countAngularHeight = 0;

let scrollUpPage = document.querySelector(".scrollup");

window.onscroll = function () {
	/*scrollup================================================*/
	if (countStartStatisticCount == 0 && pageYOffset > 2450) {
		countStartStatisticCount = 1;
		let count1 = setInterval(function counter1() {
			counterStatisticClients.innerHTML = countClients++;
			if (countClients >= counterStatisticClients.getAttribute("data_count")) {
				clearInterval(count1);
			}
		}, 1);

		let count2 = setInterval(function counter2() {
			counterStatisticCoffee.innerHTML = countCoffee++;
			if (countCoffee >= counterStatisticCoffee.getAttribute("data_count")) {
				clearInterval(count2);
			}
		}, 50);

		let count3 = setInterval(function counter3() {
			counterStatisticPosts.innerHTML = countPosts++;
			if (countPosts >= counterStatisticPosts.getAttribute("data_count")) {
				clearInterval(count3);
			}
		}, 1);

		let count4 = setInterval(function counter4() {
			counterStatisticLikes.innerHTML = countLikes++;
			if (countLikes >= counterStatisticLikes.getAttribute("data_count")) {
				clearInterval(count4);
			}
		}, 10);

		let count5 = setInterval(function counter5() {
			counterStatisticLaunched.innerHTML = countLaunched++;
			if (countLaunched >= counterStatisticLaunched.getAttribute("data_count")) {
				clearInterval(count5);
			}
		}, 10);
	}

	/*/scrollup================================================*/


	/*statistic__frameworks================================================*/
	let jqueryStatisticBlock = document.querySelector(".jquery__statistic_block");
	let vueStatisticBlock = document.querySelector(".vue__statistic_block");
	let reactStatisticBlock = document.querySelector(".react__statistic_block");
	let angularStatisticBlock = document.querySelector(".angular__statistic_block");

	if (pageYOffset > 3700 && countStartStatisticFrameworks == 0) {
		let countJquery = setInterval(function counterJquery() {
			jqueryStatisticBlock.style.height = `${countJqueryHeight++}px`;
			jqueryStatisticBlock.innerHTML = `${countJqueryHeight++}`;
			countStartStatisticFrameworks = 1;
			if (countJqueryHeight >= jqueryStatisticBlock.getAttribute("data_height")) {
				clearInterval(countJquery);
			}
		}, 50);


		let countVue = setInterval(function counterJquery() {
			vueStatisticBlock.style.height = `${countVueHeight++}px`;
			vueStatisticBlock.innerHTML = `${countVueHeight++}`;
			if (countVueHeight >= vueStatisticBlock.getAttribute("data_height")) {
				clearInterval(countVue);
			}
		}, 50);


		let countReact = setInterval(function counterJquery() {
			reactStatisticBlock.style.height = `${countReactHeight++}px`;
			reactStatisticBlock.innerHTML = `${countReactHeight++}`;
			if (countReactHeight >= reactStatisticBlock.getAttribute("data_height")) {
				clearInterval(countReact);
			}
		}, 50);

		let countAngular = setInterval(function counterJquery() {
			angularStatisticBlock.style.height = `${countAngularHeight++}px`;
			angularStatisticBlock.innerHTML = `${countAngularHeight++}`;
			if (countAngularHeight >= angularStatisticBlock.getAttribute("data_height")) {
				clearInterval(countAngular);
			}
		}, 50);
	}

	/*/statistic__frameworks================================================*/
}

/*/counter================================================*/


/*searchlive================================================*/
const search__item = document.querySelector(".search__image");
let search__input = document.querySelector(".search__input");
let searchValue = "";
const productsCardItems = document.querySelectorAll(".projects__card_bottom *");

search__item.onmouseover = function () {
	search__input.style.right = 35 + "px";
}

search__input.onkeyup = function () {
	searchValue = search__input.value;
	for (let i = 0; i < filterItems.length; i++) {
		if (productsCardItems[i].innerHTML == searchValue) {} else {
			console.log("such a query failed");
		}
		if (searchValue.length == 0) {
			productsCardItems[i].style.color = "";
		}
	}

}
/*/searchlive================================================*/
/*recentpostscardreadmore================================================*/
let recentpostscards = document.querySelectorAll(".recentposts__card");
const read__more_btn = document.querySelector(".read__more_btn");

let recentpostShowCard = 3;

for (let i = recentpostShowCard; i < recentpostscards.length; i++) {
	recentpostscards[i].style.display = "none";
}
read__more_btn.onclick = function readMore() {
	recentpostShowCard += 3;
	if (recentpostShowCard <= recentpostscards.length) {
		for (let i = 0; i < recentpostShowCard; i++) {
			recentpostscards[i].style.display = "flex";
		}
	}
}
/*/recentpostscardreadmore================================================*/
/*reviewsstars================================================*/

let reviewsCards = document.querySelectorAll(".reviews__card_stars");
let stars = [];

reviewsCards.forEach(function (elem) {
	stars.push(elem.children);
});


stars.forEach(function (review) {
	for (let i = 0; i < review.length; i++) {
		review[i].onclick = function () {
			let starassessment = i;
			for (let j = 0; j < review.length; j++) {
				review[j].innerHTML = "&#9734;";
			}
			for (let k = 0; k <= starassessment; k++) {
				review[k].innerHTML = "&#9733;";
			}
		}
	}
});


/*/reviewsstars================================================*/