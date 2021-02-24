// Instagram parallax
$(".parallax-instagram").parallax({
	imageSrc: "assets/img/instagram.jpg",
});

// Portada parallax
$(".parallax-portada").parallax({
	imageSrc: "assets/img/portada.jpg",
});

// ----------------------

// Smooth Scrolling:

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

// ----------------------

// Cuenta Regresiva:

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

// ----------------------
