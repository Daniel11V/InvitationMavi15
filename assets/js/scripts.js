////  Cuenta regresiva
var fechaCuentaRegresiva = "04/03/2021 17:00:00";

// Set the date we're counting down to
var countDownDate = new Date(fechaCuentaRegresiva).getTime();

// Update the count down every 1 second
var x = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementById("reloj").innerHTML =
		days + " días " + hours + "hs " + minutes + "m " + seconds + "s ";

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("reloj").innerHTML = "¡LLEGO EL GRAN DÍA!";
		$("#reloj").prev("p").html("Listo...");
	}
}, 1000);

////  Confetti
function confetti() {
	$.each($(".confetti"), function () {
		var confetticount = ($(this).width() / 50) * 8;
		for (var i = 0; i <= confetticount; i++) {
			$(this).append(
				'<span class="particle c' +
					$.rnd(1, 2, 0) +
					'" style="top:' +
					$.rnd(10, 40, 0) +
					"%; left:" +
					$.rnd(0, 100, 0) +
					"%;width: calc(" +
					$.rnd(0.025, 0.875, 3) +
					"vw + 8px) ; height: calc(" +
					$.rnd(0.012, 0.437, 3) +
					"vw + 5px);animation-delay: " +
					$.rnd(25, 45, 0) / 10 +
					's;"></span>'
			);
		}
	});
}

jQuery.rnd = function (m, n, decimales) {
	var precision = Math.pow(10, decimales);
	m = m * precision;
	n = n * precision;
	return Math.floor(Math.random() * (n - m + 1) + m) / precision;
};

confetti();

////  Scroll Transform Gold
window.onscroll = function () {
	// console.log("Vertical: " + window.scrollY);
	// console.log(900 - window.scrollY);

	let letter_num =
		($(window).height() * 1.1 - $(".letter_content").offset().top) /
		($(window).height() * 0.4 + $(window).width() * 0.01);

	let letter_num2 =
		$(window).height() * 1.1 - $(".letter_content").offset().top;

	// console.log("Letter: " + letter_num);
	if (window.scrollY < 290) {
		document
			.getElementById("mavi_gold")
			.setAttribute("fill-opacity", 1 - letter_num);

		document
			.getElementById("mis_quince_gold")
			.setAttribute("fill-opacity", letter_num);

		document
			.getElementById("mis_quince_gray")
			.setAttribute("fill-opacity", 1 - letter_num);

		// Unidad del svg
		document.getElementById("marco_gold").setAttribute("y", letter_num2);
	}
};

////  Horizontal Scroll
$(function () {
	function showSlide(n) {
		// n is relative position from current slide

		// unbind event listener to prevent retriggering
		$body.unbind("mousewheel");

		// increment slide number by n and keep within boundaries
		currSlide = Math.min(Math.max(0, currSlide + n), $slide.length - 1);

		var displacment = $(window).width() * 0.85 * currSlide;
		// translate slides div across to appropriate slide
		$slides.css("transform", "translateX(-" + displacment + "px)");
		// delay before rebinding event to prevent retriggering
		setTimeout(bind, 500);

		// change active class on link
		$("a.active").removeClass("active");
		$($(".nav_a")[currSlide]).addClass("active");
	}

	function bind() {
		$body.bind("mousewheel", mouseEvent);
	}

	function mouseEvent(e, delta) {
		// On down scroll, show next slide otherwise show prev slide
		showSlide(delta >= 0 ? -1 : 1);
		e.preventDefault();
	}

	$("nav a").click(function (e) {
		// When link clicked, find slide it points to
		var newslide = parseInt($(this).attr("href")[1]);
		// find how far it is from current slide
		var diff = newslide - currSlide - 1;
		showSlide(diff); // show that slide
		e.preventDefault();
	});

	$(window).resize(function () {
		// Keep current slide to left of window on resize
		var displacment = $(window).width() * 0.85 * currSlide;
		$slides.css("transform", "translateX(-" + displacment + "px)");
	});

	// cache
	var $body = $(".scroll");
	var currSlide = 0;
	var $slides = $(".sections");
	var $slide = $("section");

	// give active class to first link
	$($("nav a")[0]).addClass("active");

	// add event listener for mousescroll
	$body.bind("mousewheel", mouseEvent);

	// add event listener for touch
	var ts;
	$body.bind("touchstart", function (e) {
		ts = e.originalEvent.touches[0].clientX;
	});

	$body.bind("touchend", function (e) {
		var te = e.originalEvent.changedTouches[0].clientX;
		if (ts > te) {
			showSlide(1);
			console.log("left");
		} else {
			showSlide(-1);
			console.log("right");
		}
	});
});
